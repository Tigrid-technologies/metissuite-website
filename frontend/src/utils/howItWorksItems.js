export const howItWorksSpotlight = {
  badge: "System Architecture & Mechanics",
  headingStart: "How autonomous agents and",
  headingHighlight: "human control operate as one.",
  rollingWords: [
    "human control",
    "deterministic rules",
    "clinical precision",
    "verified execution",
  ],
  description:
    "MetisSuiteAI does not replace your team—it amplifies your operational tempo. Here is the exact mechanics of how data is ingested, orchestrated across 6 specialized agents, checked by human judgment, and synced directly to your systems.",
  stats: [
    { value: "0", label: "Unchecked high-risk actions", sub: "100% human checkpoint guarantee" },
    { value: "6", label: "Coordinated autonomous agents", sub: "Each specialized in a single routine" },
    { value: "< 2 min", label: "End-to-end routine cycle", sub: "From raw signal to approved execution" },
    { value: "100%", label: "Biotech & life-science focused", sub: "Pre-trained on scientific nomenclature" },
  ],
};

export const architectureStages = [
  {
    id: "stage-1",
    stepNumber: "01",
    name: "Multi-Modal Ingestion",
    tagline: "Connecting signals across physical & digital biotech touchpoints",
    color: "#2ec4b6",
    description:
      "Signals enter the suite through physical NFC taps at scientific summits, inbound scientific queries, supplier PDF invoices, or scheduled PubMed research triggers.",
    inputs: ["MeetLoop NFC & Smart QR", "Inbound emails & WhatsApp", "Vendor PDF invoices & POs", "PubMed / ClinicalTrials.gov feeds"],
    outputPayload: {
      source: "MeetLoop NFC #4029 (BIO 2026)",
      rawEntity: "Dr. Elena Rostova",
      affiliation: "Cambridge BioPharma",
      intent: "Discussing Series B CDMO scale-up",
      timestamp: "Just now",
    },
    benefit: "Zero manual data entry or lost business cards after summits.",
  },
  {
    id: "stage-2",
    stepNumber: "02",
    name: "The Conductor Engine",
    tagline: "Context synthesis, risk classification & agent dispatch",
    color: "#e8b04b",
    description:
      "The Conductor evaluates the incoming signal against your organizational knowledge base, determines the optimal execution pathway, and assigns tasks to specialized agents.",
    inputs: ["Raw signal payload", "Historical CRM interactions", "Company tone & regulatory guardrails", "Risk classification matrix"],
    outputPayload: {
      orchestrator: "Metis Conductor v2.4",
      riskLevel: "Tier 2: Supervised Checkpoint",
      assignedAgents: ["Scout (Enrichment)", "Scribe (Drafting)", "Dispatch (Schedule)"],
      executionConfidence: "98.4%",
    },
    benefit: "Prevents dashboard hopping by routing work to the right specialist automatically.",
  },
  {
    id: "stage-3",
    stepNumber: "03",
    name: "Multi-Agent Execution",
    tagline: "Parallel autonomous problem solving in a secure sandbox",
    color: "#a855f7",
    description:
      "Specialized agents execute their assigned slices simultaneously. Scout gathers recent oncology publications, Scribe composes tailored follow-ups, and Ledger prepares budget estimates.",
    inputs: ["Scoped task assignments", "Verified scientific databases", "Template repositories", "ERP & CRM write locks"],
    outputPayload: {
      scoutStatus: "Retrieved 3 recent Nature papers on mRNA purification",
      scribeStatus: "Synthesized personalized 3-paragraph outreach",
      ledgerStatus: "Linked account to Tier 1 biotech pipeline",
      executionTime: "1.4 seconds",
    },
    benefit: "Tasks that took 45 minutes of manual preparation are ready in under 2 seconds.",
  },
  {
    id: "stage-4",
    stepNumber: "04",
    name: "Human Checkpoint & Safe Release",
    tagline: "No message, payment, or contract leaves without human sign-off",
    color: "#38bdf8",
    description:
      "Before any irreversible action occurs (sending emails, committing capital, updating vendor contracts), the routine pauses at a Human Checkpoint with full context and a 1-click decision card.",
    inputs: ["Completed agent payload", "Human reviewer push alert", "Side-by-side context diff", "Audit ledger"],
    outputPayload: {
      status: "Awaiting Human Verification",
      reviewer: "VP of Business Development",
      actionAvailable: ["Approve & Dispatch", "Edit Context", "Reject & Log"],
      auditSignature: "SHA256:7e9b40...Verified",
    },
    benefit: "Full AI leverage with zero hallucination risk or unauthorized actions.",
  },
];

