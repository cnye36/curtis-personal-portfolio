import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/30 transition-all duration-300">
      <div className="relative aspect-[16/10] bg-zinc-700 border-b border-zinc-800 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} homepage screenshot`}
          fill
          className="object-contain object-top group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-zinc-50 group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <span
            className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ml-3 ${
              project.status === "live"
                ? "bg-emerald-950 text-emerald-400"
                : project.status === "in-progress"
                  ? "bg-amber-950 text-amber-400"
                  : "bg-zinc-800 text-zinc-500"
            }`}
          >
            {project.status === "live"
              ? "● Live"
              : project.status === "in-progress"
                ? "◐ Building"
                : "Archived"}
          </span>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-zinc-100 hover:text-violet-400 transition-colors"
          >
            Visit Site →
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
