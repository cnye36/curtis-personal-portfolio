import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-6 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-violet-600 transition-colors">
          {project.title}
        </h3>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ml-3 ${
            project.status === "live"
              ? "bg-emerald-50 text-emerald-600"
              : project.status === "in-progress"
                ? "bg-amber-50 text-amber-600"
                : "bg-zinc-100 text-zinc-500"
          }`}
        >
          {project.status === "live"
            ? "● Live"
            : project.status === "in-progress"
              ? "◐ Building"
              : "Archived"}
        </span>
      </div>

      <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full"
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
          className="text-sm font-semibold text-zinc-900 hover:text-violet-600 transition-colors"
        >
          Visit Site →
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