export const agentDeepDives = [
  {
    id: "conductor",
    name: "Conductor",
    role: "Master Orchestration & Routine Routing",
    accent: "#e8b04b",
    tag: "Core Dispatcher",
    icon: "Cpu",
    overview:
      "The Conductor functions as the chief of staff for your digital workforce. It maintains your operational rhythm, monitors SLAs, and ensures no task slips between cracks.",
    inputContext: "Inbound webhooks, meeting transcripts, scheduled cron triggers, status alerts",
    actionOutput: "Task slicing, agent routing, dependency resolution, execution telemetry",
    guardrail: "Strict policy evaluation preventing concurrent conflicting actions",
    liveMetrics: {
      tasksProcessed: "14,820",
      avgDispatchLatency: "85ms",
      activeThreads: "28 concurrent",
    },
    exampleRoutine:
      "Detects an NFC lead capture -> Checks CRM for existing record -> Spawns Scout for PubMed enrichment -> Passes context to Scribe.",
  },
  {
    id: "scribe",
    name: "Scribe",
    role: "Scientific Copywriting & Contextual Communications",
    accent: "#2ec4b6",
    tag: "Communications Agent",
    icon: "PenTool",
    overview:
      "Scribe produces scientifically precise communications. It drafts personalized follow-ups, quarterly shareholder reports, and regulatory briefing memos aligned with your brand voice.",
    inputContext: "Prospect bio profile, meeting audio transcript, scientific references, tone guidelines",
    actionOutput: "Custom email drafts, meeting summaries, briefing docs, calendar proposals",
    guardrail: "Human Checkpoint required before any email is dispatched to external recipients",
    liveMetrics: {
      draftsGenerated: "8,940",
      humanApprovalRate: "94.6%",
      avgDraftTime: "1.8s",
    },
    exampleRoutine:
      "Drafts a follow-up referencing the specific protein folding problem discussed at Booth #214 during BIO 2026.",
  },
  {
    id: "scout",
    name: "Scout",
    role: "Scientific Intelligence & Bio Context Enrichment",
    accent: "#38bdf8",
    tag: "Research Agent",
    icon: "Compass",
    overview:
      "Scout scans PubMed, bioRxiv, clinicaltrials.gov, and LinkedIn to enrich leads and vendor profiles with verified scientific data and recent commercial announcements.",
    inputContext: "Contact name, organization domain, pipeline focus, target disease area",
    actionOutput: "Structured bio profile, recent publications, patent filings, competitive tech tags",
    guardrail: "Verified source whitelisting only (no unverified forum or web hearsay)",
    liveMetrics: {
      profilesEnriched: "11,200+",
      sourceCitations: "48,000+",
      accuracyScore: "99.2%",
    },
    exampleRoutine:
      "Cross-references a scientist's name with recent CRISPR-Cas12 publications to identify exact lab grant funding status.",
  },
  {
    id: "prospector",
    name: "Prospector",
    role: "Pipeline Sourcing & ICP Account Scoring",
    accent: "#10b981",
    tag: "Pipeline Engine",
    icon: "Target",
    overview:
      "Prospector continuously qualifies prospective life-science partners against your Ideal Customer Profile (ICP), evaluating stage of clinical development and funding runway.",
    inputContext: "Market territory, therapeutic focus, stage of trial (Phase I/II/III), funding stage",
    actionOutput: "Scored prospect accounts, key decision-maker matrix, initial outreach triggers",
    guardrail: "Strict compliance filters respecting national bio-marketing regulations",
    liveMetrics: {
      leadsQualified: "6,410",
      qualificationAccuracy: "96.8%",
      crmSyncRate: "Instant",
    },
    exampleRoutine:
      "Flags 14 biotech firms in South San Francisco that recently closed Series A rounds and announced antibody discovery pipelines.",
  },
  {
    id: "ledger",
    name: "Ledger",
    role: "Lab Procurement, Invoicing & Budget Checkpoints",
    accent: "#f59e0b",
    tag: "Financial Controller",
    icon: "Receipt",
    overview:
      "Ledger monitors supplier contracts, reagent purchases, equipment invoices, and customer billing. It detects price anomalies and prepares PO approvals with line-item clarity.",
    inputContext: "Vendor invoice PDFs, QuickBooks/Xero ledger, purchase agreements, expense policies",
    actionOutput: "Reconciled PO entries, anomaly flags, auto-generated payment approvals",
    guardrail: "Hard monetary threshold requiring dual-human authorization above \$5,000",
    liveMetrics: {
      invoicesAudited: "\$4.2M+",
      anomaliesCaught: "182",
      processingSpeed: "0.9s per invoice",
    },
    exampleRoutine:
      "Reads a \$14,500 lab reagent invoice -> Compares against contractual discount rate -> Prepares approval card for Lab Director.",
  },
  {
    id: "dispatch",
    name: "Dispatch",
    role: "24/7 Multi-Channel Follow-Up & Calendar Coordination",
    accent: "#a855f7",
    tag: "Execution Engine",
    icon: "Zap",
    overview:
      "Dispatch handles outbound logistics: triggering time-delayed email sequences, WhatsApp confirmations, calendar synchronization, and CRM status updates.",
    inputContext: "Approved drafts from Scribe, calendar availability slots, timezone coordinates",
    actionOutput: "Live email sends, calendar invites, reminder WhatsApp pings, CRM record locking",
    guardrail: "Rate-limiting rules and instant cancellation toggle available to team",
    liveMetrics: {
      eventsScheduled: "3,890",
      deliverabilityRate: "99.8%",
      syncLatency: "< 100ms",
    },
    exampleRoutine:
      "Transfers approved email to recipient -> Waits for calendar confirmation -> Books 30-min meeting in the proper rep's calendar.",
  },
];

