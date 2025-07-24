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

  "One-Way NDA for Consultants": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Consultant Name", controlName: "consultant_name", type: "text", required: true },
    { label: "Consulting Service", controlName: "consulting_service", type: "text", required: true },
    { label: "Project Duration", controlName: "project_duration", type: "text", required: true },
    { label: "Confidential Information Types", controlName: "confidential_types", type: "textarea", required: true },
    { label: "Non-Disclosure Period", controlName: "nondisclosure_period", type: "text", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "One-Way NDA for Vendors": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Vendor Name", controlName: "vendor_name", type: "text", required: true },
    { label: "Vendor Service", controlName: "vendor_service", type: "text", required: true },
    { label: "Contract Period", controlName: "contract_period", type: "text", required: true },
    { label: "Confidential Information Types", controlName: "confidential_types", type: "textarea", required: true },
    { label: "Non-Disclosure Period", controlName: "nondisclosure_period", type: "text", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
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

  "Affidavit of Income": [
    { label: "Full Name", controlName: "full_name", type: "text", required: true },
    { label: "Address", controlName: "address", type: "text", required: true },
    { label: "Annual Income", controlName: "annual_income", type: "number", required: true },
    { label: "Monthly Income", controlName: "monthly_income", type: "number", required: true },
    { label: "Income Source", controlName: "income_source", type: "text", required: true },
    { label: "Employer Name", controlName: "employer_name", type: "text", required: true },
    { label: "Tax Year", controlName: "tax_year", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Residence": [
    { label: "Full Name", controlName: "full_name", type: "text", required: true },
    { label: "Current Address", controlName: "current_address", type: "text", required: true },
    { label: "Length of Residence", controlName: "residence_length", type: "text", required: true },
    { label: "Previous Address", controlName: "previous_address", type: "text" },
    { label: "Date of Affidavit", controlName: "affidavit_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Property Value": [
    { label: "Property Owner Name", controlName: "owner_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Value", controlName: "property_value", type: "number", required: true },
    { label: "Valuation Date", controlName: "valuation_date", type: "date", required: true },
    { label: "Property Type", controlName: "property_type", type: "text", required: true },
    { label: "Valuation Method", controlName: "valuation_method", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Property Ownership": [
    { label: "Owner Name", controlName: "owner_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Description", controlName: "property_description", type: "textarea", required: true },
    { label: "Ownership Date", controlName: "ownership_date", type: "date", required: true },
    { label: "Deed Number", controlName: "deed_number", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of No Lien": [
    { label: "Property Owner", controlName: "property_owner", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Description", controlName: "property_description", type: "textarea", required: true },
    { label: "Statement of No Lien", controlName: "no_lien_statement", type: "textarea", required: true },
    { label: "Date of Affidavit", controlName: "affidavit_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Missing Affidavit Templates
  "Affidavit of Business Identity": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Business Owner", controlName: "business_owner", type: "text", required: true },
    { label: "Business Address", controlName: "business_address", type: "text", required: true },
    { label: "Business Type", controlName: "business_type", type: "text", required: true },
    { label: "Registration Number", controlName: "registration_number", type: "text", required: true },
    { label: "Date of Formation", controlName: "formation_date", type: "date", required: true },
    { label: "Business Activities", controlName: "business_activities", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Business Ownership": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Owner Name", controlName: "owner_name", type: "text", required: true },
    { label: "Ownership Percentage", controlName: "ownership_percentage", type: "number", required: true },
    { label: "Business Address", controlName: "business_address", type: "text", required: true },
    { label: "Ownership Start Date", controlName: "ownership_start_date", type: "date", required: true },
    { label: "Investment Amount", controlName: "investment_amount", type: "number" },
    { label: "Ownership Details", controlName: "ownership_details", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Good Standing": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "State of Incorporation", controlName: "state_incorporation", type: "text", required: true },
    { label: "Registration Number", controlName: "registration_number", type: "text", required: true },
    { label: "Good Standing Statement", controlName: "good_standing_statement", type: "textarea", required: true },
    { label: "Filing Status", controlName: "filing_status", type: "text", required: true },
    { label: "Tax Compliance", controlName: "tax_compliance", type: "text", required: true },
    { label: "Date of Affidavit", controlName: "affidavit_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Service": [
    { label: "Server Name", controlName: "server_name", type: "text", required: true },
    { label: "Document Served", controlName: "document_served", type: "text", required: true },
    { label: "Person Served", controlName: "person_served", type: "text", required: true },
    { label: "Service Address", controlName: "service_address", type: "text", required: true },
    { label: "Date of Service", controlName: "service_date", type: "date", required: true },
    { label: "Method of Service", controlName: "service_method", type: "text", required: true },
    { label: "Service Details", controlName: "service_details", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Notice": [
    { label: "Notice Giver", controlName: "notice_giver", type: "text", required: true },
    { label: "Notice Recipient", controlName: "notice_recipient", type: "text", required: true },
    { label: "Notice Type", controlName: "notice_type", type: "text", required: true },
    { label: "Notice Content", controlName: "notice_content", type: "textarea", required: true },
    { label: "Date of Notice", controlName: "notice_date", type: "date", required: true },
    { label: "Method of Notice", controlName: "notice_method", type: "text", required: true },
    { label: "Compliance Period", controlName: "compliance_period", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // New Affidavit Templates from assets/templates folder
  "Affidavit of Death": [
    { label: "Deceased Person Name", controlName: "deceased_name", type: "text", required: true },
    { label: "Date of Death", controlName: "death_date", type: "date", required: true },
    { label: "Place of Death", controlName: "death_place", type: "text", required: true },
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Relationship to Deceased", controlName: "relationship_deceased", type: "text", required: true },
    { label: "Deceased Address at Time of Death", controlName: "deceased_address", type: "text", required: true },
    { label: "Cause of Death", controlName: "cause_of_death", type: "text", required: true },
    { label: "Death Certificate Number", controlName: "death_certificate_number", type: "text" },
    { label: "Surviving Family Members", controlName: "surviving_family", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Domicile": [
    { label: "Deceased Person Name", controlName: "deceased_name", type: "text", required: true },
    { label: "Date of Death", controlName: "death_date", type: "date", required: true },
    { label: "Domicile State", controlName: "domicile_state", type: "text", required: true },
    { label: "Domicile Address", controlName: "domicile_address", type: "text", required: true },
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Relationship to Deceased", controlName: "relationship_deceased", type: "text", required: true },
    { label: "Length of Residence", controlName: "residence_length", type: "text", required: true },
    { label: "Tax Residence State", controlName: "tax_residence_state", type: "text", required: true },
    { label: "Voting Registration State", controlName: "voting_state", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Gift": [
    { label: "Donor Name", controlName: "donor_name", type: "text", required: true },
    { label: "Recipient Name", controlName: "recipient_name", type: "text", required: true },
    { label: "Gift Description", controlName: "gift_description", type: "textarea", required: true },
    { label: "Gift Value", controlName: "gift_value", type: "number", required: true },
    { label: "Date of Gift", controlName: "gift_date", type: "date", required: true },
    { label: "Relationship to Recipient", controlName: "relationship_recipient", type: "text", required: true },
    { label: "Reason for Gift", controlName: "gift_reason", type: "textarea", required: true },
    { label: "Property Location", controlName: "property_location", type: "text" },
    { label: "Donor Address", controlName: "donor_address", type: "text", required: true },
    { label: "Recipient Address", controlName: "recipient_address", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Heirship": [
    { label: "Deceased Person Name", controlName: "deceased_name", type: "text", required: true },
    { label: "Date of Death", controlName: "death_date", type: "date", required: true },
    { label: "Place of Death", controlName: "death_place", type: "text", required: true },
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Relationship to Deceased", controlName: "relationship_deceased", type: "text", required: true },
    { label: "Deceased Last Address", controlName: "deceased_address", type: "text", required: true },
    { label: "Marital Status at Death", controlName: "marital_status", type: "text", required: true },
    { label: "Surviving Spouse Name", controlName: "surviving_spouse", type: "text" },
    { label: "Heirs Information", controlName: "heirs_information", type: "textarea", required: true },
    { label: "Property Description", controlName: "property_description", type: "textarea", required: true },
    { label: "Will Existence", controlName: "will_existence", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Paternity": [
    { label: "Father Name", controlName: "father_name", type: "text", required: true },
    { label: "Mother Name", controlName: "mother_name", type: "text", required: true },
    { label: "Child Name", controlName: "child_name", type: "text", required: true },
    { label: "Child Date of Birth", controlName: "child_birth_date", type: "date", required: true },
    { label: "Child Place of Birth", controlName: "child_birth_place", type: "text", required: true },
    { label: "Father Address", controlName: "father_address", type: "text", required: true },
    { label: "Mother Address", controlName: "mother_address", type: "text", required: true },
    { label: "Relationship Period", controlName: "relationship_period", type: "text", required: true },
    { label: "Paternity Acknowledgment", controlName: "paternity_acknowledgment", type: "textarea", required: true },
    { label: "Genetic Testing", controlName: "genetic_testing", type: "text" },
    { label: "Child Support Agreement", controlName: "child_support", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Affidavit of Residency": [
    { label: "Resident Name", controlName: "resident_name", type: "text", required: true },
    { label: "Current Address", controlName: "current_address", type: "text", required: true },
    { label: "Length of Residence", controlName: "residence_length", type: "text", required: true },
    { label: "Previous Address", controlName: "previous_address", type: "text" },
    { label: "Purpose of Residency Proof", controlName: "residency_purpose", type: "text", required: true },
    { label: "Rent/Own Status", controlName: "rent_own_status", type: "text", required: true },
    { label: "Landlord/Property Manager", controlName: "landlord_name", type: "text" },
    { label: "Utility Bills in Name", controlName: "utility_bills", type: "text" },
    { label: "Voter Registration Address", controlName: "voter_registration", type: "text" },
    { label: "Date of Affidavit", controlName: "affidavit_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Financial Affidavit": [
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Affiant Address", controlName: "affiant_address", type: "text", required: true },
    { label: "Social Security Number", controlName: "ssn", type: "text", required: true },
    { label: "Date of Birth", controlName: "date_of_birth", type: "date", required: true },
    { label: "Occupation", controlName: "occupation", type: "text", required: true },
    { label: "Employer Name", controlName: "employer_name", type: "text", required: true },
    { label: "Monthly Gross Income", controlName: "monthly_gross_income", type: "number", required: true },
    { label: "Monthly Net Income", controlName: "monthly_net_income", type: "number", required: true },
    { label: "Annual Gross Income", controlName: "annual_gross_income", type: "number", required: true },
    { label: "Other Income Sources", controlName: "other_income", type: "textarea" },
    { label: "Monthly Expenses", controlName: "monthly_expenses", type: "number", required: true },
    { label: "Assets Description", controlName: "assets_description", type: "textarea", required: true },
    { label: "Liabilities Description", controlName: "liabilities_description", type: "textarea", required: true },
    { label: "Bank Account Information", controlName: "bank_accounts", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Small Estate Affidavit": [
    { label: "Deceased Person Name", controlName: "deceased_name", type: "text", required: true },
    { label: "Date of Death", controlName: "death_date", type: "date", required: true },
    { label: "Place of Death", controlName: "death_place", type: "text", required: true },
    { label: "Affiant Name", controlName: "affiant_name", type: "text", required: true },
    { label: "Relationship to Deceased", controlName: "relationship_deceased", type: "text", required: true },
    { label: "Estate Value", controlName: "estate_value", type: "number", required: true },
    { label: "Property Description", controlName: "property_description", type: "textarea", required: true },
    { label: "Debts and Liabilities", controlName: "debts_liabilities", type: "textarea" },
    { label: "Beneficiaries", controlName: "beneficiaries", type: "textarea", required: true },
    { label: "Will Status", controlName: "will_status", type: "text", required: true },
    { label: "Funeral Expenses", controlName: "funeral_expenses", type: "number" },
    { label: "Administration Necessity", controlName: "administration_necessity", type: "textarea", required: true },
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

  "Business Partnership Agreement for Startup": [
    { label: "Startup Name", controlName: "startup_name", type: "text", required: true },
    { label: "Founder 1 Name", controlName: "founder1_name", type: "text", required: true },
    { label: "Founder 2 Name", controlName: "founder2_name", type: "text", required: true },
    { label: "Business Model", controlName: "business_model", type: "textarea", required: true },
    { label: "Equity Distribution", controlName: "equity_distribution", type: "text", required: true },
    { label: "Initial Investment", controlName: "initial_investment", type: "number", required: true },
    { label: "Vesting Schedule", controlName: "vesting_schedule", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Business Partnership Agreement for Entrepreneur": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Entrepreneur 1", controlName: "entrepreneur1", type: "text", required: true },
    { label: "Entrepreneur 2", controlName: "entrepreneur2", type: "text", required: true },
    { label: "Business Concept", controlName: "business_concept", type: "textarea", required: true },
    { label: "Revenue Sharing", controlName: "revenue_sharing", type: "text", required: true },
    { label: "Investment Amount", controlName: "investment_amount", type: "number", required: true },
    { label: "Business Goals", controlName: "business_goals", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Real Estate Partnership Agreement Template": [
    { label: "Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "Partner 1 Name", controlName: "partner1_name", type: "text", required: true },
    { label: "Partner 2 Name", controlName: "partner2_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Type", controlName: "property_type", type: "text", required: true },
    { label: "Investment Amount", controlName: "investment_amount", type: "number", required: true },
    { label: "Profit Sharing", controlName: "profit_sharing", type: "text", required: true },
    { label: "Property Management", controlName: "property_management", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Missing Partnership Agreement Templates
  "Real Estate Partnership Agreement for Development": [
    { label: "Development Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "Developer Partner", controlName: "developer_partner", type: "text", required: true },
    { label: "Investor Partner", controlName: "investor_partner", type: "text", required: true },
    { label: "Development Property", controlName: "development_property", type: "text", required: true },
    { label: "Development Budget", controlName: "development_budget", type: "number", required: true },
    { label: "Project Timeline", controlName: "project_timeline", type: "text", required: true },
    { label: "Profit Distribution", controlName: "profit_distribution", type: "text", required: true },
    { label: "Risk Allocation", controlName: "risk_allocation", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Real Estate Partnership Agreement for Investment": [
    { label: "Investment Partnership", controlName: "partnership_name", type: "text", required: true },
    { label: "Lead Investor", controlName: "lead_investor", type: "text", required: true },
    { label: "Co-Investor", controlName: "co_investor", type: "text", required: true },
    { label: "Investment Property", controlName: "investment_property", type: "text", required: true },
    { label: "Total Investment", controlName: "total_investment", type: "number", required: true },
    { label: "Expected ROI", controlName: "expected_roi", type: "number", required: true },
    { label: "Investment Strategy", controlName: "investment_strategy", type: "textarea", required: true },
    { label: "Exit Strategy", controlName: "exit_strategy", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Strategic Partnership Agreement Template": [
    { label: "Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "Strategic Partner 1", controlName: "strategic_partner1", type: "text", required: true },
    { label: "Strategic Partner 2", controlName: "strategic_partner2", type: "text", required: true },
    { label: "Strategic Objectives", controlName: "strategic_objectives", type: "textarea", required: true },
    { label: "Market Focus", controlName: "market_focus", type: "text", required: true },
    { label: "Resource Sharing", controlName: "resource_sharing", type: "textarea", required: true },
    { label: "Revenue Model", controlName: "revenue_model", type: "textarea", required: true },
    { label: "Partnership Duration", controlName: "partnership_duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Strategic Partnership Agreement for Technology": [
    { label: "Tech Partnership Name", controlName: "partnership_name", type: "text", required: true },
    { label: "Technology Partner 1", controlName: "tech_partner1", type: "text", required: true },
    { label: "Technology Partner 2", controlName: "tech_partner2", type: "text", required: true },
    { label: "Technology Focus Area", controlName: "tech_focus_area", type: "text", required: true },
    { label: "Innovation Goals", controlName: "innovation_goals", type: "textarea", required: true },
    { label: "IP Sharing Agreement", controlName: "ip_sharing", type: "textarea", required: true },
    { label: "Development Timeline", controlName: "development_timeline", type: "text", required: true },
    { label: "Market Launch Strategy", controlName: "market_launch", type: "textarea", required: true },
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

  "MOU for Technology Partnership": [
    { label: "Technology Partner 1", controlName: "tech_partner1", type: "text", required: true },
    { label: "Technology Partner 2", controlName: "tech_partner2", type: "text", required: true },
    { label: "Technology Focus", controlName: "tech_focus", type: "text", required: true },
    { label: "Partnership Scope", controlName: "partnership_scope", type: "textarea", required: true },
    { label: "Technology Sharing", controlName: "tech_sharing", type: "textarea", required: true },
    { label: "IP Rights", controlName: "ip_rights", type: "textarea", required: true },
    { label: "Duration", controlName: "duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for Collaboration": [
    { label: "Organization A", controlName: "org_a", type: "text", required: true },
    { label: "Organization B", controlName: "org_b", type: "text", required: true },
    { label: "Collaboration Purpose", controlName: "collaboration_purpose", type: "textarea", required: true },
    { label: "Shared Objectives", controlName: "shared_objectives", type: "textarea", required: true },
    { label: "Resource Commitment", controlName: "resource_commitment", type: "textarea", required: true },
    { label: "Timeline", controlName: "timeline", type: "text", required: true },
    { label: "Success Metrics", controlName: "success_metrics", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Real Estate MOU Template": [
    { label: "Buyer Organization", controlName: "buyer_org", type: "text", required: true },
    { label: "Seller Organization", controlName: "seller_org", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Type", controlName: "property_type", type: "text", required: true },
    { label: "Purchase Price", controlName: "purchase_price", type: "number", required: true },
    { label: "Closing Date", controlName: "closing_date", type: "date", required: true },
    { label: "Terms and Conditions", controlName: "terms_conditions", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for Licensing Agreement": [
    { label: "Licensor", controlName: "licensor", type: "text", required: true },
    { label: "Licensee", controlName: "licensee", type: "text", required: true },
    { label: "Licensed Product/Service", controlName: "licensed_product", type: "text", required: true },
    { label: "License Scope", controlName: "license_scope", type: "textarea", required: true },
    { label: "License Terms", controlName: "license_terms", type: "textarea", required: true },
    { label: "Royalty Structure", controlName: "royalty_structure", type: "text", required: true },
    { label: "Duration", controlName: "duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Missing MOU Templates
  "General MOU for Business": [
    { label: "Business Organization 1", controlName: "business_org1", type: "text", required: true },
    { label: "Business Organization 2", controlName: "business_org2", type: "text", required: true },
    { label: "Business Purpose", controlName: "business_purpose", type: "textarea", required: true },
    { label: "Cooperation Areas", controlName: "cooperation_areas", type: "textarea", required: true },
    { label: "Business Terms", controlName: "business_terms", type: "textarea", required: true },
    { label: "Effective Period", controlName: "effective_period", type: "text", required: true },
    { label: "Success Metrics", controlName: "success_metrics", type: "textarea" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for Joint Venture": [
    { label: "Joint Venture Partner 1", controlName: "jv_partner1", type: "text", required: true },
    { label: "Joint Venture Partner 2", controlName: "jv_partner2", type: "text", required: true },
    { label: "Joint Venture Name", controlName: "jv_name", type: "text", required: true },
    { label: "Business Objectives", controlName: "business_objectives", type: "textarea", required: true },
    { label: "Investment Commitment", controlName: "investment_commitment", type: "number", required: true },
    { label: "Management Structure", controlName: "management_structure", type: "textarea", required: true },
    { label: "Profit Sharing", controlName: "profit_sharing", type: "text", required: true },
    { label: "Duration", controlName: "duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for Strategic Alliance": [
    { label: "Alliance Partner 1", controlName: "alliance_partner1", type: "text", required: true },
    { label: "Alliance Partner 2", controlName: "alliance_partner2", type: "text", required: true },
    { label: "Strategic Goals", controlName: "strategic_goals", type: "textarea", required: true },
    { label: "Market Strategy", controlName: "market_strategy", type: "textarea", required: true },
    { label: "Resource Contribution", controlName: "resource_contribution", type: "textarea", required: true },
    { label: "Performance Metrics", controlName: "performance_metrics", type: "textarea", required: true },
    { label: "Alliance Duration", controlName: "alliance_duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for International Partnership": [
    { label: "Domestic Partner", controlName: "domestic_partner", type: "text", required: true },
    { label: "International Partner", controlName: "international_partner", type: "text", required: true },
    { label: "Partner Country", controlName: "partner_country", type: "text", required: true },
    { label: "International Objectives", controlName: "international_objectives", type: "textarea", required: true },
    { label: "Cultural Considerations", controlName: "cultural_considerations", type: "textarea", required: true },
    { label: "Regulatory Compliance", controlName: "regulatory_compliance", type: "textarea", required: true },
    { label: "Currency Terms", controlName: "currency_terms", type: "text", required: true },
    { label: "Governing Jurisdiction", controlName: "governing_jurisdiction", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "MOU for Property Development": [
    { label: "Development Company", controlName: "development_company", type: "text", required: true },
    { label: "Property Owner", controlName: "property_owner", type: "text", required: true },
    { label: "Development Property", controlName: "development_property", type: "text", required: true },
    { label: "Development Type", controlName: "development_type", type: "text", required: true },
    { label: "Project Scope", controlName: "project_scope", type: "textarea", required: true },
    { label: "Development Timeline", controlName: "development_timeline", type: "text", required: true },
    { label: "Financial Terms", controlName: "financial_terms", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Government MOU Template": [
    { label: "Government Agency", controlName: "government_agency", type: "text", required: true },
    { label: "Partner Organization", controlName: "partner_organization", type: "text", required: true },
    { label: "Government Purpose", controlName: "government_purpose", type: "textarea", required: true },
    { label: "Public Interest", controlName: "public_interest", type: "textarea", required: true },
    { label: "Compliance Requirements", controlName: "compliance_requirements", type: "textarea", required: true },
    { label: "Reporting Obligations", controlName: "reporting_obligations", type: "textarea", required: true },
    { label: "Contract Duration", controlName: "contract_duration", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Missing VNDA Templates  
  "Basic VNDA Template": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Vendor Name", controlName: "vendor_name", type: "text", required: true },
    { label: "Vendor Service", controlName: "vendor_service", type: "text", required: true },
    { label: "Contract Value", controlName: "contract_value", type: "number", required: true },
    { label: "Confidential Vendor Information", controlName: "confidential_vendor_info", type: "textarea", required: true },
    { label: "Service Duration", controlName: "service_duration", type: "text", required: true },
    { label: "Confidentiality Period", controlName: "confidentiality_period", type: "text", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "VNDA for Suppliers": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Supplier Name", controlName: "supplier_name", type: "text", required: true },
    { label: "Supply Category", controlName: "supply_category", type: "text", required: true },
    { label: "Supply Chain Information", controlName: "supply_chain_info", type: "textarea", required: true },
    { label: "Pricing Information", controlName: "pricing_info", type: "textarea", required: true },
    { label: "Quality Standards", controlName: "quality_standards", type: "textarea", required: true },
    { label: "Contract Period", controlName: "contract_period", type: "text", required: true },
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

  "Business Partnership Agreement for Small Business": [
    { label: "Business Name", controlName: "business_name", type: "text", required: true },
    { label: "Business Type", controlName: "business_type", type: "text", required: true },
    { label: "Primary Partner Name", controlName: "primary_partner", type: "text", required: true },
    { label: "Secondary Partner Name", controlName: "secondary_partner", type: "text", required: true },
    { label: "Business Address", controlName: "business_address", type: "text", required: true },
    { label: "Business Purpose", controlName: "business_purpose", type: "textarea", required: true },
    { label: "Capital Contributions", controlName: "capital_contributions", type: "textarea", required: true },
    { label: "Management Responsibilities", controlName: "management_responsibilities", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
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

  "MOU for Software Development": [
    { label: "Software Company", controlName: "software_company", type: "text", required: true },
    { label: "Client Organization", controlName: "client_organization", type: "text", required: true },
    { label: "Project Name", controlName: "project_name", type: "text", required: true },
    { label: "Software Type", controlName: "software_type", type: "text", required: true },
    { label: "Development Timeline", controlName: "development_timeline", type: "text", required: true },
    { label: "Project Scope", controlName: "project_scope", type: "textarea", required: true },
    { label: "Technical Requirements", controlName: "technical_requirements", type: "textarea", required: true },
    { label: "Deliverables", controlName: "deliverables", type: "textarea", required: true },
    { label: "Payment Terms", controlName: "payment_terms", type: "textarea", required: true },
    { label: "Intellectual Property Ownership", controlName: "ip_ownership", type: "textarea", required: true },
    { label: "Support and Maintenance", controlName: "support_maintenance", type: "textarea" },
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
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Company Address", controlName: "company_address", type: "text", required: true },
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

  "ENDA for Consulting Firms": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Consulting Firm Name", controlName: "consulting_firm", type: "text", required: true },
    { label: "Project Name", controlName: "project_name", type: "text", required: true },
    { label: "Consulting Services", controlName: "consulting_services", type: "textarea", required: true },
    { label: "Contract Duration", controlName: "contract_duration", type: "text", required: true },
    { label: "Confidentiality Terms", controlName: "confidentiality_terms", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "ENDA for Freelancers": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Freelancer Name", controlName: "freelancer_name", type: "text", required: true },
    { label: "Freelance Service", controlName: "freelance_service", type: "text", required: true },
    { label: "Project Description", controlName: "project_description", type: "textarea", required: true },
    { label: "Contract Period", controlName: "contract_period", type: "text", required: true },
    { label: "Confidentiality Duration", controlName: "confidentiality_duration", type: "text", required: true },
    { label: "Payment Terms", controlName: "payment_terms", type: "text" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "Basic RENDA Template": [
    { label: "Real Estate Company", controlName: "real_estate_company", type: "text", required: true },
    { label: "Client Name", controlName: "client_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Type", controlName: "property_type", type: "text", required: true },
    { label: "Transaction Type", controlName: "transaction_type", type: "text", required: true },
    { label: "Confidential Information", controlName: "confidential_info", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "RENDA for Buyers": [
    { label: "Real Estate Agency", controlName: "real_estate_agency", type: "text", required: true },
    { label: "Buyer Name", controlName: "buyer_name", type: "text", required: true },
    { label: "Property Interest", controlName: "property_interest", type: "text", required: true },
    { label: "Budget Range", controlName: "budget_range", type: "text", required: true },
    { label: "Preferred Locations", controlName: "preferred_locations", type: "textarea", required: true },
    { label: "Confidentiality Period", controlName: "confidentiality_period", type: "text", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "RENDA for Sellers": [
    { label: "Real Estate Agency", controlName: "real_estate_agency", type: "text", required: true },
    { label: "Seller Name", controlName: "seller_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Property Value", controlName: "property_value", type: "number", required: true },
    { label: "Selling Terms", controlName: "selling_terms", type: "textarea", required: true },
    { label: "Confidentiality Duration", controlName: "confidentiality_duration", type: "text", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  // Missing NDA Templates
  "NDNC for Employees": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Employee Name", controlName: "employee_name", type: "text", required: true },
    { label: "Position Title", controlName: "position_title", type: "text", required: true },
    { label: "Department", controlName: "department", type: "text", required: true },
    { label: "Non-Compete Duration", controlName: "noncompete_duration", type: "text", required: true },
    { label: "Geographic Restriction", controlName: "geographic_restriction", type: "text", required: true },
    { label: "Restricted Activities", controlName: "restricted_activities", type: "textarea", required: true },
    { label: "Employment Terms", controlName: "employment_terms", type: "textarea", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "NDNC for Executives": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Executive Name", controlName: "executive_name", type: "text", required: true },
    { label: "Executive Title", controlName: "executive_title", type: "text", required: true },
    { label: "Salary Package", controlName: "salary_package", type: "number", required: true },
    { label: "Non-Compete Duration", controlName: "noncompete_duration", type: "text", required: true },
    { label: "Geographic Scope", controlName: "geographic_scope", type: "text", required: true },
    { label: "Industry Restrictions", controlName: "industry_restrictions", type: "textarea", required: true },
    { label: "Severance Package", controlName: "severance_package", type: "number" },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "CNA for Business Partnerships": [
    { label: "Partner Company 1", controlName: "partner1_company", type: "text", required: true },
    { label: "Partner Company 2", controlName: "partner2_company", type: "text", required: true },
    { label: "Partnership Purpose", controlName: "partnership_purpose", type: "textarea", required: true },
    { label: "Confidential Business Information", controlName: "confidential_business_info", type: "textarea", required: true },
    { label: "Agreement Duration", controlName: "agreement_duration", type: "text", required: true },
    { label: "Breach Consequences", controlName: "breach_consequences", type: "textarea", required: true },
    { label: "Effective Date", controlName: "effective_date", type: "date", required: true },
    { label: "Additional Information", controlName: "additional_information", type: "textarea" }
  ],

  "CNA for Mergers and Acquisitions": [
    { label: "Acquiring Company", controlName: "acquiring_company", type: "text", required: true },
    { label: "Target Company", controlName: "target_company", type: "text", required: true },
    { label: "Transaction Type", controlName: "transaction_type", type: "text", required: true },
    { label: "Due Diligence Scope", controlName: "due_diligence_scope", type: "textarea", required: true },
    { label: "Confidential Financial Information", controlName: "confidential_financial_info", type: "textarea", required: true },
    { label: "Transaction Timeline", controlName: "transaction_timeline", type: "text", required: true },
    { label: "Confidentiality Period", controlName: "confidentiality_period", type: "text", required: true },
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
