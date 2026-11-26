export const servicesSpotlight = {
  badge: "Life Sciences Operating Modules",
  headingStart: "Six connected services.",
  headingHighlight: "One unified operating rhythm.",
  rollingWords: [
    "operating rhythm.",
    "pipeline velocity.",
    "human control.",
    "commercial cadence.",
  ],
  bullets: [
    "Replace disconnected CRM, outreach, invoicing, and purchasing tools.",
    "Purpose-built for lean biotech and life-science teams.",
    "Every module shares context and respects your human approval gates.",
  ],
  stats: [
    {
      value: "6",
      label: "Core Metis modules",
      sub: "Deploy together or start with what you need",
    },
    {
      value: "24/7",
      label: "Voice & lead coverage",
      sub: "Never miss an inbound call or conference lead",
    },
    {
      value: "1",
      label: "Unified workspace",
      sub: "CRM, marketing, billing & purchasing connected",
    },
    {
      value: "100%",
      label: "Human-in-the-loop",
      sub: "Approval gates before external actions",
    },
  ],
  categories: [
    { id: "all", label: "All Services" },
    { id: "growth", label: "CRM & Voice" },
    { id: "physical", label: "MeetLoop™ & Events" },
    { id: "research", label: "Research & Outreach" },
    { id: "finance", label: "Books & Procure" },
  ],
};

