import { Clock, CalendarCheck, TrendingUp, ShieldCheck } from "lucide-react";

// ---------------------------------------------------------------
// Client Results page data - edit here when real data arrives.
// Numbers marked "Illustrative" are placeholders.
// ---------------------------------------------------------------

// Spotlight (top section) copy
export const resultsSpotlight = {
  badge: "Client results",
  headingStart: "Real routines,",
  headingHighlight: "measurable momentum.",
  description:
    "See how life-science teams use the Metis ensemble to answer faster, follow up consistently and turn every conference conversation into pipeline - with a human approving every step that matters.",
  ctaLabel: "Talk to our team",
  ctaHref: "/contact",
  cardTitle: "Results snapshot",
  cardNote: "Illustrative figures", // set to "" to hide
};

// Stat tiles. `value` is a string so decimals like "3.4" roll correctly.
export const resultStats = [
  {
    icon: Clock,
    value: "62",
    suffix: "%",
    label: "Faster lead response",
    color: "#2ec4b6",
  },
  {
    icon: CalendarCheck,
    value: "3.4",
    suffix: "×",
    label: "More qualified meetings",
    color: "#818cf8",
  },
  {
    icon: TrendingUp,
    value: "18",
    suffix: " hrs",
    label: "Saved per week",
    color: "#e8b04b",
  },
  {
    icon: ShieldCheck,
    value: "100",
    suffix: "%",
    label: "Human-approved actions",
    color: "#c084fc",
  },
];

// Pipeline growth bar chart (values are % height, 0-100)
export const growthChart = {
  title: "Qualified pipeline growth",
  defaultValue: "88", // shown when no bar is hovered (prefixed with +, suffixed with %)
  bars: [
    { label: "M1", value: 34 },
    { label: "M2", value: 48 },
    { label: "M3", value: 41 },
    { label: "M4", value: 63 },
    { label: "M5", value: 58 },
    { label: "M6", value: 76 },
    { label: "M7", value: 88 },
  ],
};

// Testimonials section header copy
export const testimonialsHeader = {
  badge: "Testimonials",
  headingStart: "Trusted by teams who",
  headingHighlight: "move fast.",
  subtitle: "Hover any row to pause it and read the story.",
};

// Testimonials - placeholder quotes, replace with real client quotes.
// `accent` is the card's highlight colour.
export const testimonialsRowA = [
  {
    quote:
      "Every conference lead now gets a personal follow-up within the hour. Nothing slips through anymore.",
    name: "Dr. Priya Raman",
    role: "Head of BD, Oncology Biotech",
    accent: "#2ec4b6",
  },
  {
    quote:
      "Metis Voice books our demos around the clock. Our team just shows up to the meetings.",
    name: "Daniel Whitfield",
    role: "COO, Diagnostics Startup",
    accent: "#818cf8",
  },
  {
    quote:
      "Invoices are drafted and waiting for approval before I've finished my coffee.",
    name: "Dr. Elena Marsh",
    role: "Founder, Genomics Services",
    accent: "#c084fc",
  },
  {
    quote:
      "The research agent surfaces exactly the labs we should be talking to. It feels like an extra team member.",
    name: "Tomas Eriksen",
    role: "Sales Lead, Lab Instruments",
    accent: "#e8b04b",
  },
];

export const testimonialsRowB = [
  {
    quote:
      "Human approval on every outbound message gave our compliance team the confidence to go all in.",
    name: "Aisha Khan",
    role: "Operations Director, CRO",
    accent: "#2ec4b6",
  },
  {
    quote:
      "QR and NFC capture at booths means our notes and next steps are ready before we leave the hall.",
    name: "Marcus Lee",
    role: "Marketing Lead, Biotools",
    accent: "#f43f5e",
  },
  {
    quote:
      "One rhythm for outreach, quotes and purchasing. We finally stopped juggling five tools.",
    name: "Dr. Sofia Alvarez",
    role: "CEO, Therapeutics Startup",
    accent: "#10b981",
  },
  {
    quote:
      "Our pipeline is easier to read and far easier to trust. The conductor view is a daily habit now.",
    name: "James O'Connor",
    role: "VP Commercial, MedTech",
    accent: "#818cf8",
  },
];

