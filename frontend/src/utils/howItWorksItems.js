export const howItWorksSpotlight = {
  badge: "Life Sciences Operating Architecture",
  headingStart: "How specialized agents and",
  headingHighlight: "human control operate as one.",
  rollingWords: [
    "human control",
    "shared context",
    "clear approvals",
    "life science speed",
  ],
  bullets: [
    "Consolidates CRM, outreach, invoicing, purchasing, content, and lead gen in one place.",
    "Six specialized AI agents share context across every routine.",
    "Human approval gates keep your team in control before any external action.",
  ],
  stats: [
    {
      value: "0",
      label: "Unchecked external actions",
      sub: "Human approval gate on every send & payout",
    },
    {
      value: "6",
      label: "Specialized Metis agents",
      sub: "Voice, Outreach, Research, Social, Books, Procure",
    },
    {
      value: "1",
      label: "Unified Conductor View",
      sub: "Shared context across your entire team",
    },
    {
      value: "100%",
      label: "Built for life sciences",
      sub: "Long sales cycles, technical buyers & conferences",
    },
  ],
};

export const architectureStages = [
  {
    id: "stage-1",
    stepNumber: "01",
    name: "Capture & Ingest",
    tagline: "Conference taps, inbound calls, emails, and vendor docs enter one place",
    color: "#2ec4b6",
    bullets: [
      "MeetLoop™ NFC cards & QR badges capture contacts at biotech summits.",
      "Inbound calls, SMS, and emails route directly into your unified inbox.",
      "Supplier invoices and purchase requests are parsed automatically.",
    ],
    inputs: [
      "MeetLoop™ NFC & QR",
      "Inbound calls & SMS",
      "Email threads",
      "Vendor PDFs & POs",
    ],
    outputPayload: {
      source: "MeetLoop™ NFC Tap",
      contact: "Dr. Elena Vance",
      organization: "HelixBio Therapeutics",
      intent: "Assay scale-up & partnership inquiry",
      status: "Captured in CRM",
    },
    benefit: "No lost business cards or scattered notes after conferences.",
  },
  {
    id: "stage-2",
    stepNumber: "02",
    name: "The Conductor View",
    tagline: "One operating layer coordinating priorities, context, and routing",
    color: "#e8b04b",
    bullets: [
      "Tracks business rhythm, incoming leads, and pending approvals in one view.",
      "Matches incoming signals against existing CRM contacts and pipeline stage.",
      "Routes each task to the right specialist agent with full shared context.",
    ],
    inputs: [
      "CRM contact history",
      "Pipeline stage & notes",
      "Team approval rules",
      "Campaign status",
    ],
    outputPayload: {
      view: "Conductor Operating Layer",
      matchedRecord: "HelixBio Therapeutics (Active)",
      assignedAgents: ["Metis Research", "Metis Outreach", "Metis Books"],
      approvalMode: "Human Checkpoint Active",
    },
    benefit: "Eliminates tool-switching and manual handoffs between departments.",
  },
  {
    id: "stage-3",
    stepNumber: "03",
    name: "The Ensemble Execution",
    tagline: "Six specialized agents run routine work in parallel",
    color: "#a855f7",
    bullets: [
      "Metis Research builds prospect lists across email, LinkedIn, and Google Scholar.",
      "Metis Outreach & Social draft tailored follow-ups and scientific content.",
      "Metis Books & Procure prepare invoices, POs, and financial follow-ups.",
    ],
    inputs: [
      "Google Scholar & LinkedIn",
      "Brand voice guidelines",
      "Invoice & quote templates",
      "Purchasing workflows",
    ],
    outputPayload: {
      research: "Matched 4 relevant publications on Google Scholar",
      outreach: "Drafted personalized follow-up sequence",
      books: "Prepared estimate & linked pipeline record",
      status: "Ready for Review",
    },
    benefit: "Hours of admin and research prep completed in seconds.",
  },
  {
    id: "stage-4",
    stepNumber: "04",
    name: "Human-in-the-Loop Approval",
    tagline: "Your team reviews and approves before anything goes out",
    color: "#38bdf8",
    bullets: [
      "Sensitive actions pause at a clear 1-click approval gate.",
      "Reviewers can approve, edit copy, or reject directly from desktop or mobile.",
      "You decide which routines run automatically and which require sign-off.",
    ],
    inputs: [
      "Prepared email & SMS drafts",
      "Drafted invoices & POs",
      "1-click Approve / Edit / Reject",
      "Activity log",
    ],
    outputPayload: {
      status: "Awaiting Human Approval",
      reviewer: "Commercial & Ops Lead",
      actions: ["Approve & Send", "Edit Draft", "Hold"],
      control: "Human-in-the-Loop Verified",
    },
    benefit: "Full AI leverage with complete human oversight on every external step.",
  },
];

