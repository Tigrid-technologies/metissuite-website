export const walkthroughSpotlight = {
  badge: "Private 1-on-1 Walkthrough",
  headingStart: "See your biotech routines",
  headingHighlight: "automated live.",
  description:
    "No generic slide decks. Join a 30-minute tailored walkthrough configured for your specific pipeline, CRM, or vendor workflows. Watch Metis agents execute tasks in real time with human approval checkpoints.",
  keyBenefits: [
    "30-minute tailored live session",
    "Biotech workflow & CRM mapping",
    "Human checkpoint & governance preview",
    "Custom rollout blueprint provided",
  ],
  stats: [
    { value: "30 min", label: "Focused walkthrough" },
    { value: "100%", label: "Live software, zero slides" },
    { value: "0 risk", label: "No obligation or software lock-in" },
  ],
};

export const walkthroughSteps = [
  {
    number: "01",
    title: "Select your schedule",
    desc: "Pick an available date and 30-minute time slot synchronized with your local timezone.",
    tag: "Instant calendar invite",
  },
  {
    number: "02",
    title: "Share your focus",
    desc: "Tell us which routines you want to streamline: lead capture, paper-to-pipeline research, or vendor POs.",
    tag: "Tailored to your stack",
  },
  {
    number: "03",
    title: "Live interactive demo",
    desc: "Meet 1-on-1 with an AI systems architect to see Metis agents execute real workflows with human checkpoints.",
    tag: "Live agent conductor",
  },
  {
    number: "04",
    title: "Get your blueprint",
    desc: "Leave with a mapped biotech operating plan, estimated hours saved, and sandbox access for your team.",
    tag: "Immediate takeaway",
  },
];

export const initialAvailableDays = [
  {
    id: "day-1",
    dayName: "SAT",
    dayNum: "21",
    monthName: "Nov",
    openCount: "4 open",
    badge: "TOMORROW",
    fullDate: "Saturday, November 21",
  },
  {
    id: "day-2",
    dayName: "TUE",
    dayNum: "24",
    monthName: "Nov",
    openCount: "5 open",
    fullDate: "Tuesday, November 24",
  },
  {
    id: "day-3",
    dayName: "WED",
    dayNum: "25",
    monthName: "Nov",
    openCount: "6 open",
    fullDate: "Wednesday, November 25",
  },
  {
    id: "day-4",
    dayName: "THU",
    dayNum: "26",
    monthName: "Nov",
    openCount: "6 open",
    fullDate: "Thursday, November 26",
  },
  {
    id: "day-5",
    dayName: "FRI",
    dayNum: "27",
    monthName: "Nov",
    openCount: "6 open",
    fullDate: "Friday, November 27",
  },
  {
    id: "day-6",
    dayName: "SAT",
    dayNum: "28",
    monthName: "Nov",
    openCount: "6 open",
    fullDate: "Saturday, November 28",
  },
  {
    id: "day-7",
    dayName: "TUE",
    dayNum: "1",
    monthName: "Dec",
    openCount: "5 open",
    fullDate: "Tuesday, December 1",
  },
  {
    id: "day-8",
    dayName: "WED",
    dayNum: "2",
    monthName: "Dec",
    openCount: "6 open",
    fullDate: "Wednesday, December 2",
  },
  {
    id: "day-9",
    dayName: "THU",
    dayNum: "3",
    monthName: "Dec",
    openCount: "6 open",
    fullDate: "Thursday, December 3",
  },
];

export const timeSlotsByPeriod = {
  Morning: [
    "12:30 AM",
    "1:30 AM",
    "2:30 AM",
    "3:30 AM",
    "4:30 AM",
    "5:30 AM",
    "9:00 AM",
    "10:30 AM",
    "11:30 AM",
  ],
  Afternoon: [
    "1:00 PM",
    "2:00 PM",
    "3:30 PM",
    "4:30 PM",
    "5:00 PM",
  ],
  Evening: [
    "6:00 PM",
    "7:30 PM",
    "8:30 PM",
    "9:30 PM",
  ],
};

export const supportedTimezones = [
  { label: "Asia/Calcutta (GMT+5:30)", key: "IST", hostOffset: false },
  { label: "America/Los_Angeles (PST GMT-8)", key: "PST", hostOffset: true },
  { label: "America/New_York (EST GMT-5)", key: "EST", hostOffset: false },
  { label: "Europe/London (GMT+0)", key: "GMT", hostOffset: false },
  { label: "Europe/Zurich (CET GMT+1)", key: "CET", hostOffset: false },
  { label: "Asia/Singapore (SGT GMT+8)", key: "SGT", hostOffset: false },
];

export const bookingFaqs = [
  {
    id: 1,
    question: "Who will I be meeting with during the walkthrough?",
    answer:
      "You will meet 1-on-1 with an AI systems architect specializing in life sciences, biotech pipeline automation, and GHL integrations. No high-pressure sales scripts—just technical, operational expertise tailored to your team's workflow bottlenecks.",
  },
  {
    id: 2,
    question: "How long is the session and what exactly is covered?",
    answer:
      "Sessions run for 30 focused minutes. We review your current routine pain points, demonstrate live Metis agents handling actual tasks (scientific research sync, bio conference lead follow-up, PO review), and show you how human-in-the-loop approval checkpoints keep you in total control.",
  },
  {
    id: 3,
    question: "Is this a live software walkthrough or a slide deck?",
    answer:
      "100% live software. We do not do generic PowerPoint pitches. You will see real Metis agents operating in a live sandbox, conducting workflows, and interacting with human approval prompts in real time.",
  },
  {
    id: 4,
    question: "Do I need to prepare anything or have my team attend?",
    answer:
      "No preparation is required on your part. You're welcome to invite key team members (operations, commercial leads, or lab directors). If you have specific routine examples or tools you'd like to integrate with (e.g. HubSpot, QuickBooks, PubMed), bring them along!",
  },
  {
    id: 5,
    question: "What happens after the walkthrough?",
    answer:
      "You receive the full session recording, an executive architecture blueprint custom-mapped to your biotech team, an estimated ROI projection, and sandbox access to test MetisSuite with your own data.",
  },
  {
    id: 6,
    question: "Can I reschedule or cancel if an urgent conflict arises?",
    answer:
      "Yes, completely flexible. Every confirmation email and calendar invitation includes a 1-click reschedule link. You can change your date or time anytime without penalty.",
  },
];


