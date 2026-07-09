import React from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your real experience
const EXPERIENCE = [
  {
    role: "product designer",
    org: "acme labs",
    dates: "2025 — present",
    description:
      "designing core product flows for a seed-stage startup, from early concept through shipped feature.",
  },
  {
    role: "design intern",
    org: "some agency",
    dates: "summer 2024",
    description:
      "worked across three client brands, focused on brand identity and web design.",
  },
  {
    role: "teaching assistant, intro to design",
    org: "your university",
    dates: "2023 — 2024",
    description:
      "led weekly studio sessions for 40 students, gave feedback on process and critique.",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <Nav />
      <section className="px-6 md:px-10 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold lowercase mb-10 text-[#1a1a1a]">experience</h1>
        <div className="space-y-10">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 border-t border-[#dedcd4] pt-6">
              <span className="text-xs text-[#E1417A] font-mono uppercase tracking-wide">
                {job.dates}
              </span>
              <div>
                <h2 className="text-sm font-semibold lowercase text-[#1a1a1a]">
                  {job.role} <span className="text-[#8a8983] font-normal">· {job.org}</span>
                </h2>
                <p className="text-sm text-[#5c5b56] leading-relaxed lowercase mt-2">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
