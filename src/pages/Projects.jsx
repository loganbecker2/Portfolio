import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { PROJECTS } from "../data/site";

export default function Projects() {
  return (
    <Page
      title="Projects"
      subtitle="Data, systems, and apps—written like case studies so recruiters can understand what you actually did."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                       dark:border-neutral-900 dark:bg-neutral-950"
          >
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{p.short}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
