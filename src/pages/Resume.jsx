import React from "react";
import Page from "../components/Page";

export default function Resume() {
  const pdfUrl = `${import.meta.env.BASE_URL}Logan_Becker_Resume.pdf`;

  return (
    <Page
      title="Logan Becker's Resume"
      subtitle="View my resume below or download a copy."
    >
      {/* Download Button */}
      <div className="mb-6 flex gap-3">
        <a
          href={pdfUrl}
          download
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Download Resume
        </a>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-900">
        <iframe
          src={pdfUrl}
          title="Resume PDF"
          className="w-full h-[85vh]"
        />
      </div>
    </Page>
  );
}