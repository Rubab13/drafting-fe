import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LEGAL_DOCUMENTS_DATA } from 'src/data/legal-documents-data';
import { DOCUMENT_FIELDS } from 'src/data/document-fields';
import { DocumentService, DocumentGenerationRequest, DocumentGenerationResponse } from './services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stepForm: FormGroup;
  formDataGroup: FormGroup = this.fb.group({});
  legalData: any = LEGAL_DOCUMENTS_DATA;
  fieldsMap = DOCUMENT_FIELDS;

  states = Object.keys(this.legalData);
  categories: string[] = [];
  subcategories: string[] = [];
  templates: string[] = [];
  dynamicFields: any[] = [];
  
  // New properties for split view and chatbot
  showSplitView = false;
  selectedPdfPath = '';
  safePdfUrl: SafeResourceUrl | null = null;
  chatMessages: { text: string; isUser: boolean; timestamp: Date }[] = [];
  currentMessage = '';

  // Document generation properties
  isGenerating = false;
  generatedDocument = '';
  showGeneratedDocument = false;
  generatedDocumentId = '';
  pdfDownloadUrl = '';
  showGeneratedInterface = false; // New property for generated document interface
  documentGeneratedTime = ''; // Property to store generation time

  constructor(
    private fb: FormBuilder, 
    private sanitizer: DomSanitizer,
    private documentService: DocumentService
  ) {
    this.stepForm = this.fb.group({
      state: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      template: ['', Validators.required]
    });
    
    // Initialize chat with welcome message
    this.chatMessages.push({
      text: "Hello! I'm your legal document assistant. I can help you understand and fill out your documents. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    });
  }

  onStateChange() {
    const state = this.stepForm.get('state')?.value;
    this.categories = Object.keys(this.legalData[state] || {});
    
    // Reset dependent fields
    this.stepForm.patchValue({
      category: '',
      subcategory: '',
      template: ''
    });
    this.subcategories = [];
    this.templates = [];
    this.dynamicFields = [];
    this.formDataGroup = this.fb.group({});
  }

  onCategoryChange() {
    const state = this.stepForm.get('state')?.value;
    const category = this.stepForm.get('category')?.value;
    this.subcategories = Object.keys(this.legalData[state]?.[category] || {});
    
    // Reset dependent fields
    this.stepForm.patchValue({
      subcategory: '',
      template: ''
    });
    this.templates = [];
    this.dynamicFields = [];
    this.formDataGroup = this.fb.group({});
  }

  onSubcategoryChange() {
    const state = this.stepForm.get('state')?.value;
    const category = this.stepForm.get('category')?.value;
    const subcategory = this.stepForm.get('subcategory')?.value;
    this.templates = this.legalData[state]?.[category]?.[subcategory] || [];
    
    // Reset dependent fields
    this.stepForm.patchValue({
      template: ''
    });
    this.dynamicFields = [];
    this.formDataGroup = this.fb.group({});
  }

  onTemplateChange() {
    const template = this.stepForm.get('template')?.value;
    
    this.dynamicFields = this.fieldsMap[template] || [];

    const group: any = {};
    this.dynamicFields.forEach(field => {
      group[field.controlName] = ['', field.required ? Validators.required : []];
    });
    this.formDataGroup = this.fb.group(group);
  }

  // New method to handle "Next" button click
  onNextClick() {
    const category = this.stepForm.get('category')?.value;
    this.showSplitView = true;
    
    // Set PDF path based on category (using assets folder)
    switch(category) {
      case 'NDA':
        this.selectedPdfPath = '/assets/templates/NDA.pdf';
        break;
      case 'MOU':
        this.selectedPdfPath = '/assets/templates/MOU.pdf';
        break;
      case 'Partnership Agreement':
        this.selectedPdfPath = '/assets/templates/Partnership-Agreement.pdf';
        break;
      case 'Affidavits':
        this.selectedPdfPath = '/assets/templates/Affidavits.pdf';
        break;
      default:
        this.selectedPdfPath = '';
    }
    
    // Create safe URL for PDF
    if (this.selectedPdfPath) {
      // Add PDF.js parameters for better viewing
      const pdfUrl = `${this.selectedPdfPath}#toolbar=1&navpanes=1&scrollbar=1&page=1&zoom=auto`;
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
    }
    
    // Add context message to chat
    this.chatMessages.push({
      text: `I see you're working with ${category} documents. I'm here to help you understand the template and fill out the required information. Feel free to ask me any questions!`,
      isUser: false,
      timestamp: new Date()
    });
  }

  // Chat functionality
  sendMessage() {
    if (this.currentMessage.trim()) {
      // Add user message
      this.chatMessages.push({
        text: this.currentMessage,
        isUser: true,
        timestamp: new Date()
      });
      
      // Simulate bot response (you can integrate with actual AI later)
      setTimeout(() => {
        this.chatMessages.push({
          text: this.generateBotResponse(this.currentMessage),
          isUser: false,
          timestamp: new Date()
        });
      }, 1000);
      
      this.currentMessage = '';
    }
  }

  generateBotResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    const category = this.stepForm.get('category')?.value;
    
    if (message.includes('help') || message.includes('how')) {
      return `I can help you with your ${category} document. What specific information do you need help with?`;
    } else if (message.includes('field') || message.includes('fill')) {
      return `To fill out this ${category} document, please complete all the required fields on the left. I can explain what each field means if you'd like.`;
    } else if (message.includes('what') || message.includes('explain')) {
      return `This ${category} document is used for legal agreements. Each field serves a specific purpose. Which field would you like me to explain?`;
    } else {
      return `Thank you for your question about the ${category} document. I'm here to help guide you through the process. Could you be more specific about what you need assistance with?`;
    }
  }

  goBackToForm() {
    this.showSplitView = false;
  }

  downloadPdf() {
    if (this.selectedPdfPath) {
      const link = document.createElement('a');
      link.href = this.selectedPdfPath;
      link.download = this.selectedPdfPath.split('/').pop() || 'template.pdf';
      link.click();
    }
  }

  openPdfInNewTab() {
    if (this.selectedPdfPath) {
      window.open(this.selectedPdfPath, '_blank');
    }
  }

  onSubmit() {
    if (this.stepForm.valid && this.formDataGroup.valid) {
      this.isGenerating = true;
      
      // Prepare request data
      const request: DocumentGenerationRequest = {
        selection_data: {
          state: this.stepForm.get('state')?.value,
          category: this.stepForm.get('category')?.value,
          subcategory: this.stepForm.get('subcategory')?.value,
          template: this.stepForm.get('template')?.value
        },
        field_data: {
          field_data: this.formDataGroup.value
        }
      };

      // Call backend API
      this.documentService.generateDocument(request).subscribe({
        next: (response: DocumentGenerationResponse) => {
          this.isGenerating = false;
          if (response.success) {
            // Show beautiful interface in same tab
            this.generatedDocument = response.generated_document;
            this.generatedDocumentId = response.document_id;
            this.pdfDownloadUrl = response.pdf_url || '';
            this.documentGeneratedTime = new Date().toLocaleString();
            this.showGeneratedInterface = true;
            this.showSplitView = false; // Hide the split view
            
            // Add success message to chat
            this.chatMessages.push({
              text: "Perfect! Your document has been generated successfully. You can now review, edit, or download it.",
              isUser: false,
              timestamp: new Date()
            });
          } else {
            alert('Document generation failed: ' + response.message);
          }
        },
        error: (error) => {
          this.isGenerating = false;
          console.error('Document generation error:', error);
          alert('Error generating document. Please try again.');
          
          this.chatMessages.push({
            text: "Sorry, there was an error generating your document. Please check your internet connection and try again.",
            isUser: false,
            timestamp: new Date()
          });
        }
      });
    } else {
      alert('Please fill in all required fields before generating the document.');
    }
  }

  openGeneratedDocumentInNewWindow(response: DocumentGenerationResponse) {
    // Create new window with better parameters for separate window
    const windowFeatures = 'width=1200,height=800,scrollbars=yes,resizable=yes,toolbar=yes,menubar=yes,location=no,status=yes,left=100,top=100';
    const newWindow = window.open('', '_blank', windowFeatures);
    
    if (newWindow) {
      // Focus the new window
      newWindow.focus();
      
      const documentContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Generated Legal Document</title>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Times New Roman', serif;
              line-height: 1.8;
              margin: 0;
              padding: 0;
              background: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: 20px auto;
              background: white;
              padding: 40px;
              box-shadow: 0 0 20px rgba(0,0,0,0.1);
              border-radius: 8px;
            }
            .header {
              background: linear-gradient(135deg, #1976d2, #1565c0);
              color: white;
              padding: 20px;
              margin: -40px -40px 30px -40px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .document-content {
              white-space: pre-wrap;
              font-size: 14px;
              color: #333;
              border: 1px solid #e0e0e0;
              padding: 30px;
              border-radius: 6px;
              background: #fafafa;
              margin-bottom: 30px;
            }
            .actions {
              text-align: center;
              padding: 20px 0;
              border-top: 1px solid #e0e0e0;
            }
            .btn {
              background: #1976d2;
              color: white;
              border: none;
              padding: 12px 24px;
              margin: 0 10px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              text-decoration: none;
              display: inline-block;
              transition: background-color 0.3s;
            }
            .btn:hover {
              background: #1565c0;
            }
            .btn-secondary {
              background: #757575;
            }
            .btn-secondary:hover {
              background: #616161;
            }
            .document-info {
              background: #e3f2fd;
              padding: 15px;
              border-radius: 6px;
              margin-bottom: 20px;
              border-left: 4px solid #1976d2;
            }
            .document-info h3 {
              margin: 0 0 10px 0;
              color: #1976d2;
            }
            .document-info p {
              margin: 5px 0;
              color: #333;
            }
            @media print {
              .header, .actions, .document-info { display: none; }
              .container { box-shadow: none; margin: 0; padding: 20px; }
              .document-content { border: none; background: white; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📄 Generated Legal Document</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Document ID: ${response.document_id}</p>
            </div>
            
            <div class="document-info">
              <h3>Document Information</h3>
              <p><strong>State:</strong> ${this.stepForm.get('state')?.value}</p>
              <p><strong>Category:</strong> ${this.stepForm.get('category')?.value}</p>
              <p><strong>Document Type:</strong> ${this.stepForm.get('subcategory')?.value}</p>
              <p><strong>Template:</strong> ${this.stepForm.get('template')?.value}</p>
              <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="document-content">${response.generated_document}</div>
            
            <div class="actions">
              <button class="btn" onclick="downloadPdf()">
                📥 Download PDF
              </button>
              <button class="btn btn-secondary" onclick="window.print()">
                🖨️ Print Document
              </button>
              <button class="btn btn-secondary" onclick="copyToClipboard()">
                📋 Copy Text
              </button>
              <button class="btn btn-secondary" onclick="window.close()">
                ❌ Close Window
              </button>
            </div>
          </div>
          
          <script>
            function downloadPdf() {
              fetch('http://localhost:8000${response.pdf_url}')
                .then(response => response.blob())
                .then(blob => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'legal_document_${response.document_id}.pdf';
                  a.click();
                  window.URL.revokeObjectURL(url);
                })
                .catch(error => {
                  alert('Error downloading PDF: ' + error.message);
                });
            }
            
            function copyToClipboard() {
              const documentText = document.querySelector('.document-content').textContent;
              navigator.clipboard.writeText(documentText).then(function() {
                alert('Document text copied to clipboard!');
              }, function(err) {
                alert('Could not copy text: ' + err);
              });
            }
            
            // Auto-focus window
            window.focus();
          </script>
        </body>
        </html>
      `;
      
      newWindow.document.write(documentContent);
      newWindow.document.close();
    } else {
      // Fallback if popup is blocked
      alert('Popup blocked! Please allow popups for this site and try again.');
      this.generatedDocument = response.generated_document;
      this.generatedDocumentId = response.document_id;
      this.pdfDownloadUrl = response.pdf_url || '';
      this.showGeneratedDocument = true;
    }
  }

  downloadGeneratedPdf() {
    if (this.generatedDocumentId) {
      this.documentService.downloadPdf(this.generatedDocumentId).subscribe({
        next: (blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `legal_document_${this.generatedDocumentId}.pdf`;
          link.click();
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          console.error('PDF download error:', error);
          alert('Error downloading PDF. Please try again.');
        }
      });
    }
  }

  goBackToFormFromGenerated() {
    this.showGeneratedInterface = false;
    this.showSplitView = false;
    this.generatedDocument = '';
    this.generatedDocumentId = '';
    this.documentGeneratedTime = '';
  }

  printGeneratedDocument() {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Legal Document</title>
            <style>
              body { font-family: 'Times New Roman', serif; margin: 20px; line-height: 1.6; }
              pre { white-space: pre-wrap; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${this.generatedDocument}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  openFullScreenDocument(response: DocumentGenerationResponse) {
    // Create full screen window
    const fullScreenWindow = window.open(
      '', 
      '_blank', 
      'fullscreen=yes,width=' + screen.width + ',height=' + screen.height + ',scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
    );
    
    if (fullScreenWindow) {
      const fullScreenContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Generated Legal Document - Full Screen</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Times New Roman', serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: #333;
              overflow-x: hidden;
            }
            
            .full-screen-container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
            
            .header-bar {
              background: rgba(0,0,0,0.9);
              color: white;
              padding: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              backdrop-filter: blur(10px);
              border-bottom: 2px solid #1976d2;
            }
            
            .header-title {
              font-size: 28px;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 15px;
            }
            
            .header-actions {
              display: flex;
              gap: 15px;
            }
            
            .btn {
              background: #1976d2;
              color: white;
              border: none;
              padding: 12px 20px;
              border-radius: 8px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              gap: 8px;
            }
            
            .btn:hover {
              background: #1565c0;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(25,118,210,0.3);
            }
            
            .btn-danger {
              background: #f44336;
            }
            
            .btn-danger:hover {
              background: #d32f2f;
            }
            
            .btn-success {
              background: #4caf50;
            }
            
            .btn-success:hover {
              background: #45a049;
            }
            
            .document-info-bar {
              background: rgba(255,255,255,0.95);
              padding: 20px;
              backdrop-filter: blur(10px);
              border-bottom: 1px solid #e0e0e0;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
            }
            
            .info-card {
              background: white;
              padding: 15px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              border-left: 4px solid #1976d2;
            }
            
            .info-label {
              font-weight: 600;
              color: #1976d2;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            
            .info-value {
              color: #333;
              font-size: 14px;
            }
            
            .document-content-area {
              flex: 1;
              padding: 30px;
              display: flex;
              justify-content: center;
            }
            
            .document-viewer {
              background: white;
              border-radius: 15px;
              box-shadow: 0 10px 40px rgba(0,0,0,0.1);
              max-width: 900px;
              width: 100%;
              padding: 40px;
              min-height: calc(100vh - 300px);
              animation: slideInUp 0.5s ease-out;
            }
            
            .document-text {
              line-height: 1.8;
              color: #333;
              white-space: pre-wrap;
              font-size: 16px;
              letter-spacing: 0.3px;
            }
            
            .floating-actions {
              position: fixed;
              bottom: 30px;
              right: 30px;
              display: flex;
              flex-direction: column;
              gap: 15px;
              z-index: 1000;
            }
            
            .floating-btn {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: #1976d2;
              color: white;
              border: none;
              cursor: pointer;
              box-shadow: 0 4px 20px rgba(25,118,210,0.3);
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
            }
            
            .floating-btn:hover {
              transform: scale(1.1);
              box-shadow: 0 6px 25px rgba(25,118,210,0.4);
            }
            
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @media (max-width: 768px) {
              .header-bar {
                flex-direction: column;
                gap: 15px;
                text-align: center;
              }
              
              .document-info-bar {
                grid-template-columns: 1fr;
              }
              
              .document-content-area {
                padding: 15px;
              }
              
              .document-viewer {
                padding: 20px;
              }
              
              .floating-actions {
                bottom: 15px;
                right: 15px;
              }
            }
            
            @media print {
              .header-bar, .document-info-bar, .floating-actions { 
                display: none !important; 
              }
              .document-content-area { 
                padding: 0; 
              }
              .document-viewer { 
                box-shadow: none; 
                border-radius: 0;
                max-width: none;
              }
              body { 
                background: white; 
              }
            }
          </style>
        </head>
        <body>
          <div class="full-screen-container">
            <!-- Header Bar -->
            <div class="header-bar">
              <div class="header-title">
                📄 Generated Legal Document
              </div>
              <div class="header-actions">
                <button class="btn btn-success" onclick="downloadPdf()">
                  📥 Download PDF
                </button>
                <button class="btn" onclick="window.print()">
                  🖨️ Print
                </button>
                <button class="btn btn-danger" onclick="window.close()">
                  ❌ Close
                </button>
              </div>
            </div>
            
            <!-- Document Information Bar -->
            <div class="document-info-bar">
              <div class="info-card">
                <div class="info-label">State</div>
                <div class="info-value">${this.stepForm.get('state')?.value}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Category</div>
                <div class="info-value">${this.stepForm.get('category')?.value}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Document Type</div>
                <div class="info-value">${this.stepForm.get('subcategory')?.value}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Template</div>
                <div class="info-value">${this.stepForm.get('template')?.value}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Generated</div>
                <div class="info-value">${new Date().toLocaleString()}</div>
              </div>
              <div class="info-card">
                <div class="info-label">Document ID</div>
                <div class="info-value">${response.document_id}</div>
              </div>
            </div>
            
            <!-- Document Content -->
            <div class="document-content-area">
              <div class="document-viewer">
                <div class="document-text">${response.generated_document}</div>
              </div>
            </div>
            
            <!-- Floating Action Buttons -->
            <div class="floating-actions">
              <button class="floating-btn" onclick="copyToClipboard()" title="Copy Text">
                📋
              </button>
              <button class="floating-btn" onclick="toggleFullscreen()" title="Toggle Fullscreen">
                🔍
              </button>
            </div>
          </div>
          
          <script>
            // Download PDF function
            function downloadPdf() {
              fetch('http://localhost:8001${response.pdf_url}')
                .then(response => {
                  if (!response.ok) throw new Error('Download failed');
                  return response.blob();
                })
                .then(blob => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'legal_document_${response.document_id}.pdf';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                })
                .catch(error => {
                  alert('Error downloading PDF: ' + error.message);
                });
            }
            
            // Copy to clipboard function
            function copyToClipboard() {
              const documentText = document.querySelector('.document-text').textContent;
              navigator.clipboard.writeText(documentText).then(function() {
                alert('Document text copied to clipboard!');
              }, function(err) {
                alert('Could not copy text: ' + err);
              });
            }
            
            // Toggle fullscreen function
            function toggleFullscreen() {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else {
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                }
              }
            }
            
            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
              if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                window.print();
              }
              if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                downloadPdf();
              }
              if (e.key === 'Escape') {
                window.close();
              }
              if (e.key === 'F11') {
                e.preventDefault();
                toggleFullscreen();
              }
            });
            
            // Auto-focus and maximize window
            window.focus();
            
            // Try to go fullscreen on load
            setTimeout(() => {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              }
            }, 500);
          </script>
        </body>
        </html>
      `;
      
      fullScreenWindow.document.write(fullScreenContent);
      fullScreenWindow.document.close();
      
      // Try to maximize the window
      fullScreenWindow.moveTo(0, 0);
      fullScreenWindow.resizeTo(screen.width, screen.height);
      
    } else {
      // Fallback if popup is blocked
      alert('Popup blocked! Please allow popups for this site to view the document in full screen.');
      
      // Show in current window as fallback
      this.generatedDocument = response.generated_document;
      this.generatedDocumentId = response.document_id;
      this.pdfDownloadUrl = response.pdf_url || '';
      this.documentGeneratedTime = new Date().toLocaleString();
      this.showGeneratedInterface = true;
    }
  }

}
