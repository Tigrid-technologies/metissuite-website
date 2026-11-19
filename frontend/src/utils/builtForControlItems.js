import { ShieldCheck, Database, GitFork, CheckCircle, Clock, UserCheck } from "lucide-react";

// Centralized content for the "Built for Control" section
export const controlSectionData = {
  badgeNumber: "05",
  badgeLabel: "BUILT FOR CONTROL",
  headingLine1: "AI does the routine.",
  headingLine2: "Your team keeps the judgment.",
  description:
    "MetisSuiteAI is designed around approval, visibility and accountable handoffs. You decide what runs automatically, what needs review, and where people take over.",
};

export const controlPillars = [
  {
    id: "approval",
    number: "01",
    title: "Approval before action",
    description: "Set review points for sensitive messages, payments and records.",
    accent: {
      name: "amber",
      primary: "#f59e0b",
      light: "#fbbf24",
      bgGlow: "rgba(245, 158, 11, 0.12)",
      border: "rgba(245, 158, 11, 0.25)",
      badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    icon: ShieldCheck,
    interactiveType: "approval",
    mockData: {
      actionType: "Outreach & Reagent Quote",
      recipient: "Dr. Elena Vance • Stanford Oncology Lab",
      amount: "$24,500 USD",
      statusPending: "Awaiting human review",
      statusApproved: "Approved & scheduled",
      approver: "Dr. Marcus Reed (Lab Director)",
    },
  },
  {
    id: "context",
    number: "02",
    title: "One source of context",
    description: "Keep customer, vendor and campaign history connected across modules.",
    accent: {
      name: "cyan",
      primary: "#06b6d4",
      light: "#38bdf8",
      bgGlow: "rgba(6, 182, 212, 0.12)",
      border: "rgba(6, 182, 212, 0.25)",
      badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    icon: Database,
    interactiveType: "context",
    modules: [
      { name: "PubMed Scan", tag: "Research", detail: "AACR 2024 Abstract #1492 identified" },
      { name: "HubSpot CRM", tag: "Outreach", detail: "Tier-1 Biopharma contact verified" },
      { name: "Books / ERP", tag: "Finance", detail: "PO Terms: Net 30, Lab PO #9802" },
    ],
  },
  {
    id: "handoff",
    number: "03",
    title: "Clear next steps",
    description: "Every workflow shows what happened, what is waiting and who owns it.",
    accent: {
      name: "violet",
      primary: "#a855f7",
      light: "#c084fc",
      bgGlow: "rgba(168, 85, 247, 0.12)",
      border: "rgba(168, 85, 247, 0.25)",
      badge: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    },
    icon: GitFork,
    interactiveType: "handoff",
    steps: [
      { label: "Lead enrichment", owner: "Metis AI", status: "Completed", pct: 100 },
      { label: "Technical review", owner: "Chief Scientist", status: "In progress", pct: 65 },
      { label: "Quote dispatch", owner: "Sales Lead", status: "Queued", pct: 0 },
    ],
  },
];

