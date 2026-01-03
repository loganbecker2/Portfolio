import React from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../components/Page";
import { PROJECTS } from "../data/site";

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-900 dark:bg-neutral-950">
      <p className="text-sm font-semibold text-neutral-900 dark:text-white">{title}</p>
      <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Page title="Project not found" subtitle="That slug doesn’t match any project yet.">
        <Link className="text-sm font-semibold text-neutral-900 dark:text-white" to="/projects">
          ← Back to Projects
        </Link>
      </Page>
    );
  }

  return (
    <Page title={project.title} subtitle={project.short}>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card title="Impact">
          <ul className="list-disc space-y-2 pl-5">
            {project.impact.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </Card>

        <div className="lg:col-span-2 grid gap-6">
          <Card title="What I built">
            <ul className="list-disc space-y-2 pl-5">
              {project.bullets.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Card>

          <Card title="Links">
            <div className="flex flex-wrap gap-3">
              {project.links.repo && (
                <a className="font-semibold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200" href={project.links.repo}>
                  Repo →
                </a>
              )}
              {project.links.demo && (
                <a className="font-semibold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200" href={project.links.demo}>
                  Demo →
                </a>
              )}
            </div>
          </Card>

          <Link className="text-sm font-semibold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200" to="/projects">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </Page>
  );
}
