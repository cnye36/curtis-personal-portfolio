import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import { featuredProjects } from "@/lib/projects";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "AI / LLMs",
  "PostgreSQL",
  "Vercel",
  "LangChain",
  "Agents SDK",
  "MCP Servers",
  "Agentic Automation",
  "Google Vertex AI",
  "Claude Code",
  "Codex"
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-5">
                Developer &amp; AI Builder
              </p>
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-zinc-50 leading-none mb-6">
                Hi, I&apos;m
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Curtis Nye.
                </span>
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
                I build AI-powered products and automation tools that help
                businesses move faster. Currently creating{" "}
                <a
                  href="https://affinitybots.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-100 hover:text-violet-400 transition-colors underline underline-offset-2"
                >
                  AffinityBots
                </a>{" "}
                — an intelligent automation platform for modern teams.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-500 transition-colors"
                >
                  View My Work
                </Link>
                <a
                  href="mailto:cnye@ai-automatedhq.com"
                  className="px-6 py-3 border-2 border-zinc-700 text-zinc-100 font-semibold rounded-full hover:border-violet-500 hover:text-violet-400 transition-colors"
                >
                  Get In Touch
                </a>
                <SocialLinks />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-indigo-600/40 rounded-3xl rotate-3" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800">
                  <Image
                    src="/Curtis-headshot-2026.png"
                    alt="Curtis Nye"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-2">
                What I&apos;ve Built
              </p>
              <h2 className="text-4xl font-black text-zinc-50 tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-zinc-500 hover:text-violet-400 transition-colors"
            >
              All Projects →
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">Projects coming soon.</p>
          )}
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-2">
                About Me
              </p>
              <h2 className="text-4xl font-black text-zinc-50 tracking-tight mb-6">
                Builder at heart.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I&apos;m a developer focused on building AI-powered products
                that solve real problems. I love the intersection of software
                engineering and artificial intelligence — finding ways to put
                LLMs and automation to work in products people actually use.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Whether it&apos;s a full SaaS product, an internal tool, or a
                quick automation, I care about shipping fast and building things
                that last. Always learning, always building.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "AI", label: "Primary Focus" },
                { value: "SaaS", label: "What I Build" },
                { value: "Full", label: "Stack Dev" },
                { value: "↗", label: "Always Shipping" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-black text-violet-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────── */}
      <section id="contact" className="py-24 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-zinc-50 tracking-tight mb-6">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              great.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Open to freelance projects, full-time roles, and interesting
            conversations. Don&apos;t hesitate to reach out.
          </p>
          <a
            href="mailto:cnye@ai-automatedhq.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-500 transition-colors text-lg"
          >
            cnye@ai-automatedhq.com →
          </a>
        </div>
      </section>
    </>
  );
}
