// ═══════════════════════════════════════════════════════════════════════════════════
// 📄 LEGAL DOCUMENTS DATA STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════════════
// Hierarchical structure: State → Category → Document Type → Templates
// States: Malware, Texas, Hawaii, Maine
// Categories: NDA, Affidavits, Partnership Agreement, MOU
// ═══════════════════════════════════════════════════════════════════════════════════

export const LEGAL_DOCUMENTS_DATA = {
  // 🌟 ══════════════════════════════════════════════════════════════════════════════
  // 🔐 MALWARE STATE - Comprehensive Legal Documents Collection
  // ══════════════════════════════════════════════════════════════════════════════
  Malware: {
    // 📋 Non-Disclosure Agreements (NDA)
    "NDA": {
      "Mutual Non-Disclosure Agreement (MNDA)": [
        "Basic MNDA Template",
        "Comprehensive MNDA Template", 
        "MNDA for Business Partnerships",
        "MNDA for Joint Ventures"
      ],
      "One-Way Non-Disclosure Agreement (NDA)": [
        "Basic One-Way NDA Template",
        "One-Way NDA for Employees",
        "One-Way NDA for Consultants", 
        "One-Way NDA for Vendors"
      ],
      "Non-Disclosure and Non-Compete Agreement (NDNC)": [
        "Basic NDNC Template",
        "NDNC for Employees",
        "NDNC for Executives",
        "NDNC for Business Owners"
      ],
      "Confidentiality and Non-Disclosure Agreement (CNA)": [
        "Basic CNA Template",
        "CNA for Business Partnerships",
        "CNA for Mergers and Acquisitions",
        "CNA for Strategic Alliances"
      ]
    },
    // ⚖️ Legal Affidavits
    "Affidavits": {
      "General Affidavit": [
        "Basic Affidavit Template",
        "General Affidavit for Truth",
        "Affidavit of Identity",
        "Affidavit of Residence"
      ],
      "Financial Affidavit": [
        "Financial Affidavit for Debt",
        "Financial Affidavit for Bankruptcy",
        "Affidavit of Income",
        "Affidavit of Assets"
      ],
      "Identity Affidavit": [
        "Affidavit of Identity for Individuals",
        "Affidavit of Identity for Businesses",
        "Affidavit of Name Change",
        "Affidavit of Citizenship"
      ]
    },
    // 🤝 Partnership Agreements
    "Partnership Agreement": {
      "General Partnership Agreement": [
        "Basic Partnership Agreement Template",
        "General Partnership Agreement for Business",
        "Partnership Agreement for Joint Venture",
        "Partnership Agreement for Limited Liability Partnership (LLP)"
      ],
      "Limited Partnership Agreement": [
        "Limited Partnership Agreement Template",
        "Limited Partnership Agreement for Private Equity",
        "Limited Partnership Agreement for Venture Capital",
        "Limited Partnership Agreement for Real Estate"
      ],
      "Joint Venture Partnership Agreement": [
        "Joint Venture Partnership Agreement Template",
        "Joint Venture Partnership Agreement for Business",
        "Joint Venture Partnership Agreement for Project",
        "Joint Venture Partnership Agreement for Investment"
      ]
    },
    // 📋 Memorandum of Understanding (MOU)
    "MOU": {
      "General MOU": [
        "Basic MOU Template",
        "General MOU for Business",
        "MOU for Partnership",
        "MOU for Collaboration"
      ],
      "Business MOU": [
        "Business MOU Template",
        "MOU for Joint Venture",
        "MOU for Strategic Alliance",
        "MOU for Supply Chain Partnership"
      ],
      "International MOU": [
        "International MOU Template",
        "MOU for International Partnership",
        "MOU for Global Collaboration",
        "MOU for Cross-Border Transaction"
      ]
    }
  },
  
  // 🌟 ══════════════════════════════════════════════════════════════════════════════
  // 🤠 TEXAS STATE - Business & Employment Legal Documents
  // ══════════════════════════════════════════════════════════════════════════════
  Texas: {
    // 📋 Non-Disclosure Agreements (NDA)
    "NDA": {
      "Employee Non-Disclosure Agreement (ENDA)": [
        "Basic ENDA Template",
        "ENDA for New Employees",
        "ENDA for Existing Employees",
        "ENDA for Contract Employees"
      ],
      "Consultant Non-Disclosure Agreement (CNDA)": [
        "Basic CNDA Template",
        "CNDA for Independent Contractors",
        "CNDA for Consulting Firms",
        "CNDA for Freelancers"
      ]
    },
    // ⚖️ Legal Affidavits
    "Affidavits": {
      "Employment Affidavit": [
        "Affidavit of Employment",
        "Affidavit of Income for Employment",
        "Affidavit of Job Offer",
        "Affidavit of Termination"
      ],
      "Business Affidavit": [
        "Affidavit of Business Identity",
        "Affidavit of Business Ownership",
        "Affidavit of No Lien for Business",
        "Affidavit of Good Standing"
      ]
    },
    // 🤝 Partnership Agreements
    "Partnership Agreement": {
      "Business Partnership Agreement": [
        "Business Partnership Agreement Template",
        "Business Partnership Agreement for Small Business",
        "Business Partnership Agreement for Startup",
        "Business Partnership Agreement for Entrepreneur"
      ]
    },
    // 📋 Memorandum of Understanding (MOU)
    "MOU": {
      "Technology MOU": [
        "Technology MOU Template",
        "MOU for Software Development",
        "MOU for Technology Partnership",
        "MOU for Licensing Agreement"
      ]
    }
  },
  
  // 🌟 ══════════════════════════════════════════════════════════════════════════════
  // 🏝️ HAWAII STATE - Real Estate Focused Legal Documents
  // ══════════════════════════════════════════════════════════════════════════════
  Hawaii: {
    // 📋 Non-Disclosure Agreements (NDA)
    "NDA": {
      "Real Estate Non-Disclosure Agreement (RENDA)": [
        "Basic RENDA Template",
        "RENDA for Buyers",
        "RENDA for Sellers",
        "RENDA for Real Estate Agents"
      ]
    },
    // ⚖️ Legal Affidavits
    "Affidavits": {
      "Real Estate Affidavit": [
        "Affidavit of Property Value",
        "Affidavit of Property Ownership",
        "Affidavit of No Lien",
        "Affidavit of Heirship"
      ]
    },
    // 🤝 Partnership Agreements
    "Partnership Agreement": {
      "Real Estate Partnership Agreement": [
        "Real Estate Partnership Agreement Template",
        "Real Estate Partnership Agreement for Development",
        "Real Estate Partnership Agreement for Investment",
        "Real Estate Partnership Agreement for Property Management"
      ]
    },
    // 📋 Memorandum of Understanding (MOU)
    "MOU": {
      "Real Estate MOU": [
        "Real Estate MOU Template",
        "MOU for Property Development",
        "MOU for Lease Agreement",
        "MOU for Purchase and Sale"
      ]
    }
  },
  
  // 🌟 ══════════════════════════════════════════════════════════════════════════════
  // 🦞 MAINE STATE - Vendor & Government Legal Documents
  // ══════════════════════════════════════════════════════════════════════════════
  Maine: {
    // 📋 Non-Disclosure Agreements (NDA)
    "NDA": {
      "Vendor Non-Disclosure Agreement (VNDA)": [
        "Basic VNDA Template",
        "VNDA for Suppliers",
        "VNDA for Service Providers",
        "VNDA for Contractors"
      ]
    },
    // ⚖️ Legal Affidavits
    "Affidavits": {
      "Court-Related Affidavit": [
        "Affidavit of Service",
        "Affidavit of Notice",
        "Affidavit of Non-Compliance",
        "Affidavit of Default"
      ]
    },
    // 🤝 Partnership Agreements
    "Partnership Agreement": {
      "Strategic Partnership Agreement": [
        "Strategic Partnership Agreement Template",
        "Strategic Partnership Agreement for Business",
        "Strategic Partnership Agreement for Technology",
        "Strategic Partnership Agreement for Marketing"
      ]
    },
    // 📋 Memorandum of Understanding (MOU)
    "MOU": {
      "Government MOU": [
        "Government MOU Template",
        "MOU for Government Contract",
        "MOU for Government Grant",
        "MOU for Government Partnership"
      ]
    }
  }
};