export const governanceTiers = [
  {
    tier: "Tier 1: Autonomous",
    color: "#10b981",
    badge: "Low Risk • Real-Time",
    actionTypes: [
      "Contact data normalization and tagging",
      "PubMed publication & grant status enrichment",
      "Draft generation and internal note creation",
      "CRM activity timeline updates",
    ],
    rule: "Executes immediately in the background. Logs full trace to the immutable audit ledger.",
  },
  {
    tier: "Tier 2: Supervised Checkpoint",
    color: "#e8b04b",
    badge: "Medium Risk • Human Checkpoint",
    actionTypes: [
      "First outbound email to new conference lead",
      "Calendar scheduling and meeting invitations",
      "Contract status and pipeline stage changes",
      "Vendor invoice reconciliation under \$5,000",
    ],
    rule: "Agent prepares everything. Execution pauses until a team member clicks 'Approve' on desktop or mobile.",
  },
  {
    tier: "Tier 3: Restricted Dual-Signoff",
    color: "#ef4444",
    badge: "High Risk • Strict Dual Approval",
    actionTypes: [
      "Capital expenditures and PO approvals > \$5,000",
      "Bulk outbound campaigns (> 50 recipients)",
      "Regulatory submission drafts or legal disclosure notes",
      "Sensitive data exports or deletion routines",
    ],
    rule: "Requires verified cryptographic signature or dual-approver confirmation before any write to external systems.",
  },
];

