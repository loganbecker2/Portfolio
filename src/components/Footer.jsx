import React from "react";
import Container from "./Container";
import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-900">
      <Container>
        <div className="flex flex-col gap-2 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" href={SITE.links.github}>
              GitHub
            </a>
            <a className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" href={SITE.links.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