export const agentDeepDives = [
  {
    id: "voice",
    name: "Metis Voice",
    role: "24/7 Calls, Qualification & Appointment Booking",
    accent: "#2ec4b6",
    tag: "Calls & Booking",
    icon: "PhoneCall",
    overviewBullets: [
      "Answers inbound calls around the clock without missed-lead gaps.",
      "Qualifies life-science prospects and captures inquiry context.",
      "Books appointments directly to your calendar and follows up on missed calls.",
    ],
    inputContext: "Inbound phone calls, missed-call logs, calendar availability",
    actionOutput: "Qualified call notes, booked meetings, instant missed-call text-backs",
    guardrail: "Escalates complex technical or urgent calls directly to your team",
    liveMetrics: {
      availability: "24/7",
      responseSpeed: "Instant",
      bookingSync: "Real-Time",
    },
    exampleRoutine:
      "Answers an inbound lab inquiry -> Qualifies timeline & team size -> Books a 20-min discovery call on your calendar.",
  },
  {
    id: "outreach",
    name: "Metis Outreach",
    role: "Email & SMS Nurture, Reactivation & Outbound",
    accent: "#818cf8",
    tag: "Email & SMS",
    icon: "Mail",
    overviewBullets: [
      "Runs structured nurture, reactivation, and outbound email/SMS sequences.",
      "Keeps the human conversation thread intact across long biotech sales cycles.",
      "Pauses automatically when a prospect replies so your team can step in.",
    ],
    inputContext: "CRM lead stage, MeetLoop™ conference notes, reply status",
    actionOutput: "Tailored email & SMS follow-ups, reactivation campaigns",
    guardrail: "Requires human approval before launching new outbound sequences",
    liveMetrics: {
      channels: "Email + SMS",
      handoff: "Instant on Reply",
      contextSync: "100% Unified",
    },
    exampleRoutine:
      "Detects a stalled 30-day deal -> Drafts a relevant check-in -> Queues for 1-click approval before sending.",
  },
  {
    id: "research",
    name: "Metis Research",
    role: "Life-Science Lead & Prospect List Building",
    accent: "#e8b04b",
    tag: "Qualified Leads",
    icon: "Search",
    overviewBullets: [
      "Builds focused prospect lists tailored for biotech and life-science markets.",
      "Researches decision-makers across email, LinkedIn, and Google Scholar.",
      "Surfaces relevant publications and lab focus before your first call.",
    ],
    inputContext: "Target therapeutic area, role criteria, organization focus",
    actionOutput: "Verified prospect lists, Google Scholar citations, enriched CRM profiles",
    guardrail: "Sources only verifiable academic and professional profiles",
    liveMetrics: {
      sources: "Scholar + LinkedIn",
      targeting: "Life Sciences",
      crmSync: "Direct Push",
    },
    exampleRoutine:
      "Finds principal investigators publishing on biomarker assays -> Enriches contact details -> Pushes list to CRM.",
  },
  {
    id: "social",
    name: "Metis Social",
    role: "Brand-Voice Content Planning & Publishing",
    accent: "#f43f5e",
    tag: "Content Engine",
    icon: "Share2",
    overviewBullets: [
      "Plans, writes, and schedules technical and commercial content in your voice.",
      "Keeps your company visible between major industry conferences.",
      "Helps manage ongoing audience replies and engagement.",
    ],
    inputContext: "Company updates, technical milestones, brand voice guidelines",
    actionOutput: "Drafted social posts, content calendar, engagement responses",
    guardrail: "All posts queue for team review before publishing",
    liveMetrics: {
      voiceMatch: "Custom Brand",
      workflow: "Draft -> Approve",
      cadence: "Consistent",
    },
    exampleRoutine:
      "Turns a new product milestone into a clear LinkedIn post -> Submits for 1-click approval -> Publishes on schedule.",
  },
  {
    id: "books",
    name: "Metis Books",
    role: "AI Invoicing, Approvals & Financial Follow-Up",
    accent: "#c084fc",
    tag: "Invoicing & Ops",
    icon: "Receipt",
    overviewBullets: [
      "Prepares estimates and invoices directly from closed deals and scopes.",
      "Tracks internal approval steps before invoices go out to clients.",
      "Keeps payment follow-ups visible and on schedule.",
    ],
    inputContext: "Approved estimates, CRM deal terms, payment due dates",
    actionOutput: "Prepared invoices, approval cards, payment reminder follow-ups",
    guardrail: "No invoice is issued or marked paid without human confirmation",
    liveMetrics: {
      tracking: "End-to-End",
      followUp: "Automated",
      control: "Approval-Gated",
    },
    exampleRoutine:
      "Deal moves to Won -> Drafts client invoice -> Routes for sign-off -> Schedules polite due-date reminder.",
  },
  {
    id: "procure",
    name: "Metis Procure",
    role: "Purchase Requests, Approvals & Delivery Tracking",
    accent: "#10b981",
    tag: "Purchasing",
    icon: "ShoppingCart",
    overviewBullets: [
      "Coordinates internal purchase requests and vendor POs in one workflow.",
      "Routes purchasing steps through clear team approval checkpoints.",
      "Tracks order milestones and vendor follow-ups through delivery.",
    ],
    inputContext: "Team purchase requests, vendor quotes, delivery timelines",
    actionOutput: "Structured PO workflows, approval routing, delivery status tracking",
    guardrail: "Requires designated approver sign-off before PO dispatch",
    liveMetrics: {
      visibility: "Full PO Trail",
      approvals: "Role-Based",
      tracking: "Milestone Sync",
    },
    exampleRoutine:
      "Lab coordinator submits reagent request -> Routes to ops lead for approval -> Tracks vendor confirmation & delivery.",
  },
];

