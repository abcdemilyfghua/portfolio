import React, { useState, useEffect } from "react";
import Nav from "../components/Nav.jsx";
import EmilyHero from "../components/EmilyHero.jsx";

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
  [
    "an ",
    { text: "engineer", highlight: true },
    " chasing curiosity across code, the chattahoochee, and cities I haven't seen yet.",
  ],
  [
    "an ",
    { text: "innovator", highlight: true },
    " who turns ordinary afternoons into baked goods, playlists, and songs on the violin.",
  ],
  [
    "a ",
    { text: "reflection", highlight: true },
    " of the people who learn alongside and inspire me, known and unknown alike.",
  ],
  [
    "an ",
    { text: "admirer", highlight: true },
    " of my best friends, the earth, and the small, beautiful, overlooked things.",
  ],
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

// One column, a single identity line — the noun right after "a/an" renders in pink.
function IdentityColumn({ parts }) {
  return (
    <p className="text-sm text-[#3a3a37] leading-relaxed lowercase">
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <React.Fragment key={i}>{part}</React.Fragment>
        ) : (
          <span key={i} className="text-[#E1417A]">
            {part.text}
          </span>
        )
      )}
    </p>
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
    <section className="bg-[#F2F1ED] px-6 md:px-10 py-10 md:py-14 min-h-screen flex flex-col">
      <Nav />
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* headshot + bio + info, full width, on top */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mb-10 md:mb-12">
          <img
            ref={imgRef}
            src={HEADSHOT}
            alt={YOUR_NAME}
            className={`w-32 md:w-44 aspect-[4/5] object-cover shrink-0 transition-all duration-1000 ${
              inView ? "grayscale-0" : "grayscale"
            }`}
          />
          <div>
            <p className="text-base md:text-lg text-[#3a3a37] leading-relaxed lowercase mb-3">
              {BIO.intro}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
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

        {/* four identity-line columns, below */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {COLUMNS.map((parts, idx) => (
            <IdentityColumn key={idx} parts={parts} />
          ))}
        </div>
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
        <EmilyHero />
        <AboutSection />
      </div>
    </div>
  );
}
