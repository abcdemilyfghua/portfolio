import React, { useState } from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: swap for your real photos. Add as many as you want —
// all three grid sizes pull from this same list.
const PHOTOS = Array.from({ length: 24 }, (_, i) => ({
  src: `https://picsum.photos/seed/art${i}/900/1100`,
  alt: `photo ${i + 1}`,
}));

// Config per size: how many columns, and the aspect ratio for each tile.
const SIZE_CONFIG = {
  S: { cols: "grid-cols-4 md:grid-cols-8", aspect: "aspect-square", gap: "gap-1" },
  M: { cols: "grid-cols-2 md:grid-cols-4", aspect: "aspect-[3/4]", gap: "gap-2" },
  L: { cols: "grid-cols-1", aspect: "aspect-auto", gap: "gap-8" },
};

function SizeToggle({ size, setSize }) {
  return (
    <div className="flex items-center gap-3 text-sm lowercase">
      {["S", "M", "L"].map((s) => (
        <button
          key={s}
          onClick={() => setSize(s)}
          className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${
            size === s
              ? "bg-[#E1417A] text-white"
              : "text-[#8a8983] hover:text-[#E1417A]"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export default function Art() {
  const [size, setSize] = useState("M");
  const config = SIZE_CONFIG[size];

  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <Nav />

      <section className="px-6 md:px-10 pb-4 flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-lg font-semibold lowercase text-[#1a1a1a]">art</h1>
        <SizeToggle size={size} setSize={setSize} />
      </section>

      <section className="px-6 md:px-10 pb-16 max-w-6xl mx-auto">
        <div className={`grid ${config.cols} ${config.gap}`}>
          {PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className={`overflow-hidden ${config.aspect} ${
                size === "L" ? "max-w-2xl mx-auto w-full" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