export const governanceTiers = [
  {
    tier: "Tier 1: Automatic",
    color: "#10b981",
    badge: "Low Risk • Background",
    rules: [
      "Runs automatically to keep your workspace clean and up to date.",
      "Zero external messages or financial commitments leave without review.",
    ],
    actionTypes: [
      "Contact tagging and CRM record updates",
      "Google Scholar & LinkedIn prospect enrichment",
      "Drafting follow-up emails and content",
      "Logging call summaries and notes",
    ],
  },
  {
    tier: "Tier 2: Approval Gate",
    color: "#e8b04b",
    badge: "Standard • 1-Click Review",
    rules: [
      "Agents prepare the complete draft, invoice, or schedule.",
      "Execution pauses until you click Approve on desktop or mobile.",
    ],
    actionTypes: [
      "Outbound email & SMS sequences",
      "Prepared client estimates & invoices",
      "Scheduled social media posts",
      "Pipeline stage & deal updates",
    ],
  },
  {
    tier: "Tier 3: Team Sign-Off",
    color: "#ef4444",
    badge: "High Impact • Explicit Sign-Off",
    rules: [
      "Reserved for purchasing, bulk outreach, and sensitive records.",
      "Requires explicit team lead confirmation before execution.",
    ],
    actionTypes: [
      "Vendor purchase orders & spend approvals",
      "Bulk reactivation campaigns",
      "Finalizing billing & payment records",
      "Account-wide workflow changes",
    ],
  },
];

