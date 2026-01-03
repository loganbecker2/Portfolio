import React from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "../data/site";

// Vite-aware base URL ("/" locally, "/Portfolio/" on GitHub Pages)
const HOME = import.meta.env.BASE_URL;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur
                       dark:border-neutral-900/70 dark:bg-neutral-950/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO / HOME */}
          <div className="flex items-center gap-4">
            <a
              href={HOME}
              className="font-semibold tracking-tight text-neutral-900 dark:text-white"
            >
              {SITE.name}
            </a>
            <span className="hidden text-xs text-neutral-500 dark:text-neutral-400 sm:inline">
              {SITE.role}
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-6 sm:flex">
            <a href={HOME} className="text-sm font-semibold hover:underline">
              Home
            </a>
            <a href={`${HOME}projects`} className="text-sm font-semibold hover:underline">
              Projects
            </a>
            <a href={`${HOME}contact`} className="text-sm font-semibold hover:underline">
              Contact
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-xl border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50
                         dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900 sm:inline"
              href={SITE.links.resume}
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

        </div>
      </Container>
    </header>
  );
}
