import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { SITE, PROJECTS, SKILLS } from "../data/site";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700
                     dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <Page
      title={SITE.role}
      subtitle={SITE.tagline}
    >
      {/* Hero card */}
      <div className="rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-8
                      dark:border-neutral-900 dark:from-neutral-950 dark:to-neutral-900/30 sm:p-10">
        <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{SITE.location}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {SITE.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-900 dark:bg-neutral-950">
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">{h.label}</p>
              <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">{h.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            href={`mailto:${SITE.email}`}
          >
            Email Me
          </a>
          <a
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
            href={SITE.links.resume}
          >
            Resume
          </a>
          <Link
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
            to="/projects"
          >
            Projects →
          </Link>
        </div>
      </div>

      {/* Featured projects */}
      <div className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Click one for a detailed case-study page.</p>
          </div>
          <Link className="text-sm font-semibold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200" to="/projects">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                         dark:border-neutral-900 dark:bg-neutral-950"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{p.short}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Skills Snapshot</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-900 dark:bg-neutral-950">
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((x) => <Pill key={x}>{x}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