export const interactiveScenarios = [
  {
    id: "scenario-conference",
    title: "Scientific Conference Lead to Pipeline",
    category: "Commercial & Business Development",
    timeSaved: "38 minutes per lead",
    steps: [
      {
        step: "1. NFC Tap",
        desc: "Prospect taps their phone against your MeetLoop NFC badge at BIO 2026.",
        agent: "MeetLoop",
      },
      {
        step: "2. Scientific Scan",
        desc: "Scout retrieves 3 recent papers on mRNA purification from Cambridge BioPharma.",
        agent: "Scout",
      },
      {
        step: "3. Precision Drafting",
        desc: "Scribe generates a tailored email referencing their specific assay challenges.",
        agent: "Scribe",
      },
      {
        step: "4. Human Checkpoint",
        desc: "Commercial rep reviews the draft on their phone, edits 1 word, and taps Approve.",
        agent: "Human Checkpoint",
      },
      {
        step: "5. CRM & Calendar Sync",
        desc: "Dispatch delivers the email with calendar slots and updates HubSpot with zero manual entry.",
        agent: "Dispatch",
      },
    ],
    outcome:
      "A personalized scientific outreach email was delivered within 4 minutes of walking away from the conference booth, with zero administrative work for the sales rep.",
  },
  {
    id: "scenario-lab-po",
    title: "Lab Supply Invoicing & PO Audit",
    category: "Lab Operations & Procurement",
    timeSaved: "2.5 hours per week",
    steps: [
      {
        step: "1. PDF Ingestion",
        desc: "Supplier sends a \$12,800 monthly reagent invoice via email.",
        agent: "Conductor",
      },
      {
        step: "2. OCR & Line-Item Check",
        desc: "Ledger extracts SKU numbers, verifies contracted tier discounts, and checks stock records.",
        agent: "Ledger",
      },
      {
        step: "3. Discrepancy Flag",
        desc: "Identifies a 12% price discrepancy on antibody lot #B88 and flags it.",
        agent: "Ledger",
      },
      {
        step: "4. Approval Card",
        desc: "Lab Director gets a structured notification showing the discount dispute draft.",
        agent: "Human Checkpoint",
      },
      {
        step: "5. ERP Reconciliation",
        desc: "Approved adjusted invoice is pushed directly into QuickBooks with credit note requested.",
        agent: "Dispatch",
      },
    ],
    outcome:
      "Prevented a \$1,536 supplier overcharge while eliminating manual line-by-line invoice matching for the lab manager.",
  },
  {
    id: "scenario-research",
    title: "PubMed & Trial Alert to Commercial Brief",
    category: "R&D & Market Intelligence",
    timeSaved: "6 hours per week",
    steps: [
      {
        step: "1. Scheduled Crawl",
        desc: "Scout scans PubMed and ClinicalTrials.gov at 06:00 AM for target oncology biomarkers.",
        agent: "Scout",
      },
      {
        step: "2. Relevance Filtering",
        desc: "Filters 400 papers down to the 2 high-impact Phase II results directly relevant to your pipeline.",
        agent: "Conductor",
      },
      {
        step: "3. Executive Synthesis",
        desc: "Scribe summarizes clinical findings into a 1-page executive intelligence bulletin.",
        agent: "Scribe",
      },
      {
        step: "4. Internal Review",
        desc: "Chief Scientific Officer reviews and approves the internal distribution list.",
        agent: "Human Checkpoint",
      },
      {
        step: "5. Slack & Email Dispatch",
        desc: "Bulletin is pushed to R&D leadership Slack channel with source links annotated.",
        agent: "Dispatch",
      },
    ],
    outcome:
      "Scientific leadership receives curated competitive pipeline intelligence before their morning standup without paying for expensive analyst feeds.",
  },
];

export const howItWorksFaqs = [
  {
    id: 1,
    question: "How does MetisSuite prevent AI hallucinations in scientific conversations?",
    answer:
      "MetisSuite uses a dual-layered safeguard. First, Scout and Scribe operate with deterministic retrieval-augmented generation (RAG) strictly restricted to verified sources (PubMed, your internal knowledge base, and CRM records). Second, our Human-in-the-Loop checkpoint mandates that no external communication leaves the system without a qualified team member's explicit approval.",
  },
  {
    id: 2,
    question: "Do we have to replace our existing CRM (HubSpot, Salesforce, GHL)?",
    answer:
      "No. MetisSuite is an operating layer designed to sit directly on top of your existing tools. We provide native bi-directional synchronization with HubSpot, Salesforce, GoHighLevel, QuickBooks, Slack, and Google Workspace. Your team continues using their familiar dashboards while Metis agents execute background routines.",
  },
  {
    id: 3,
    question: "How is our proprietary biotech IP and patient/client data protected?",
    answer:
      "Security and data sovereignty are paramount in life sciences. MetisSuite employs AES-256 encryption at rest and TLS 1.3 in transit. Your proprietary data is never used to train public LLM models, and we support isolated single-tenant VPC deployments, HIPAA BAA compliance, and SOC-2 Type II standards.",
  },
  {
    id: 4,
    question: "Can we customize the approval thresholds for our specific organization?",
    answer:
      "Yes. Every organization has complete control over the Governance Matrix. You can define exact financial spending thresholds, select which team members have sign-off authority for specific clients or departments, and toggle between fully autonomous and checkpoint modes on a routine-by-routine basis.",
  },
  {
    id: 5,
    question: "How fast can our team go live with MetisSuite?",
    answer:
      "Most biotech teams are fully operational within 3 to 5 business days. Our systems architects handle the initial CRM mapping, tone-of-voice calibration, and agent guardrail configuration during a dedicated onboarding sprint.",
  },
];

