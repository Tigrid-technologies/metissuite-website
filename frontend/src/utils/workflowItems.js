import { Search, Mail, CalendarCheck, QrCode, FileText } from "lucide-react";

// Centralized content for the Life-Science Ready Workflow section
export const workflowSectionData = {
  badgeNumber: "03",
  badgeLabel: "LIFE-SCIENCE READY",
  headingStart: "From scientific signal to commercial",
  headingHighlight: "follow-through.",
  description:
    "Long sales cycles, technical buyers and conference-heavy growth demand more than a generic automation stack. MetisSuiteAI helps small and mid-sized biotech teams keep every important interaction moving.",
  bullets: [
    "Prospect research across Google Scholar, LinkedIn and email",
    "Meeting capture through QR codes and NFC tags",
    "Human-reviewed content for technical audiences",
    "Quote, purchasing and invoice follow-up in one rhythm",
  ],
  cardHeader: {
    title: "Example workflow",
    subtitle: "CONFERENCE LEAD → CUSTOMER",
  },
  cardFooter: {
    message: "Metis coordinates context between every step.",
    checkpoint: "Human checkpoint active",
  },
};

export const workflowSteps = [
  {
    number: "01",
    title: "Lead identified",
    agent: "Research agent",
    icon: Search,
    activeColor: "#e8b04b",
    details:
      "Scanned conference directory & PubMed to verify Dr. Chen's oncology lab focus. Match score: 98.4%.",
  },
  {
    number: "02",
    title: "Message personalized",
    agent: "Outreach agent",
    icon: Mail,
    activeColor: "#2ec4b6",
    details:
      "Drafted tailored outreach referencing Dr. Chen's AACR 2024 abstract on antibody-drug conjugates. Approval requested.",
  },
  {
    number: "03",
    title: "Meeting booked",
    agent: "CRM + calendar",
    icon: CalendarCheck,
    activeColor: "#818cf8",
    details:
      "Confirmed 30-min scientific walkthrough. Calendar invite, bio briefing doc, and CRM lead profile auto-created.",
  },
  {
    number: "04",
    title: "Follow-up captured",
    agent: "QR / NFC suite",
    icon: QrCode,
    activeColor: "#c084fc",
    details:
      "Captured badge scan at booth #412. Voice notes transcribed and actionable follow-up checklist created in 4 minutes.",
  },
  {
    number: "05",
    title: "Quote to invoice",
    agent: "Books agent",
    icon: FileText,
    activeColor: "#2ec4b6",
    details:
      "Generated custom reagent trial quote with institutional PO terms. Sent to lab purchasing lead upon human sign-off.",
  },
];

