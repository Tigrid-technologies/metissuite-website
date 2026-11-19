// Centralized data for Section 01: The Operating Layer
export const operatingLayerData = {
  tickerItems: [
    "QR + NFC FOLLOW-UP",
    "EMAIL AUTOMATION",
    "CRM & PIPELINES",
    "AI INVOICING",
    "PURCHASING",
    "CONTENT RESEARCH",
    "MEETING INTELLIGENCE",
    "HUMAN-IN-THE-LOOP CHECKPOINTS",
  ],
  header: {
    badgeNumber: "01",
    badgeLabel: "THE OPERATING LAYER",
    headingStart: "Your business doesn't need",
    headingHighlight: "another disconnected tool.",
    paragraph1:
      "It needs the right work to happen, in the right order, without you checking six dashboards.",
    paragraph2:
      "MetisSuiteAI sits across the tools you already rely on and gives every routine an owner, a trigger and a clear approval point.",
  },
  conductor: {
    badge: "CONDUCTOR VIEW",
    titleLine1: "One morning.",
    titleLine2: "One clear score.",
    description:
      "See what moved, what needs approval, and what your agents will do next.",
    ctaLabel: "Explore the operating layer",
    ctaHref: "/contact",
    systemScore: "94%",
    metrics: [
      {
        id: "pipeline",
        label: "Pipeline touched",
        value: "28",
        suffix: "",
        unit: "accounts",
        color: "#2ec4b6",
        trend: "+14% today",
      },
      {
        id: "followups",
        label: "Follow-ups sent",
        value: "64",
        suffix: "",
        unit: "on schedule",
        color: "#e8b04b",
        trend: "100% on time",
      },
      {
        id: "time",
        label: "Admin time returned",
        value: "7.5",
        suffix: "h",
        unit: "this week",
        color: "#a855f7",
        trend: "Saved per lead",
      },
    ],
    activities: [
      {
        id: "act-1",
        title: "Lead list refined",
        time: "08:42",
        agent: "Research agent",
        category: "Discovery",
        dotColor: "#10b981",
        detail:
          "Scanned PubMed & conference registries. Verified 18 oncology lab directors with 98.4% match score.",
      },
      {
        id: "act-2",
        title: "Campaign copy approved",
        time: "09:15",
        agent: "Outreach agent",
        category: "Outreach",
        dotColor: "#e8b04b",
        detail:
          "Human approved 32 personalized emails citing recent AACR abstract data on antibody-drug conjugates.",
      },
      {
        id: "act-3",
        title: "Vendor reminder sent",
        time: "10:06",
        agent: "Procure agent",
        category: "Purchasing",
        dotColor: "#818cf8",
        detail:
          "Automatic status check dispatched for reagent trial order #RE-441 with lab institutional terms.",
      },
      {
        id: "act-4",
        title: "Invoice draft ready",
        time: "11:20",
        agent: "Books agent",
        category: "Finance",
        dotColor: "#2ec4b6",
        detail:
          "Generated milestone invoice #MS-2049 for $18,400. Queued for 1-click director approval.",
      },
    ],
  },
};

