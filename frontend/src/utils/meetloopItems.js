import { QrCode, UserCheck, Mail, Sparkles, Smartphone, Check, ArrowRight } from "lucide-react";

// Centralized content for Section 04: Metis Meetloop
export const meetloopData = {
  header: {
    badgeNumber: "04",
    badgeLabel: "METIS MEETLOOP",
    headingStart: "Turn every meeting into",
    headingHighlight: "momentum.",
    description:
      "Smart QR codes and NFC tags connect in-person conversations to the same operating system. Capture context while it's fresh, route the lead, and start a thoughtful follow-up before the day ends.",
  },
  features: [
    {
      id: "profiles",
      title: "Reusable smart profiles",
      description:
        "No paper business cards lost in badge lanyards. Instant bi-directional contact exchange with scientific focus tags.",
      icon: QrCode,
      color: "#2ec4b6", // Teal
      tag: "QR + NFC Tag",
    },
    {
      id: "routing",
      title: "Automatic contact routing",
      description:
        "Syncs booth badge scans and quick voice memos directly into your CRM pipeline and lead scoring within 4 minutes.",
      icon: UserCheck,
      color: "#e8b04b", // Gold
      tag: "Instant CRM Sync",
    },
    {
      id: "followup",
      title: "Context-aware follow-up",
      description:
        "Metis Outreach drafts personalized scientific follow-ups citing discussed abstracts, queued for 1-click approval.",
      icon: Mail,
      color: "#818cf8", // Indigo
      tag: "Human-in-the-loop",
    },
  ],
  mobileScreens: {
    screen1: {
      stepBadge: "Ready to Scan",
      brand: "MetisSuite AI",
      heading: "Great meeting.",
      subtitle: "Tap to save the contact, exchange notes and start the right follow-up.",
      buttonLabel: "Tap to Connect (NFC / QR)",
    },
    screen2: {
      stepBadge: "Context Captured",
      name: "Dr. Elena Vance",
      title: "Lead Principal Investigator",
      institution: "Stanford Oncology & Immunotherapy",
      capturedVia: "Booth #412 • AACR 2024",
      memo: '"Interested in ADC reagent protocol and pricing for Q3 pilot."',
      triggers: [
        "Verified PubMed lab focus & publication history",
        "Created CRM deal in Discovery Stage ($24.5k)",
        "Prepared customized follow-up draft for review",
      ],
      buttonLabel: "✓ Rhythms Initiated",
    },
  },
};

