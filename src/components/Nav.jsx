import React from "react";
import { NavLink } from "react-router-dom";

const YOUR_NAME = "emily hua";

const NAV_LINKS = [
  { label: "introduction", to: "/" },
  { label: "experience", to: "/experience" },
  { label: "art", to: "/art" },
  { label: "content", to: "/content" },
];

// dark: true = white text (for use over a photo/dark hero)
// dark: false = black text (for use on plain white pages)
export default function Nav({ dark = false }) {
  const base = dark ? "text-white/80" : "text-[#8a8983]";
  const nameColor = dark ? "text-white" : "text-[#1a1a1a]";

  return (
    <div className="flex items-start justify-between p-6 md:p-10">
      <NavLink to="/" className={`text-sm md:text-base font-medium lowercase tracking-tight ${nameColor}`}>
        {YOUR_NAME}
      </NavLink>
      <nav className="flex flex-col items-end gap-1 text-sm lowercase">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `transition-colors hover:text-[#E1417A] ${
                isActive ? "text-[#E1417A]" : base
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
