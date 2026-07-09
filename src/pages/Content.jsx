import React from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your real posts/newsletter entries
const POSTS = [
  {
    title: "on taste as a design skill",
    date: "june 2026",
    excerpt: "what separates a good decision from a defensible one, and why it's rarely about the tool.",
    href: "#",
  },
  {
    title: "shipping the boring version first",
    date: "april 2026",
    excerpt: "notes on why the unglamorous mvp usually teaches you more than the polished one.",
    href: "#",
  },
  {
    title: "a year of side projects that didn't ship",
    date: "january 2026",
    excerpt: "what i learned anyway, and why i'm not calling it wasted time.",
    href: "#",
  },
];

export default function Content() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <section className="px-6 md:px-10 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold lowercase mb-10">content</h1>
        <div className="space-y-8">
          {POSTS.map((post, idx) => (
            <a
              key={idx}
              href={post.href}
              className="block border-t border-neutral-200 pt-6 group"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold lowercase group-hover:underline underline-offset-2">
                  {post.title}
                </h2>
                <span className="text-xs text-neutral-400 font-mono shrink-0">{post.date}</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed lowercase mt-2">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
