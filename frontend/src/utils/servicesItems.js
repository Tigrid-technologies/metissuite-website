export const servicesSpotlight = {
  badge: "Modular Operating Capabilities",
  headingStart: "Six dedicated services.",
  headingHighlight: "One unified operating rhythm.",
  rollingWords: [
    "operating rhythm.",
    "pipeline velocity.",
    "governance standard.",
    "commercial cadence.",
  ],
  description:
    "Explore how MetisSuite replaces fragmented software with purpose-built services for biotech, pharma, and high-tempo life-science teams—all managed by specialized AI agents with human-in-the-loop control.",
  stats: [
    { value: "6", label: "Core service modules", sub: "Deploy together or modularly" },
    { value: "3.4x", label: "Meeting conversion velocity", sub: "From initial conference tap to call" },
    { value: "70%", label: "Reduction in admin routines", sub: "Zero manual data re-entry" },
    { value: "100%", label: "Human approval checkpoints", sub: "Safe for high-stakes bio deals" },
  ],
  categories: [
    { id: "all", label: "All Services" },
    { id: "growth", label: "Commercial & CRM" },
    { id: "physical", label: "MeetLoop™ & Events" },
    { id: "finance", label: "Invoicing & Purchasing" },
    { id: "research", label: "R&D & Intelligence" },
  ],
};

export const servicesList = [
  {
    id: "crm-pipeline",
    category: "growth",
    title: "CRM & Pipeline Automation",
    subtitle: "High-touch biotech commercial operating system",
    accent: "#2ec4b6",
    badge: "Core Operating Engine",
    icon: "Database",
    summary:
      "A context-aware CRM designed specifically for long-cycle scientific partnerships, CDMO contracts, and life-science investors.",
    description:
      "Unlike generic CRMs that require hours of manual field updates, Metis CRM auto-enriches contact cards with PubMed papers, clinical development stages, and therapeutic targets. Every conversation, meeting note, and email thread updates automatically without manual logging.",
    keyCapabilities: [
      "Auto-enrichment with clinical trials and funding history",
      "Bi-directional two-way synchronization with HubSpot, Salesforce & GHL",
      "Pipeline stage velocity tracking & deal stagnation alerts",
      "Multi-stakeholder relationship mapping across research institutions",
    ],
    interactiveMetric: {
      label: "Average weekly time saved per commercial rep",
      value: "9.2 hours",
    },
    sampleUseCase:
      "Automatically updates a \$450,000 CDMO pipeline deal when a prospect's IND application is approved by the FDA.",
  },
  {
    id: "meetloop-events",
    category: "physical",
    title: "MeetLoop™ Smart Event Capture",
    subtitle: "Turn scientific summit conversations into qualified pipeline",
    accent: "#e8b04b",
    badge: "Physical-to-Digital",
    icon: "Smartphone",
    summary:
      "Smart NFC badges and dynamic QR profiles that capture in-person context instantly at BIO, ASCO, JP Morgan, and AACR.",
    description:
      "At scientific conferences, collecting paper business cards leads to delayed follow-ups and lost context. MeetLoop lets prospects tap your physical card or badge to exchange notes, record voice memos, and automatically trigger tailored follow-ups before the conference day concludes.",
    keyCapabilities: [
      "Custom branded NFC smart cards and dynamic QR web badges",
      "On-device contact exchange with zero app installation required",
      "Instant context transcription (booth notes, spoken scientific questions)",
      "Automated personalized email sequence drafts ready for human approval",
    ],
    interactiveMetric: {
      label: "Follow-up speed after scientific summits",
      value: "Under 4 hours",
    },
    sampleUseCase:
      "A researcher taps your badge at Booth #302. By evening, a personalized draft citing their specific assay challenge is ready on your phone.",
  },
  {
    id: "ai-invoicing-purchasing",
    category: "finance",
    title: "AI Invoicing & Lab Purchasing",
    subtitle: "Automated vendor procurement and invoice reconciliation",
    accent: "#f59e0b",
    badge: "Financial Control",
    icon: "Receipt",
    summary:
      "Streamlines reagent purchases, equipment maintenance contracts, supplier invoices, and client billing cycles.",
    description:
      "Lab operations and procurement teams spend dozens of hours reconciling PDF invoices against negotiated vendor discount sheets. Metis Ledger uses OCR line-item extraction to audit prices, detect supplier overcharges, and route approval requests with 1-click verification.",
    keyCapabilities: [
      "OCR parsing for supplier PDF invoices, packing slips, and POs",
      "Automatic price verification against contracted vendor discount tiers",
      "Dual-human signoff routing for capital expenditures over set thresholds",
      "Direct ledger synchronization with QuickBooks, Xero, and enterprise ERPs",
    ],
    interactiveMetric: {
      label: "Average invoice discrepancy detection rate",
      value: "14.2%",
    },
    sampleUseCase:
      "Flags an unapplied 15% academic discount on a \$28,000 antibody order before payment is issued.",
  },
  {
    id: "scientific-intelligence",
    category: "research",
    title: "Scientific Intelligence & Outreach",
    subtitle: "PubMed, clinical trial, and patent monitoring to pipeline",
    accent: "#38bdf8",
    badge: "R&D & Market Intel",
    icon: "Compass",
    summary:
      "Autonomous literature crawling and context extraction that keeps your team ahead of competitive scientific discoveries.",
    description:
      "Scout continuously monitors PubMed, bioRxiv, clinicaltrials.gov, and patent databases for keywords, targets, and researchers in your domain. It distills complex scientific milestones into actionable commercial briefs and personalized outreach angles.",
    keyCapabilities: [
      "Automated daily screening of 4,000+ scientific journals and pre-prints",
      "Therapeutic target and biomarker competitive intelligence alerts",
      "Scientific outreach generation referencing specific publications and assays",
      "Strict retrieval-augmented generation (RAG) limited to verified sources",
    ],
    interactiveMetric: {
      label: "Scientific literature screened per day",
      value: "4,000+ papers",
    },
    sampleUseCase:
      "Scans new Phase II oncology pre-prints and alerts commercial leadership when an existing prospect announces positive biomarker results.",
  },
  {
    id: "meeting-dispatch",
    category: "growth",
    title: "Meeting Intelligence & Dispatch",
    subtitle: "24/7 calendar coordination, call notes, and action routing",
    accent: "#a855f7",
    badge: "Execution & Scheduling",
    icon: "Zap",
    summary:
      "Round-the-clock lead triage, calendar scheduling across international bio hubs, and post-call action routing.",
    description:
      "Eliminate back-and-forth scheduling across timezones. Dispatch coordinates meetings in real time, converts Zoom/Teams call recordings into structured biological summary notes, and delegates post-meeting action items to the appropriate team members.",
    keyCapabilities: [
      "Timezone-intelligent calendar scheduling with zero email ping-pong",
      "Call transcript summarization highlighting technical constraints and budget",
      "Automated CRM deal stage progression and follow-up task assignment",
      "Multi-channel communications via Email, WhatsApp, and SMS",
    ],
    interactiveMetric: {
      label: "Zero-lag scheduling across global timezones",
      value: "< 30 seconds",
    },
    sampleUseCase:
      "Converts a 45-minute technical call into a 3-bullet executive summary and auto-schedules the follow-up demo with an NDA link attached.",
  },
  {
    id: "governance-checkpoints",
    category: "growth",
    title: "Governance & Human Checkpoint Suite",
    subtitle: "Immutable audit ledger and customizable review gates",
    accent: "#10b981",
    badge: "Safety & Compliance",
    icon: "ShieldCheck",
    summary:
      "Ensures life-science companies get maximum AI leverage without ever risking unauthorized communications or erroneous payments.",
    description:
      "The foundation of the entire MetisSuite platform. Every autonomous agent operates behind deterministic governance gates. You set the rules for what executes autonomously (data tagging) and what mandates 1-click human verification (outbound emails, PO approvals).",
    keyCapabilities: [
      "Customizable 3-tier risk governance matrix (Autonomous, Supervised, Restricted)",
      "1-click verification cards delivered directly to desktop and mobile",
      "Cryptographically verified audit trail for every agent action and approval",
      "Full HIPAA BAA, SOC-2 Type II, and GDPR compliance architecture",
    ],
    interactiveMetric: {
      label: "Compliance guarantee on external actions",
      value: "100%",
    },
    sampleUseCase:
      "Pauses a high-value \$60,000 vendor agreement and delivers a side-by-side diff card to the VP of Operations before any signature.",
  },
];