export const interactiveScenarios = [
  {
    id: "scenario-conference",
    title: "Conference Lead to Booked Call",
    category: "Events & Commercial",
    timeSaved: "Hours of post-show admin",
    steps: [
      {
        step: "1. MeetLoop™ Tap",
        desc: "Prospect taps your NFC card or scans your QR badge at a life-science summit.",
        agent: "MeetLoop™",
      },
      {
        step: "2. Profile Enrichment",
        desc: "Metis Research adds their LinkedIn and Google Scholar context to the CRM.",
        agent: "Metis Research",
      },
      {
        step: "3. Draft Follow-Up",
        desc: "Metis Outreach writes a tailored follow-up referencing your booth conversation.",
        agent: "Metis Outreach",
      },
      {
        step: "4. Human Approval",
        desc: "You review the draft on your phone, tweak a line if needed, and tap Approve.",
        agent: "Human Gate",
      },
      {
        step: "5. Booked & Synced",
        desc: "Follow-up goes out with your booking link and updates the pipeline automatically.",
        agent: "Metis Voice",
      },
    ],
    outcomes: [
      "Tailored conference follow-up ready the same day—not a week later.",
      "Zero manual business card entry or lost booth notes.",
    ],
  },
  {
    id: "scenario-inbound-call",
    title: "24/7 Inbound Call to Qualified Meeting",
    category: "Voice & Pipeline",
    timeSaved: "Zero missed leads",
    steps: [
      {
        step: "1. Call Answered",
        desc: "Metis Voice answers an incoming prospect call immediately, day or night.",
        agent: "Metis Voice",
      },
      {
        step: "2. Lead Qualified",
        desc: "Captures project scope, timeline, and contact details naturally.",
        agent: "Metis Voice",
      },
      {
        step: "3. Meeting Booked",
        desc: "Books a discovery slot directly onto the right team calendar.",
        agent: "Metis Voice",
      },
      {
        step: "4. Context Shared",
        desc: "Logs call summary in the CRM and alerts the Conductor View.",
        agent: "Conductor",
      },
      {
        step: "5. Nurture Ready",
        desc: "Metis Outreach prepares a pre-call confirmation and prep note for review.",
        agent: "Metis Outreach",
      },
    ],
    outcomes: [
      "Every inbound call is answered, qualified, and scheduled without voicemail tag.",
      "Your team walks into the call with full context already in the CRM.",
    ],
  },
  {
    id: "scenario-books-procure",
    title: "Purchase Request to Invoice Follow-Up",
    category: "Operations & Finance",
    timeSaved: "Streamlined ops cycle",
    steps: [
      {
        step: "1. Request Logged",
        desc: "Team submits a vendor purchase request inside Metis Procure.",
        agent: "Metis Procure",
      },
      {
        step: "2. Approval Routing",
        desc: "Routes to the operations lead for 1-click sign-off.",
        agent: "Human Gate",
      },
      {
        step: "3. Delivery Tracked",
        desc: "Monitors vendor milestones and updates team status automatically.",
        agent: "Metis Procure",
      },
      {
        step: "4. Invoice Prepared",
        desc: "Metis Books drafts client billing and matches project milestones.",
        agent: "Metis Books",
      },
      {
        step: "5. Timely Follow-Up",
        desc: "Keeps payment reminders visible and scheduled with human oversight.",
        agent: "Metis Books",
      },
    ],
    outcomes: [
      "Clear audit trail from purchase request to delivery and invoicing.",
      "No buried spreadsheets or forgotten payment follow-ups.",
    ],
  },
];

export const howItWorksFaqs = [
  {
    id: 1,
    question: "How does MetisSuite keep humans in control?",
    answerBullets: [
      "You choose which tasks run automatically and which pause for approval.",
      "Outbound sequences, invoices, and purchase approvals wait for your 1-click sign-off.",
      "You can edit, approve, or hold any action from desktop or mobile.",
    ],
  },
  {
    id: 2,
    question: "Why use 6 specialized agents instead of one general chatbot?",
    answerBullets: [
      "Each agent is built for a specific operational routine (Voice, Outreach, Research, Social, Books, Procure).",
      "They share context through the Conductor View instead of working in isolation.",
      "Specialized workflows produce more consistent, reliable results for lean teams.",
    ],
  },
  {
    id: 3,
    question: "How is MetisSuite tailored for life sciences and biotech?",
    answerBullets: [
      "Built for long technical sales cycles, multi-stakeholder deals, and conference-heavy growth.",
      "Metis Research supports prospect discovery across Google Scholar, LinkedIn, and email.",
      "MeetLoop™ captures in-person contacts at summits and triggers fast, contextual follow-ups.",
    ],
  },
  {
    id: 4,
    question: "Do we need to replace all our existing tools on day one?",
    answerBullets: [
      "No—you can start with the modules you need most and expand over time.",
      "MetisSuite brings CRM, outreach, booking, invoicing, and purchasing into one operating layer.",
    ],
  },
];
