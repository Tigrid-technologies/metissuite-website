// Default copy for the shared <CallToAction /> component.
// Edit here, or override any field per page via props.
export const ctaContent = {
  badge: "Your business, in tempo",
  headingStart: "You set the tune.",
  headingHighlight: "MetisSuiteAI conducts.",
  description:
    "See how a unified GHL-powered operating suite and purpose-built AI agents can fit the way your biotech or life-science company works.",
  primaryLabel: "Request a private walkthrough",
  primaryHref: "/contact",
  secondaryLabel: "View pricing",
  secondaryHref: "/pricing",
  points: [
    "Human-in-the-loop control",
    "Built for life science",
    "Live in days",
  ],
};

// Transparent alpha video sources in order of browser preference:
// 1. QuickTime Apple HEVC with Alpha (Safari macOS & iOS)
// 2. WebM VP9 with Alpha channel (Chrome, Edge, Firefox, Brave, Android)
// 3. MP4 Apple HEVC fallback
export const ctaVideoSources = [
  { src: "/assets/elements/element_02-alpha.mov", type: "video/quicktime" },
  { src: "/assets/elements/element_02-alpha.webm", type: "video/webm" },
  { src: "/assets/elements/element_02-alpha.mp4", type: 'video/mp4; codecs="hvc1"' },
];
