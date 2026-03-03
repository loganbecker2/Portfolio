import React from "react";
import { SITE } from "../data/site";

export default function EmailReveal() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const wrapperRef = React.useRef(null);
  const HOME = import.meta.env.BASE_URL;

  // Close when clicking outside OR pressing Escape
  React.useEffect(() => {
    if (!open) return;

    function onPointerDown(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // If clipboard API is blocked, you could add a fallback later.
    }
  }

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Email Me
      </button>

      {open && (
        <div
          className="absolute left-0 mt-3 w-72 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg
                     dark:border-neutral-800 dark:bg-neutral-950"
          role="dialog"
          aria-label="Email options"
        >
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            Email
          </p>

          <div className="mt-2 flex items-center justify-between gap-2">
            <code
              className="truncate rounded-lg bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-800
                         dark:bg-neutral-900 dark:text-neutral-100"
              title={SITE.email}
            >
              {SITE.email}
            </code>

            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg border border-neutral-200 px-2 py-1 text-xs font-semibold
                         hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="mt-3 text-xs">
            <a
            href={`${HOME}contact`}
            className="text-sm font-semibold text-neutral-600 hover:text-neutral-900
                        dark:text-neutral-300 dark:hover:text-white transition"
            >
            Get in touch →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}