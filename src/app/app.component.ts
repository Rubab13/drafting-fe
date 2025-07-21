import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LEGAL_DOCUMENTS_DATA } from 'src/data/legal-documents-data';
import { DOCUMENT_FIELDS } from 'src/data/document-fields';

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
  dynamicFields: any[] = [];

  constructor(private fb: FormBuilder) {
    this.stepForm = this.fb.group({
      state: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required]
    });
  }

  onStateChange() {
    const state = this.stepForm.get('state')?.value;
    this.categories = Object.keys(this.legalData[state] || {});
    this.stepForm.get('category')?.reset();
    this.stepForm.get('subcategory')?.reset();
    this.subcategories = [];
    this.dynamicFields = [];
  }

  onCategoryChange() {
    const state = this.stepForm.get('state')?.value;
    const category = this.stepForm.get('category')?.value;
    this.subcategories = this.legalData[state]?.[category] || [];
    this.stepForm.get('subcategory')?.reset();
    this.dynamicFields = [];
  }

  onSubcategoryChange() {
    const subcategory = this.stepForm.get('subcategory')?.value;
    this.dynamicFields = this.fieldsMap[subcategory] || [];

    const group: any = {};
    this.dynamicFields.forEach(field => {
      group[field.controlName] = ['', field.required ? Validators.required : []];
    });
    this.formDataGroup = this.fb.group(group);
  }

  onSubmit() {
    console.log('Template:', this.stepForm.value.subcategory);
    console.log('Filled Data:', this.formDataGroup.value);
  }

}
