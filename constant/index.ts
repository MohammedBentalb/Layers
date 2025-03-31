import {
  quantumLogo,
  acmeLogo,
  echoValleyLogo,
  pulseLogo,
  outsideLogo,
  apexLogo,
  celestialLogo,
  twiceLogo,
  figmaImg,
  notionImg,
  relumeImg,
  framerImg,
  githubImg,
  slackImg,
} from "@/public/assets";

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export const companies = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export const integrations = [
  {
    name: "Figma",
    icon: figmaImg,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionImg,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackImg,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeImg,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerImg,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubImg,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export const FQAs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];
