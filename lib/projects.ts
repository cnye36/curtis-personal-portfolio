export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
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
    featured: true,
    status: "live",
  },
  // Add more projects here
];

export const featuredProjects = projects.filter((p) => p.featured);
