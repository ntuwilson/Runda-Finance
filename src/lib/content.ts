export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rundafinance.com";

export const standardDisclaimer =
  "Submitting an application does not guarantee approval. Loan approval, amount, repayment period, and terms are subject to assessment, verification, and product requirements.";

export const siteDetails = {
  name: "Runda Finance",
  legalName: "RUNDA FINANCE",
  license: "[License Number]",
  regulator: "Uganda Microfinance Regulatory Authority",
  address: "[Office Address: Bugolobi Spring Road, Kisakye Complex, Room 204 Second Floor - verify before launch]",
  phones: ["[Phone Number]", "+256 709 832294", "+256 772 439403", "+256 776 954538"],
  email: "[Email Address]",
  hours: "[Working Hours]",
  facebook: "[Verified Facebook URL]",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/loans", label: "Loans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Runda" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const loanProducts = [
  {
    slug: "salary-loan",
    name: "Salary Loan",
    seoTitle: "Salary Loans in Uganda | Runda Finance",
    metaDescription:
      "Runda Finance salary loans support salaried employees in Uganda with structured short-term credit, subject to assessment and eligibility.",
    headline: "Salary loans for employed workers",
    subheadline:
      "A salary loan is designed for salaried employees who need short-term financial support and can repay through regular income.",
    bestFor: "Salaried employees with regular income.",
    uses: ["School fees and family needs", "Medical or household expenses", "Short-term personal financial gaps"],
    requirementSummary: "National ID, employment proof, payslips, salary records, employer details, and active phone number.",
    requirements: [
      "Valid national ID.",
      "Proof of employment.",
      "Recent payslips.",
      "Bank statement or salary account records.",
      "Employer details.",
      "Active phone number.",
      "Any other documents requested during assessment.",
    ],
    assessment: [
      "Employment and income are verified.",
      "Repayment ability is assessed against regular income.",
      "Requested amount and repayment period are reviewed before a decision is communicated.",
    ],
    primaryCta: "Start Salary Loan Application",
    secondaryCta: "Talk to a Loan Officer",
    range: "[Verified salary loan range and repayment period]",
  },
  {
    slug: "sme-loan",
    name: "SME Loan",
    seoTitle: "SME Loans in Uganda | Working Capital Support | Runda Finance",
    metaDescription:
      "Runda Finance provides SME loans for small businesses in Uganda that need working capital, stock financing, or operational support.",
    headline: "SME loans for small business growth",
    subheadline:
      "Get structured financing support for stock, working capital, business operations, and growth needs, subject to assessment.",
    bestFor: "Small business owners with operating businesses.",
    uses: ["Working capital", "Stock purchases", "Operating expenses", "Small business growth needs"],
    requirementSummary: "National ID, trading license, registration documents, business records, and bank statements.",
    requirements: [
      "Valid national ID for the applicant or directors.",
      "Trading license, where applicable.",
      "Certificate of registration, where applicable.",
      "Business records or sales records.",
      "Bank statements.",
      "Business location details.",
      "Any supporting documents requested during assessment.",
    ],
    assessment: [
      "Business activity and location are verified.",
      "Cash flow and repayment capacity are reviewed.",
      "Loan purpose, amount, and repayment plan are assessed.",
    ],
    primaryCta: "Start SME Loan Application",
    secondaryCta: "Speak to a Business Loan Officer",
    range: "[Verified SME loan range and repayment period]",
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    seoTitle: "Business Loans in Uganda | Runda Finance",
    metaDescription:
      "Runda Finance offers business loans for entrepreneurs and enterprises that need structured financing for operations, expansion, and cash flow.",
    headline: "Business financing with a clear repayment plan",
    subheadline:
      "Support your business operations, growth, or cash flow needs with structured financing assessed against your business capacity.",
    bestFor: "Established businesses that need structured financing.",
    uses: ["Business operations", "Cash flow support", "Expansion needs", "Contract or supply preparation"],
    requirementSummary: "National ID, business documents, bank statements, records, and collateral where required.",
    requirements: [
      "Valid national ID.",
      "Trading license.",
      "Certificate of registration.",
      "Business records and bank statements.",
      "Financial card, where applicable.",
      "LPOs or contracts, where applicable.",
      "Collateral documents where required.",
    ],
    assessment: [
      "Business capacity and income history are reviewed.",
      "Security, documents, and purpose are verified.",
      "Terms are explained before disbursement if approved.",
    ],
    primaryCta: "Start Business Loan Application",
    secondaryCta: "Talk to a Loan Officer",
    range: "[Verified business loan range and repayment period]",
  },
  {
    slug: "logbook-financing",
    name: "Logbook Financing",
    seoTitle: "Logbook Financing in Uganda | Runda Finance",
    metaDescription:
      "Runda Finance offers logbook financing for vehicle owners who want to access credit using their vehicle logbook as security, subject to assessment.",
    headline: "Access credit using your vehicle logbook",
    subheadline:
      "Logbook financing allows qualified vehicle owners to access credit using their vehicle as security while keeping the process structured and clear.",
    bestFor: "Vehicle owners with a verifiable logbook.",
    uses: ["Business support", "Personal needs", "Emergency expenses", "Working capital"],
    requirementSummary: "National ID, original logbook, vehicle details, insurance, photos, and proof of income.",
    requirements: [
      "Valid national ID.",
      "Passport photo.",
      "Original vehicle logbook.",
      "Vehicle insurance.",
      "Vehicle inspection details, where required.",
      "Verifiable income source.",
      "Any other documents requested during assessment.",
    ],
    assessment: [
      "Vehicle ownership and logbook details are verified.",
      "Vehicle condition and security value are reviewed.",
      "Income source and repayment ability are assessed.",
    ],
    primaryCta: "Start Logbook Financing Application",
    secondaryCta: "Check Requirements",
    range: "[Verified logbook financing range and repayment period]",
  },
  {
    slug: "lpo-financing",
    name: "LPO Financing",
    seoTitle: "LPO Financing in Uganda | Supplier and Contractor Finance | Runda Finance",
    metaDescription:
      "Runda Finance provides LPO financing for suppliers and contractors with confirmed Local Purchase Orders who need funds to deliver.",
    headline: "Financing for confirmed Local Purchase Orders",
    subheadline:
      "If you have a valid LPO and need funds to supply goods or deliver services, Runda Finance can assess your request and support execution.",
    bestFor: "Suppliers and contractors with confirmed Local Purchase Orders.",
    uses: ["Supplying goods", "Executing service contracts", "Buying materials", "Managing delivery costs"],
    requirementSummary: "Approved LPO, undertaking letter, business documents, financial records, and collateral where required.",
    requirements: [
      "Approved LPO from a reputable organization.",
      "Letter of undertaking to pay, where required.",
      "Business registration documents.",
      "Financial card or business records, where applicable.",
      "Collateral in the form requested during assessment.",
      "Applicant identification documents.",
    ],
    assessment: [
      "The LPO issuer and purchase order are verified.",
      "Delivery capacity and payment route are reviewed.",
      "Security and repayment structure are assessed.",
    ],
    primaryCta: "Start LPO Financing Application",
    secondaryCta: "Speak to a Loan Officer",
    range: "[Verified LPO financing range and repayment period]",
  },
  {
    slug: "weekendi-loan",
    name: "Weekendi Loan",
    seoTitle: "Weekendi Loan | Short-Term Loan Support | Runda Finance",
    metaDescription:
      "The Weekendi Loan from Runda Finance supports short-term financial needs, subject to eligibility, assessment, and responsible repayment terms.",
    headline: "Short-term support for urgent needs",
    subheadline:
      "The Weekendi Loan is designed for short-term financial gaps that require quick attention and responsible repayment planning.",
    bestFor: "Qualified borrowers with urgent short-term needs.",
    uses: ["Urgent household needs", "Short-term financial gaps", "Unexpected expenses"],
    requirementSummary: "National ID, active phone number, income or repayment proof, and supporting documents requested during assessment.",
    requirements: [
      "Valid national ID.",
      "Active phone number.",
      "Proof of income or repayment source.",
      "Postdated cheque, where required.",
      "Any other documents requested during assessment.",
    ],
    assessment: [
      "Identity and contact details are verified.",
      "Repayment source is assessed.",
      "Terms are explained before disbursement if approved.",
    ],
    primaryCta: "Start Weekendi Loan Application",
    secondaryCta: "Talk to a Loan Officer",
    range: "[Verified Weekendi loan range and repayment period]",
  },
];

