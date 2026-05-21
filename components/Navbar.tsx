"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-zinc-50 hover:text-violet-400 transition-colors"
        >
          Curtis Nye
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-violet-400 ${
                pathname === link.href ? "text-violet-400" : "text-zinc-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:cnye@ai-automatedhq.com"
            className="text-sm font-semibold px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-zinc-100 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:cnye@ai-automatedhq.com"
            className="text-sm font-semibold px-4 py-2 bg-violet-600 text-white rounded-full text-center hover:bg-violet-500 transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