export const servicesList = [
  {
    id: "crm-pipeline",
    category: "growth",
    title: "CRM & Unified Pipeline",
    subtitle: "Context-aware pipeline for long-cycle life-science deals",
    accent: "#2ec4b6",
    badge: "Core Operating Layer",
    icon: "Database",
    summary:
      "Keep contacts, conversations, and deal stages organized in one shared workspace.",
    bullets: [
      "Unified inbox combining email, SMS, and call history per contact.",
      "Clear pipeline stages tailored for technical buyers and long sales cycles.",
      "Automatic activity updates from every Metis agent—no manual data entry.",
    ],
    keyCapabilities: [
      "Contacts & pipeline management in one view",
      "Unified email, SMS, and call conversation thread",
      "Online booking & calendar coordination",
      "Shared context across all 6 Metis agents",
    ],
    interactiveMetric: {
      label: "Manual CRM logging required",
      value: "Zero",
    },
    sampleUseCase:
      "Every call, conference tap, and email reply updates the deal timeline automatically.",
  },
  {
    id: "meetloop-events",
    category: "physical",
    title: "MeetLoop™ Event Capture",
    subtitle: "Turn conference conversations into immediate pipeline",
    accent: "#e8b04b",
    badge: "Physical-to-Digital",
    icon: "Smartphone",
    summary:
      "Smart NFC cards and dynamic QR badges that capture in-person context at life-science summits.",
    bullets: [
      "Prospects tap your NFC card or scan QR—no app download needed.",
      "Record quick voice memos or booth notes right after each conversation.",
      "Automatically syncs contact + notes to CRM and drafts your follow-up.",
    ],
    keyCapabilities: [
      "Custom NFC smart cards and dynamic QR profiles",
      "Voice-note transcription attached to each contact",
      "Instant CRM capture at BIO, ASCO, and industry events",
      "Approval-gated follow-up drafts ready before you leave the floor",
    ],
    interactiveMetric: {
      label: "Post-conference follow-up",
      value: "Same Day",
    },
    sampleUseCase:
      "Tap badges at your booth, record a 10-second voice note, and approve the drafted follow-up from your phone.",
  },
  {
    id: "metis-voice",
    category: "growth",
    title: "Metis Voice & Booking",
    subtitle: "24/7 AI call answering, qualification & missed-call follow-up",
    accent: "#a855f7",
    badge: "Calls & Scheduling",
    icon: "Zap",
    summary:
      "Answer every inbound call, qualify prospects, and book meetings around the clock.",
    bullets: [
      "Answers inbound calls 24/7 with natural, on-brand responses.",
      "Qualifies callers and captures project needs directly into your CRM.",
      "Sends instant missed-call text-backs and books calendar slots.",
    ],
    keyCapabilities: [
      "24/7 inbound call answering and routing",
      "Automated missed-call SMS follow-up",
      "Direct online appointment booking",
      "Full call summaries logged to the contact record",
    ],
    interactiveMetric: {
      label: "Inbound call coverage",
      value: "24/7 Live",
    },
    sampleUseCase:
      "A prospect calls after hours, gets their questions answered, and books a discovery call for the next morning.",
  },
  {
    id: "metis-research",
    category: "research",
    title: "Metis Research",
    subtitle: "Targeted life-science lead lists across Scholar, LinkedIn & email",
    accent: "#38bdf8",
    badge: "Lead Generation",
    icon: "Compass",
    summary:
      "Build focused prospect lists for biotech and life-science markets without manual searching.",
    bullets: [
      "Researches relevant decision-makers across email, LinkedIn, and Google Scholar.",
      "Matches prospects to your ideal therapeutic focus or buyer profile.",
      "Enriches contact cards with publication and background context.",
    ],
    keyCapabilities: [
      "Google Scholar, LinkedIn, and email prospect discovery",
      "Life-science and biotech ICP targeting",
      "Automated profile enrichment before outreach",
      "Direct sync into CRM outreach pipelines",
    ],
    interactiveMetric: {
      label: "Research channels unified",
      value: "Scholar + Web",
    },
    sampleUseCase:
      "Builds a targeted list of oncology researchers and lab directors ready for Metis Outreach.",
  },
  {
    id: "metis-outreach-social",
    category: "research",
    title: "Metis Outreach & Social",
    subtitle: "Email/SMS sequences and brand-voice content engine",
    accent: "#f43f5e",
    badge: "Growth & Content",
    icon: "ShieldCheck",
    summary:
      "Run precise nurture sequences and publish consistent content in your voice—with human approval.",
    bullets: [
      "Runs email and SMS nurture, reactivation, and outbound sequences.",
      "Plans, writes, and schedules social content tailored to your brand voice.",
      "Keeps human-in-the-loop approval before campaigns or posts go live.",
    ],
    keyCapabilities: [
      "Multi-step email & SMS nurture and win-back campaigns",
      "Brand-voice social content planning and drafting",
      "Automatic pause when a prospect replies",
      "1-click human approval before sending or publishing",
    ],
    interactiveMetric: {
      label: "Outbound control",
      value: "1-Click Gate",
    },
    sampleUseCase:
      "Drafts a 3-step conference nurture sequence and a LinkedIn recap post, both ready for your sign-off.",
  },
  {
    id: "metis-books-procure",
    category: "finance",
    title: "Metis Books & Procure",
    subtitle: "AI invoicing, purchasing workflows & approval tracking",
    accent: "#f59e0b",
    badge: "Invoicing & Purchasing",
    icon: "Receipt",
    summary:
      "Prepare invoices, coordinate purchase requests, and keep financial follow-ups on time.",
    bullets: [
      "Prepares estimates and client invoices directly from pipeline activity.",
      "Coordinates internal purchase requests and vendor PO approval steps.",
      "Tracks payment follow-ups and delivery milestones in one place.",
    ],
    keyCapabilities: [
      "AI-prepared estimates and invoices",
      "Structured purchase request & PO approvals",
      "Delivery milestone and vendor follow-up tracking",
      "Human sign-off required before issuing payments or invoices",
    ],
    interactiveMetric: {
      label: "Financial oversight",
      value: "100% Gated",
    },
    sampleUseCase:
      "Tracks a lab supply purchase through approval and prepares the client milestone invoice automatically.",
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
    feature: "Conference & Event Follow-up",
    metis: "MeetLoop™ NFC tap -> context captured -> follow-up drafted same day",
    traditional: "Paper business cards entered days later with generic templates",
  },
  {
    feature: "Life-Science Lead Research",
    metis: "Metis Research builds lists across Google Scholar, LinkedIn & email",
    traditional: "Manual searching across disconnected tabs before every call",
  },
  {
    feature: "Inbound Calls & Booking",
    metis: "24/7 Metis Voice answers, qualifies, and books onto your calendar",
    traditional: "Missed calls, voicemail tag, and slow back-and-forth scheduling",
  },
  {
    feature: "Invoicing & Purchasing",
    metis: "Metis Books & Procure prepare invoices, track POs & route approvals",
    traditional: "Scattered spreadsheets and manual payment follow-ups",
  },
  {
    feature: "Human Oversight",
    metis: "Clear approval gates before outbound sends, posts, or payouts",
    traditional: "Either unreviewed automation risk or 100% manual work",
  },
];

export const servicesFaqs = [
  {
    id: 1,
    question: "Can we start with specific modules or do we need everything at once?",
    answerBullets: [
      "You can start with the capabilities you need most—such as MeetLoop™, Metis Voice, or CRM & Outreach.",
      "All modules share the same operating layer, so adding more later works seamlessly.",
    ],
  },
  {
    id: 2,
    question: "What is included with MeetLoop™?",
    answerBullets: [
      "Physical NFC smart cards and dynamic QR profiles linked to your CRM.",
      "Instant contact capture, voice-note transcription, and drafted follow-ups.",
    ],
  },
  {
    id: 3,
    question: "How does human-in-the-loop approval work across services?",
    answerBullets: [
      "Agents prepare drafts, prospect lists, invoices, and purchase orders.",
      "Your team reviews and approves with one click before anything goes external.",
    ],
  },
  {
    id: 4,
    question: "Who is MetisSuite built for?",
    answerBullets: [
      "Lean teams in biotech and life sciences handling technical buyers, long sales cycles, and industry conferences.",
      "Teams looking to replace 5+ disconnected tools with one AI-managed operating suite.",
    ],
  },
];
