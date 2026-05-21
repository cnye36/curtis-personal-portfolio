export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  github?: string;
  featured: boolean;
  status: "live" | "in-progress" | "archived";
};

export const projects: Project[] = [
  {
    slug: "affinitybots",
    title: "AffinityBots",
    description:
      "AI-powered automation platform that helps businesses streamline repetitive workflows and boost productivity through intelligent, customizable bots.",
    tags: ["AI", "SaaS", "Automation", "TypeScript", "Next.js"],
    href: "https://affinitybots.com",
    image: "/projects/affinitybots.png",
    featured: true,
    status: "live",
  },
  {
    slug: "let-ai-write-it",
    title: "Let AI Write It",
    description:
      "AI article writer that generates long-form content from a topic or brief — built for bloggers, marketers, and anyone who needs publish-ready drafts fast.",
    tags: ["AI", "Content", "SaaS", "Next.js"],
    href: "https://letaiwriteit.com",
    image: "/projects/let-ai-write-it.png",
    featured: true,
    status: "live",
  },
  {
    slug: "ai-social-media-manager",
    title: "AI Social Media Manager",
    description:
      "Social media management app powered by AI — plan, draft, and manage posts across channels from one workspace.",
    tags: ["AI", "Social Media", "SaaS", "Next.js"],
    href: "https://ai-social-media-manager-nu.vercel.app",
    image: "/projects/social-media-manager.png",
    featured: true,
    status: "live",
  },
  {
    slug: "bidfluence",
    title: "Bidfluence",
    description:
      "Client project — bidding and influence platform (in active development) built for streamlined proposal and bid workflows.",
    tags: ["SaaS", "Client Work", "Next.js", "TypeScript"],
    href: "https://bidfluence-app.vercel.app",
    image: "/projects/bidfluence-screenshot.png",
    featured: true,
    status: "in-progress",
  },
  {
    slug: "ai-email-sequence-manager",
    title: "AI Email Sequence Manager",
    description:
      "Email sequence management tool that uses AI to draft, organize, and automate multi-step outreach campaigns.",
    tags: ["AI", "Email", "Automation", "Next.js"],
    href: "https://ai-automated-email-manager.vercel.app",
    image: "/projects/ai-email-sequence-manager.png",
    featured: false,
    status: "live",
  },
  {
    slug: "ai-rental-home-finder",
    title: "AI Rental Home Finder",
    description:
      "Uses AI to search and surface rental properties — built around Portland, OR but works for any location you specify.",
    tags: ["AI", "Real Estate", "Search", "Next.js"],
    href: "https://rental-finder-psi.vercel.app",
    image: "/projects/rental-finder-listings-screenshot.png",
    featured: false,
    status: "live",
  },
  {
    slug: "ai-prompt-enhancer",
    title: "AI Prompt Enhancer",
    description:
      "Helps users refine any AI prompt for clearer instructions and better model output — a lightweight tool from an earlier build.",
    tags: ["AI", "Prompting", "Next.js"],
    href: "https://v0-next-js-ai-prompt-enhancer-nine.vercel.app",
    image: "/projects/ai-prompt-enhancer.png",
    featured: false,
    status: "live",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
