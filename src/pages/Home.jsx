import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your own photos, bio, and links
const YOUR_NAME = "emily hua";

const HERO_IMAGES = [
  "images/home1.jpeg",
  "images/home2.jpeg",
  "images/home3.jpeg",
];

const HEADSHOT = "images/headshot.jpeg";

const BIO = {
  intro:
    "eighteen, based in atlanta. chasing beauty, people, and good stories.",
  email: "ehua6@gatech.edu",
  elsewhere: [
    { label: "instagram", href: "https://www.instagram.com/smileswithemily/" },
    { label: "youtube", href: "https://www.youtube.com/@abcdemilyfghua" },
    { label: "github", href: "https://github.com/abcdemilyfghua" },
    { label: "linkedin", href: "https://www.linkedin.com/in/emilyhua27/" },
  ],
};

const COLUMNS = [
  {
    title: "what i'm up to",
    items: [
      "studying computer science as a rising sophomore at georgia tech",
      "rowing with the club team on the chattahoochee, my first season and already hooked on the sport, the coaches, and the people",
      "serving as vp internal for gt international ambassadors, a culture org supporting international students, planning formals and retreats to keep the club close-knit",
      "spending the summer in the bay area, researching software history with the computer history museum's software preservation group",
      "traveling through europe with my sister: vienna for my cousin's wedding, then paris and london",
      "running, walking my dog, and cooking something new in between",
    ],
  },
  {
    title: "what i think about",
    items: [
      "the small beautiful things, and how much there is to be amazed by if you're paying attention",
      "how much story lives inside every person you pass, and how fast a stranger becomes a best friend",
      "how much knowledge is at our fingertips right now, from google and ai to a good book",
      "whatever i'm reading or watching: right now, tomorrow and tomorrow and tomorrow and the glass castle",
      "my own patterns, journaling my way toward understanding who i am and who i'm becoming",
    ],
  },
  {
    title: "what i like to create",
    items: [
      "photos, an absurd number of them, each one a small souvenir of a moment",
      "playlists and albums on spotify, one of my favorite ways to spend an afternoon",
      "music on violin, my longest love, plus piano, flute, and now guitar",
      "short films and vlogs, including the hype video i edited for my rowing team",
      "paintings, doodles, and friendship bracelets",
      "baked goods, mostly for the people (and dog) i love",
      "writing, mostly journaling for now, a blog is next",
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F2F1ED] transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-2xl md:text-3xl tracking-tight text-[#1a1a1a] font-medium lowercase">
        {typed}
        <span className="inline-block w-[2px] h-6 md:h-7 bg-[#E1417A] ml-1 align-middle animate-pulse" />
      </div>
    </div>
  );
}

function Hero() {
  // Pick one photo at random each time the page loads.
  const [heroImg] = useState(
    () => HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="relative z-10">
        <Nav dark />
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
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
            className="underline underline-offset-2 hover:text-[#E1417A] text-[#1a1a1a]"
          >
            {part.text}
          </a>
        )
      )}
    </>
  );
}

// Renders a column's items as one flowing paragraph instead of a numbered list —
// each item becomes a sentence, joined with periods.
function JournalEntry({ title, items }) {
  return (
    <div className="border-t border-[#dedcd4] py-8 md:py-10">
      <p className="text-xs uppercase tracking-widest text-[#E1417A] mb-3">{title}</p>
      <p className="text-base md:text-lg text-[#3a3a37] leading-relaxed lowercase max-w-3xl">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ItemContent item={item} />
            {idx < items.length - 1 ? ". " : "."}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

function AboutSection() {
  const imgRef = React.useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.4 } // fires once 40% of the image is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F2F1ED] px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* intro band: small round headshot beside bio, full width, no side grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center mb-4">
          <img
            ref={imgRef}
            src={HEADSHOT}
            alt={YOUR_NAME}
            className={`w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shrink-0 transition-all duration-1000 ${
              inView ? "grayscale-0" : "grayscale"
            }`}
          />
          <div>
            <p className="text-base md:text-lg text-[#3a3a37] leading-relaxed lowercase mb-3">
              {BIO.intro}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span className="text-[#8a8983]">{BIO.email}</span>
              {BIO.elsewhere.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#3a3a37] underline underline-offset-2 hover:text-[#E1417A] lowercase"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* stacked full-width journal entries, no numbers, no columns */}
        {COLUMNS.map((col) => (
          <JournalEntry key={col.title} title={col.title} items={col.items} />
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
