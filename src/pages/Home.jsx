import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your own photos, bio, and links
const YOUR_NAME = "jordan lee";

const HERO_IMAGES = [
  "https://picsum.photos/seed/portfolio1/1600/500",
  "https://picsum.photos/seed/portfolio2/1600/500",
  "https://picsum.photos/seed/portfolio3/1600/500",
];

const HEADSHOT = "https://picsum.photos/seed/headshotxx/500/620";

const BIO = {
  intro:
    "twenty-three, based in new york. building things at the intersection of design and code.",
  email: "jordan@example.com",
  elsewhere: [
    { label: "instagram", href: "#" },
    { label: "github", href: "#" },
    { label: "linkedin", href: "#" },
  ],
};

const COLUMNS = [
  {
    title: "what i'm up to",
    items: [
      "learning to build things end to end, from design to production",
      "mentoring first-gen students trying to break into tech",
      "slowly writing a longer piece about craft and taste",
      [
        "designing at a ",
        { text: "seed-stage startup", href: "https://mystartup.com" },
        " in sf, shipping features weekly",
      ],
    ],
  },
  {
    title: "what i think about",
    items: [
      "how tools shape the way people think, not just what they make",
      "what it means to build software that respects people's time",
      "the gap between technically impressive and actually useful",
      "how small teams can move like they're much bigger",
    ],
  },
  {
    title: "what i like to create",
    items: [
      "short films on weekends, mostly about people and place",
      "a newsletter about design decisions, one per month",
      "side projects that never quite ship, and that's ok",
      "playlists for very specific moods",
    ],
  },
];

function TypewriterIntro({ onDone }) {
  const [typed, setTyped] = useState("");
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(YOUR_NAME.slice(0, i));
      if (i >= YOUR_NAME.length) {
        clearInterval(typeInterval);
        setTimeout(() => setLeaving(true), 650);
        setTimeout(() => onDone(), 1250);
      }
    }, 110);
    return () => clearInterval(typeInterval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-2xl md:text-3xl tracking-tight text-black font-medium lowercase">
        {typed}
        <span className="inline-block w-[2px] h-6 md:h-7 bg-black ml-1 align-middle animate-pulse" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 flex flex-col">
        {HERO_IMAGES.map((src, idx) => (
          <div key={idx} className="flex-1 relative overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10">
        <Nav dark />
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <span className="text-white/70 text-xs lowercase tracking-widest animate-bounce">
          scroll
        </span>
      </div>
    </section>
  );
}

function ItemContent({ item }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      {item.map((part, i) =>
        typeof part === "string" ? (
          <React.Fragment key={i}>{part}</React.Fragment>
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black text-neutral-900"
          >
            {part.text}
          </a>
        )
      )}
    </>
  );
}

function NumberedColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-sm md:text-base mb-4 lowercase">{title}</h3>
      <ol className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-neutral-700 leading-relaxed">
            <span className="text-neutral-400 font-mono text-xs pt-0.5 shrink-0">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="lowercase">
              <ItemContent item={item} />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-10 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[220px_repeat(3,1fr)] gap-10 md:gap-8 max-w-6xl mx-auto">
        <div>
          <img src={HEADSHOT} alt={YOUR_NAME} className="w-full aspect-[4/5] object-cover grayscale mb-5" />
          <p className="text-sm text-neutral-700 leading-relaxed lowercase mb-4">{BIO.intro}</p>
          <p className="text-sm text-neutral-500 mb-6">{BIO.email}</p>
          <h4 className="font-semibold text-sm mb-2 lowercase">find me elsewhere</h4>
          <ul className="space-y-1">
            {BIO.elsewhere.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-neutral-700 underline underline-offset-2 hover:text-black lowercase">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        {COLUMNS.map((col) => (
          <NumberedColumn key={col.title} title={col.title} items={col.items} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div>
      {!introDone && <TypewriterIntro onDone={() => setIntroDone(true)} />}
      <div className={`transition-opacity duration-700 ${introDone ? "opacity-100" : "opacity-0"}`}>
        <Hero />
        <AboutSection />
      </div>
    </div>
  );
}
