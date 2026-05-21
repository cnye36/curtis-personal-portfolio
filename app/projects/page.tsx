import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Curtis Nye",
  description: "Projects and work by Curtis Nye — AI tools, SaaS products, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Work
          </p>
          <h1 className="text-6xl font-black text-zinc-50 tracking-tight mb-6">
            Projects
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Things I&apos;ve built — from AI automation platforms to developer
            tools. Always shipping, always learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-24 text-zinc-500">
            <p className="text-lg">Projects coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
