import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";

export default function NavLink({ to, children }) {
  return (
    <RRNavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm font-semibold transition",
          isActive
            ? "text-neutral-900 dark:text-white"
            : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
        ].join(" ")
      }
    >
      {children}
    </RRNavLink>
  );
}
