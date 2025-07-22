export const DOCUMENT_FIELDS: Record<string, { label: string; controlName: string; type: string; required?: boolean }[]> = {
  // NDA Templates
  "Basic MNDA Template": [
    { label: "Party 1 Name", controlName: "party1_name", type: "text", required: true },
    { label: "Party 2 Name", controlName: "party2_name", type: "text", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Confidential Information Description", controlName: "confidential_info", type: "textarea", required: true },
    { label: "Duration (Years)", controlName: "duration", type: "number", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  "Basic One-Way NDA Template": [
    { label: "Disclosing Party", controlName: "disclosing_party", type: "text", required: true },
    { label: "Receiving Party", controlName: "receiving_party", type: "text", required: true },
    { label: "Purpose of Disclosure", controlName: "purpose", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Term Duration", controlName: "term_duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  "One-Way NDA for Employees": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Employee Title", controlName: "employee_title", type: "text", required: true },
    { label: "Department", controlName: "department", type: "text", required: true },
    { label: "Start Date", controlName: "start_date", type: "date", required: true },
    { label: "Employment Duration", controlName: "employment_duration", type: "text", required: true },
    { label: "Confidential Information Types", controlName: "confidential_types", type: "textarea", required: true },
    { label: "Non-Disclosure Period", controlName: "nondisclosure_period", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  
  // Affidavit Templates
  "Basic Affidavit Template": [
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Affiant Address", controlName: "affiant_address", type: "text", required: true },
    { label: "Statement of Facts", controlName: "statement_facts", type: "textarea", required: true },
    { label: "Date of Affidavit", controlName: "affidavit_date", type: "date", required: true },
    { label: "Notary Information", controlName: "notary_info", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  "Affidavit of Identity": [
    { label: "Full Legal Name", controlName: "legal_name", type: "text", required: true },
    { label: "Date of Birth", controlName: "date_of_birth", type: "date", required: true },
    { label: "Social Security Number", controlName: "ssn", type: "text", required: true },
    { label: "Current Address", controlName: "current_address", type: "text", required: true },
    { label: "Previous Names", controlName: "previous_names", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  
  // Partnership Agreement Templates
  "Basic Partnership Agreement Template": [
    { label: "Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "Partner 1 Name", controlName: "partner1_name", type: "text", required: true },
    { label: "Partner 2 Name", controlName: "partner2_name", type: "text", required: true },
    { label: "Business Purpose", controlName: "business_purpose", type: "textarea", required: true },
    { label: "Capital Contribution", controlName: "capital_contribution", type: "number", required: true },
    { label: "Profit Sharing Ratio", controlName: "profit_sharing", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  "General Partnership Agreement for Business": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Business Address", controlName: "business_address", type: "text", required: true },
    { label: "Number of Partners", controlName: "num_partners", type: "number", required: true },
    { label: "Start Date", controlName: "start_date", type: "date", required: true },
    { label: "Initial Investment", controlName: "initial_investment", type: "number", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  
  // MOU Templates
  "Basic MOU Template": [
    { label: "Party 1 Organization", controlName: "party1_org", type: "text", required: true },
    { label: "Party 2 Organization", controlName: "party2_org", type: "text", required: true },
    { label: "Purpose of MOU", controlName: "mou_purpose", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Duration", controlName: "duration", type: "text", required: true },
    { label: "Key Responsibilities", controlName: "responsibilities", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],
  "MOU for Partnership": [
    { label: "Lead Organization", controlName: "lead_org", type: "text", required: true },
    { label: "Partner Organization", controlName: "partner_org", type: "text", required: true },
    { label: "Collaboration Scope", controlName: "scope", type: "textarea", required: true },
    { label: "Resource Allocation", controlName: "resources", type: "textarea", required: true },
    { label: "Success Metrics", controlName: "metrics", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Additional NDA Templates
  "Comprehensive MNDA Template": [
    { label: "First Party Company", controlName: "party1_company", type: "text", required: true },
    { label: "Second Party Company", controlName: "party2_company", type: "text", required: true },
    { label: "Project Name", controlName: "project_name", type: "text", required: true },
    { label: "Confidentiality Period (Years)", controlName: "confidentiality_period", type: "number", required: true },
    { label: "Permitted Uses", controlName: "permitted_uses", type: "textarea", required: true },
    { label: "Exceptions", controlName: "exceptions", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MNDA for Business Partnerships": [
    { label: "Partner 1 Name", controlName: "partner1_name", type: "text", required: true },
    { label: "Partner 2 Name", controlName: "partner2_name", type: "text", required: true },
    { label: "Partnership Purpose", controlName: "partnership_purpose", type: "textarea", required: true },
    { label: "Confidential Materials", controlName: "confidential_materials", type: "textarea", required: true },
    { label: "Disclosure Date", controlName: "disclosure_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Additional NDA Templates
  "MNDA for Joint Ventures": [
    { label: "Joint Venture Name", controlName: "jv_name", type: "text", required: true },
    { label: "Party A Company", controlName: "party_a_company", type: "text", required: true },
    { label: "Party B Company", controlName: "party_b_company", type: "text", required: true },
    { label: "Joint Venture Purpose", controlName: "jv_purpose", type: "textarea", required: true },
    { label: "Confidentiality Duration", controlName: "confidentiality_duration", type: "text", required: true },
    { label: "Shared Resources", controlName: "shared_resources", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Basic NDNC Template": [
    { label: "Employer Name", controlName: "employer_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Position Title", controlName: "position_title", type: "text", required: true },
    { label: "Non-Compete Duration", controlName: "noncompete_duration", type: "text", required: true },
    { label: "Geographic Restriction", controlName: "geographic_restriction", type: "text", required: true },
    { label: "Restricted Activities", controlName: "restricted_activities", type: "textarea", required: true },
    { label: "Compensation for Restriction", controlName: "compensation_restriction", type: "number" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Basic CNA Template": [
    { label: "First Party Name", controlName: "first_party_name", type: "text", required: true },
    { label: "Second Party Name", controlName: "second_party_name", type: "text", required: true },
    { label: "Agreement Purpose", controlName: "agreement_purpose", type: "textarea", required: true },
    { label: "Confidential Information Scope", controlName: "confidential_scope", type: "textarea", required: true },
    { label: "Agreement Duration", controlName: "agreement_duration", type: "text", required: true },
    { label: "Penalties for Breach", controlName: "breach_penalties", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Additional Partnership Agreement Templates
  "Partnership Agreement for Joint Venture": [
    { label: "Joint Venture Name", controlName: "jv_name", type: "text", required: true },
    { label: "Lead Partner", controlName: "lead_partner", type: "text", required: true },
    { label: "Secondary Partner", controlName: "secondary_partner", type: "text", required: true },
    { label: "Project Scope", controlName: "project_scope", type: "textarea", required: true },
    { label: "Investment Split", controlName: "investment_split", type: "text", required: true },
    { label: "Revenue Sharing", controlName: "revenue_sharing", type: "text", required: true },
    { label: "Project Duration", controlName: "project_duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Limited Partnership Agreement Template": [
    { label: "Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "General Partner", controlName: "general_partner", type: "text", required: true },
    { label: "Limited Partner", controlName: "limited_partner", type: "text", required: true },
    { label: "Investment Amount", controlName: "investment_amount", type: "number", required: true },
    { label: "Management Fee", controlName: "management_fee", type: "number" },
    { label: "Profit Distribution", controlName: "profit_distribution", type: "text", required: true },
    { label: "Partnership Term", controlName: "partnership_term", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Business Document Templates
  "Business Partnership Agreement Template": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Business Type", controlName: "business_type", type: "text", required: true },
    { label: "Primary Partner", controlName: "primary_partner", type: "text", required: true },
    { label: "Secondary Partner", controlName: "secondary_partner", type: "text", required: true },
    { label: "Business Address", controlName: "business_address", type: "text", required: true },
    { label: "Capital Contributions", controlName: "capital_contributions", type: "textarea", required: true },
    { label: "Management Responsibilities", controlName: "management_responsibilities", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // MOU Templates
  "Business MOU Template": [
    { label: "Organization A", controlName: "org_a", type: "text", required: true },
    { label: "Organization B", controlName: "org_b", type: "text", required: true },
    { label: "Business Objective", controlName: "business_objective", type: "textarea", required: true },
    { label: "Collaboration Framework", controlName: "collaboration_framework", type: "textarea", required: true },
    { label: "Resource Commitment", controlName: "resource_commitment", type: "textarea", required: true },
    { label: "Timeline", controlName: "timeline", type: "text", required: true },
    { label: "Success Indicators", controlName: "success_indicators", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "International MOU Template": [
    { label: "Country A Organization", controlName: "country_a_org", type: "text", required: true },
    { label: "Country B Organization", controlName: "country_b_org", type: "text", required: true },
    { label: "International Purpose", controlName: "international_purpose", type: "textarea", required: true },
    { label: "Cross-Border Activities", controlName: "crossborder_activities", type: "textarea", required: true },
    { label: "Legal Framework", controlName: "legal_framework", type: "text", required: true },
    { label: "Currency of Transaction", controlName: "currency", type: "text" },
    { label: "Governing Law", controlName: "governing_law", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Technology MOU Template": [
    { label: "Technology Provider", controlName: "tech_provider", type: "text", required: true },
    { label: "Technology Recipient", controlName: "tech_recipient", type: "text", required: true },
    { label: "Technology Description", controlName: "tech_description", type: "textarea", required: true },
    { label: "Implementation Timeline", controlName: "implementation_timeline", type: "text", required: true },
    { label: "Technical Support", controlName: "technical_support", type: "textarea" },
    { label: "Licensing Terms", controlName: "licensing_terms", type: "textarea", required: true },
    { label: "Intellectual Property Rights", controlName: "ip_rights", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // HR/Employment Document Templates
  "Basic ENDA Template": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Employee Position", controlName: "employee_position", type: "text", required: true },
    { label: "Department", controlName: "department", type: "text", required: true },
    { label: "Start Date", controlName: "start_date", type: "date", required: true },
    { label: "Confidential Information Types", controlName: "confidential_types", type: "textarea", required: true },
    { label: "Non-Disclosure Period", controlName: "nondisclosure_period", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "ENDA for New Employees": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "New Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Position Title", controlName: "position_title", type: "text", required: true },
    { label: "Department", controlName: "department", type: "text", required: true },
    { label: "Employment Start Date", controlName: "employment_start_date", type: "date", required: true },
    { label: "Supervisor Name", controlName: "supervisor_name", type: "text", required: true },
    { label: "Salary/Wage", controlName: "salary_wage", type: "number", required: true },
    { label: "Confidentiality Duration", controlName: "confidentiality_duration", type: "text", required: true },
    { label: "Training Period", controlName: "training_period", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "ENDA for Existing Employees": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Employee ID", controlName: "employee_id", type: "text", required: true },
    { label: "Current Position", controlName: "current_position", type: "text", required: true },
    { label: "Department", controlName: "department", type: "text", required: true },
    { label: "Employment Date", controlName: "employment_date", type: "date", required: true },
    { label: "New Confidentiality Terms", controlName: "new_confidentiality_terms", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "ENDA for Contract Employees": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Contractor Name", controlName: "contractor_name", type: "text", required: true },
    { label: "Contract Position", controlName: "contract_position", type: "text", required: true },
    { label: "Contract Start Date", controlName: "contract_start_date", type: "date", required: true },
    { label: "Contract End Date", controlName: "contract_end_date", type: "date", required: true },
    { label: "Project Name", controlName: "project_name", type: "text", required: true },
    { label: "Hourly Rate", controlName: "hourly_rate", type: "number", required: true },
    { label: "Confidentiality Terms", controlName: "confidentiality_terms", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Basic CNDA Template": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Consultant Name", controlName: "consultant_name", type: "text", required: true },
    { label: "Consulting Service", controlName: "consulting_service", type: "text", required: true },
    { label: "Project Description", controlName: "project_description", type: "textarea", required: true },
    { label: "Contract Duration", controlName: "contract_duration", type: "text", required: true },
    { label: "Compensation", controlName: "compensation", type: "number", required: true },
    { label: "Confidential Information", controlName: "confidential_information", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "CNDA for Independent Contractors": [
    { label: "Hiring Company", controlName: "hiring_company", type: "text", required: true },
    { label: "Contractor Name", controlName: "contractor_name", type: "text", required: true },
    { label: "Business License Number", controlName: "business_license", type: "text" },
    { label: "Service Type", controlName: "service_type", type: "text", required: true },
    { label: "Project Scope", controlName: "project_scope", type: "textarea", required: true },
    { label: "Payment Terms", controlName: "payment_terms", type: "text", required: true },
    { label: "Confidentiality Period", controlName: "confidentiality_period", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Employment": [
    { label: "Employer Name", controlName: "employer_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Position Title", controlName: "position_title", type: "text", required: true },
    { label: "Employment Start Date", controlName: "employment_start_date", type: "date", required: true },
    { label: "Current Salary", controlName: "current_salary", type: "number", required: true },
    { label: "Employment Status", controlName: "employment_status", type: "text", required: true },
    { label: "Work Schedule", controlName: "work_schedule", type: "text", required: true },
    { label: "HR Contact", controlName: "hr_contact", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Income for Employment": [
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Employer Name", controlName: "employer_name", type: "text", required: true },
    { label: "Annual Salary", controlName: "annual_salary", type: "number", required: true },
    { label: "Monthly Income", controlName: "monthly_income", type: "number", required: true },
    { label: "Pay Period", controlName: "pay_period", type: "text", required: true },
    { label: "Tax Year", controlName: "tax_year", type: "text", required: true },
    { label: "Additional Income Sources", controlName: "additional_income", type: "textarea" },
    { label: "Benefits Value", controlName: "benefits_value", type: "number" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Job Offer": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Candidate Name", controlName: "candidate_name", type: "text", required: true },
    { label: "Position Offered", controlName: "position_offered", type: "text", required: true },
    { label: "Offer Date", controlName: "offer_date", type: "date", required: true },
    { label: "Start Date", controlName: "start_date", type: "date", required: true },
    { label: "Offered Salary", controlName: "offered_salary", type: "number", required: true },
    { label: "Benefits Package", controlName: "benefits_package", type: "textarea" },
    { label: "Job Requirements", controlName: "job_requirements", type: "textarea", required: true },
    { label: "Reporting Manager", controlName: "reporting_manager", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Termination": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Employee ID", controlName: "employee_id", type: "text", required: true },
    { label: "Position Title", controlName: "position_title", type: "text", required: true },
    { label: "Termination Date", controlName: "termination_date", type: "date", required: true },
    { label: "Reason for Termination", controlName: "termination_reason", type: "textarea", required: true },
    { label: "Final Work Date", controlName: "final_work_date", type: "date", required: true },
    { label: "Final Compensation", controlName: "final_compensation", type: "number" },
    { label: "Benefits Continuation", controlName: "benefits_continuation", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ]
};