export type LoanProduct = (typeof loanProducts)[number];

export const processSteps = [
  "Choose a loan product.",
  "Review the requirements.",
  "Submit your details.",
  "Provide documents.",
  "Runda Finance verifies your information.",
  "Your application is assessed.",
  "A loan decision is communicated.",
  "If approved, terms are explained before disbursement.",
  "Repayment follows the agreed schedule.",
];

export const faqs = [
  {
    category: "General loan questions",
    question: "Does applying guarantee approval?",
    answer: "No. Every application is subject to assessment, verification, product requirements, and responsible repayment checks.",
  },
  {
    category: "Application process",
    question: "Can I speak to someone before applying?",
    answer: "Yes. You can request a callback or contact a loan officer to understand the product, requirements, and next steps.",
  },
  {
    category: "Requirements",
    question: "Are requirements the same for every loan?",
    answer: "No. Requirements vary by product. Each loan page lists the basic documents you should prepare before applying.",
  },
  {
    category: "Approval and assessment",
    question: "What does Runda Finance assess?",
    answer: "Runda Finance may assess identity, income, business activity, security, loan purpose, documents, and repayment capacity.",
  },
  {
    category: "Repayment",
    question: "When are loan terms confirmed?",
    answer: "If approved, the loan amount, repayment period, charges, and terms should be explained before disbursement.",
  },
  {
    category: "Customer support",
    question: "What happens if my documents are incomplete?",
    answer: "Incomplete applications may delay assessment. A team member may request missing or updated documents.",
  },
  {
    category: "Complaints",
    question: "How can I raise a complaint?",
    answer: "Use the complaints page or official contact channels. Include your loan reference if you have one.",
  },
];

export const insights = [
  {
    title: "How to prepare before applying for a salary loan",
    summary: "A practical checklist for employed borrowers before submitting a salary loan application.",
    slug: "prepare-before-salary-loan",
  },
  {
    title: "What SMEs should know before taking a business loan",
    summary: "Questions small business owners should ask before borrowing for working capital or growth.",
    slug: "sme-business-loan-readiness",
  },
  {
    title: "How logbook financing works",
    summary: "What vehicle owners should understand about logbook-based credit and verification.",
    slug: "how-logbook-financing-works",
  },
  {
    title: "LPO financing: what suppliers should prepare",
    summary: "Documents and planning suppliers need before seeking finance against a confirmed LPO.",
    slug: "lpo-financing-preparation",
  },
  {
    title: "Borrowing responsibly: questions to ask before taking a loan",
    summary: "A clear borrower-first guide to affordability, repayment, and loan purpose.",
    slug: "borrowing-responsibly",
  },
];

export const teamMembers = [
  {
    name: "Kamugisha Bellata",
    title: "Managing Director",
    summary: "[Role summary to be verified before launch]",
    image: "[Staff Photo]",
  },
  {
    name: "Washaki Collin",
    title: "Credit Officer",
    summary: "[Role summary to be verified before launch]",
    image: "[Staff Photo]",
  },
];
