export const footerData = {
  brand: {
    nameStart: "Metis",
    nameMiddle: "Suite",
    nameBadge: "AI",
    tagline:
      "The unified operating suite for biotech & life sciences. Autonomous agent routines with deterministic human checkpoints.",
    status: {
      label: "All Systems Operational",
      uptime: "99.98% SLA",
      activeAgents: "6 / 6 Agents Active",
    },
    contactEmail: "hello@metissuiteai.app",
  },
  navigationGroups: [
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "/how-it-works" },
        { label: "Services & Modules", href: "/services" },
        { label: "Client Results", href: "/client-results" },
        { label: "Pricing & Plans", href: "/pricing" },
        { label: "Book a Walkthrough", href: "/book-walkthrough" },
      ],
    },
    {
      title: "Capabilities",
      links: [
        { label: "MeetLoop™ NFC Events", href: "/services#meetloop" },
        { label: "Conductor Engine", href: "/how-it-works#architecture-pipeline-section" },
        { label: "Human Checkpoint Gate", href: "/how-it-works#governance-section" },
        { label: "AI Reagent Invoicing", href: "/services#services-grid-section" },
        { label: "PubMed Intelligence", href: "/services#services-grid-section" },
      ],
    },
    {
      title: "Legal & Trust",
      links: [
        { label: "Privacy Policy", href: "/privacy", external: false },
        { label: "Terms & Conditions", href: "/terms", external: false },
        { label: "Security & HIPAA BAA", href: "/how-it-works#governance-section", external: false },
        { label: "Client Sign In", href: "https://app.metissuiteai.app/login", external: true },
        { label: "Create Account", href: "https://app.metissuiteai.app/signup", external: true },
      ],
    },
  ],
  bioHubs: [
    { city: "SF Bay Area", tz: "America/Los_Angeles", code: "PST" },
    { city: "Boston / Cambridge", tz: "America/New_York", code: "EST" },
    { city: "London BioCluster", tz: "Europe/London", code: "GMT" },
    { city: "Basel / Zurich", tz: "Europe/Zurich", code: "CET" },
  ],
  copyright: `© ${new Date().getFullYear()} MetisSuiteAI. All rights reserved.`,
  disclaimer:
    "MetisSuiteAI is an independent operating suite. All client research data and proprietary biotech IP remain isolated under single-tenant enterprise encryption.",
};

