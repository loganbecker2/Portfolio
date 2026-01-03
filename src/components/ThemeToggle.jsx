import React from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50
                 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
