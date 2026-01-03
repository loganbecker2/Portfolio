import React from "react";
import { SITE } from "../data/site";

const HOME = import.meta.env.BASE_URL;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        
        {/* LOGO / HOME */}
        <a
          href={HOME}
          className="font-semibold tracking-tight text-neutral-900"
        >
          {SITE.name}
        </a>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm">
          <a href={`${HOME}projects`} className="hover:underline">
            Projects
          </a>
          <a href={`${HOME}writing`} className="hover:underline">
            Writing
          </a>
          <a href={`${HOME}contact`} className="hover:underline">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}
