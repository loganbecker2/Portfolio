import React from "react";
import Page from "../components/Page";
import { SITE } from "../data/site";

export default function Contact() {
  return (
    <Page title="Contact" subtitle="Fastest way to reach me is email.">
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-900 dark:bg-neutral-950 sm:p-10">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Email:
          <a className="ml-2 font-semibold text-neutral-900 hover:text-neutral-700 dark:text-white dark:hover:text-neutral-200" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800" href={`mailto:${SITE.email}`}>
            Email Me
          </a>
          <a className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50
                        dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
             href={SITE.links.linkedin}>
            LinkedIn
          </a>
          <a className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50
                        dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
             href={SITE.links.github}>
            GitHub
          </a>
        </div>
      </div>
    </Page>
  );
}
