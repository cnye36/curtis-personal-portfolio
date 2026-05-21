import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-500 py-8 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {year} Curtis Nye. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <SocialLinks variant="text" />
          <a
            href="mailto:cnye@ai-automatedhq.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
