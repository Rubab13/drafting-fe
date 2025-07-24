import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DocumentSelectionData {
  state: string;
  category: string;
  subcategory: string;
  template: string;
}

export interface DocumentFieldData {
  field_data: { [key: string]: any };
}

export interface DocumentGenerationRequest {
  selection_data: DocumentSelectionData;
  field_data: DocumentFieldData;
}

export interface DocumentGenerationResponse {
  success: boolean;
  generated_document: string;
  document_id: string;
  pdf_url?: string;
  message: string;
}

export interface DocumentQuestionRequest {
  question: string;
  document_template: string;
  current_template_content?: string;
}

export interface DocumentQuestionResponse {
  success: boolean;
  answer: string;
  guidance: string;
  relevant_fields: string[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl = 'http://localhost:8000/api';  // Changed back to correct port 8000

  constructor(private http: HttpClient) { }

  generateDocument(request: DocumentGenerationRequest): Observable<DocumentGenerationResponse> {
    return this.http.post<DocumentGenerationResponse>(`${this.baseUrl}/generate-document`, request);
  }

  downloadPdf(documentId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download-pdf/${documentId}`, {
      responseType: 'blob'
    });
  }

  checkHealth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`);
  }

  askAIAssistant(request: DocumentQuestionRequest): Observable<DocumentQuestionResponse> {
    return this.http.post<DocumentQuestionResponse>(`${this.baseUrl}/ai-assistant`, request);
  }
}
