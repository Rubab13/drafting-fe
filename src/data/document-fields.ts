export const DOCUMENT_FIELDS: Record<string, { label: string; controlName: string; type: string; required?: boolean }[]> = {
  "Residential Lease": [
    { label: "Landlord Name", controlName: "landlord_name", type: "text", required: true },
    { label: "Tenant Name", controlName: "tenant_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text", required: true },
    { label: "Monthly Rent ($)", controlName: "rent_amount", type: "number", required: true },
    { label: "Lease Start Date", controlName: "lease_start_date", type: "date" },
    { label: "Lease End Date", controlName: "lease_end_date", type: "date" },
    { label: "Security Deposit ($)", controlName: "security_deposit", type: "number" }
  ],
  "Eviction Notice": [
    { label: "Tenant Name", controlName: "tenant_name", type: "text", required: true },
    { label: "Landlord Name", controlName: "landlord_name", type: "text", required: true },
    { label: "Property Address", controlName: "property_address", type: "text" },
    { label: "Reason for Eviction", controlName: "reason_for_eviction", type: "textarea" },
    { label: "Notice Period (Days)", controlName: "notice_period_days", type: "number" }
  ],
  "Divorce Agreement": [
    { label: "Spouse 1", controlName: "spouse1", type: "text", required: true },
    { label: "Spouse 2", controlName: "spouse2", type: "text", required: true },
    { label: "Marriage Date", controlName: "marriage_date", type: "date" },
    { label: "Separation Date", controlName: "separation_date", type: "date" }
  ],
  "LLC Agreement": [
    { label: "Company Name", controlName: "company_name", type: "text", required: true },
    { label: "Member Names", controlName: "members", type: "text", required: true },
    { label: "Capital Contributions", controlName: "capital", type: "number" },
    { label: "Formation Date", controlName: "formation_date", type: "date" }
  ]
  // Add more as needed
};