export const roiCalculatorDefaults = {
  teamSizes: [5, 15, 30, 50, 100],
  hoursSavedPerPersonWeek: 6.5,
  avgHourlyCost: 65,
  dealsEnrichedPerMonth: 85,
};

export const comparisonPoints = [
  {
    feature: "Conference & In-Person Follow-up",
    metis: "Instant MeetLoop NFC tap -> automated bio context -> draft sent in < 4 hours",
    traditional: "Manual business cards collected -> entered days later -> generic email template",
  },
  {
    feature: "Scientific Context & Research",
    metis: "Real-time PubMed & clinical trial enrichment with verified citations",
    traditional: "Manual Google Scholar searches before every meeting",
  },
  {
    feature: "Vendor Invoicing & Reagent POs",
    metis: "Automated OCR extraction, contract discount auditing & 1-click approval",
    traditional: "Manual line-by-line spreadsheet cross-checking by lab manager",
  },
  {
    feature: "CRM Data Hygiene",
    metis: "Autonomous multi-agent syncing with zero manual data entry required",
    traditional: "Fragmented notes, outdated deal stages, forgotten follow-ups",
  },
  {
    feature: "Governance & Risk Control",
    metis: "Deterministic Human Checkpoint gates with immutable SHA-256 audit ledger",
    traditional: "Either uncontrolled AI hallucination risk or purely manual work",
  },
];

export const servicesFaqs = [
  {
    id: 1,
    question: "Can we subscribe to individual service modules or do we need the full suite?",
    answer:
      "MetisSuite is modular by design. While our clients experience maximum synergy when the full suite operates together, you can deploy individual modules—such as MeetLoop for an upcoming conference or AI Invoicing for lab operations—and expand over time.",
  },
  {
    id: 2,
    question: "How does Metis CRM integrate with our existing HubSpot or Salesforce instance?",
    answer:
      "MetisSuite acts as an operating layer directly connected via native bi-directional webhooks and APIs. You do not need to migrate or abandon your current CRM; Metis agents read context from your existing records and write updates directly back into them in real time.",
  },
  {
    id: 3,
    question: "What physical hardware is included with MeetLoop™?",
    answer:
      "MeetLoop includes custom laser-engraved NFC metal or bamboo cards, smart attendee lanyards for conferences, and dynamic QR badges linked to your team's personalized digital profiles.",
  },
  {
    id: 4,
    question: "How long does onboarding and custom calibration take for our biotech workflows?",
    answer:
      "Our systems engineers typically complete full onboarding within 3 to 5 business days. This includes mapping your existing pipelines, calibrating the scientific terminology guardrails, and testing human checkpoint routes.",
  },
  {
    id: 5,
    question: "Is our scientific IP and customer data secure?",
    answer:
      "Yes. We support single-tenant VPC deployments, end-to-end AES-256 encryption, HIPAA compliance agreements (BAA), and zero-training guarantees on external LLMs.",
  },
];

