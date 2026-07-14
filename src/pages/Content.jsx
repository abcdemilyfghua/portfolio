import React from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your real posts/newsletter entries
const POSTS = [
  {
    title: "first post",
    date: "july 2026",
    excerpt: "coming soon",
    href: "#",
  },
];

export default function Content() {
  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <Nav />
      <section className="px-6 md:px-10 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold lowercase mb-10 text-[#1a1a1a]">content</h1>
        <div className="space-y-8">
          {POSTS.map((post, idx) => (
            <a
              key={idx}
              href={post.href}
              className="block border-t border-[#dedcd4] pt-6 group"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold lowercase text-[#1a1a1a] group-hover:text-[#E1417A] group-hover:underline underline-offset-2">
                  {post.title}
                </h2>
                <span className="text-xs text-[#E1417A] font-mono shrink-0">{post.date}</span>
              </div>
              <p className="text-sm text-[#5c5b56] leading-relaxed lowercase mt-2">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
