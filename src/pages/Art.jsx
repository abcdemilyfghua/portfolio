import React, { useState } from "react";
import Nav from "../components/Nav.jsx";

import photo1 from "../assets/art/photo1.JPG";
import photo2 from "../assets/art/photo2.JPG";
import photo3 from "../assets/art/photo3.JPG";
import photo4 from "../assets/art/photo4.JPG";
import photo5 from "../assets/art/photo5.JPG";
import photo6 from "../assets/art/photo6.JPG";
import photo7 from "../assets/art/photo7.JPG";
import photo8 from "../assets/art/photo8.JPG";
import photo9 from "../assets/art/photo9.JPG";
import photo10 from "../assets/art/photo10.JPG";
import photo11 from "../assets/art/photo11.JPG";
import photo12 from "../assets/art/photo12.JPG";
import photo13 from "../assets/art/photo13.JPG";
import photo14 from "../assets/art/photo14.JPG";
import photo15 from "../assets/art/photo15.JPG";
import photo16 from "../assets/art/photo16.JPG";
import photo17 from "../assets/art/photo17.JPG";
import photo18 from "../assets/art/photo18.JPG";
import photo19 from "../assets/art/photo19.JPG";
import photo20 from "../assets/art/photo20.JPG";
import photo21 from "../assets/art/photo21.JPG";
import photo22 from "../assets/art/photo22.JPG";
import photo23 from "../assets/art/photo23.JPG";
import photo24 from "../assets/art/photo24.JPG";
import photo25 from "../assets/art/photo25.JPG";
import photo26 from "../assets/art/photo26.JPG";
import photo27 from "../assets/art/photo27.JPG";
import photo28 from "../assets/art/photo28.JPG";
import photo29 from "../assets/art/photo29.JPG";
import photo30 from "../assets/art/photo30.JPG";
import photo31 from "../assets/art/photo31.JPG";
import photo32 from "../assets/art/photo32.JPG";
import photo33 from "../assets/art/photo33.JPG";
import photo34 from "../assets/art/photo34.JPG";
import photo35 from "../assets/art/photo35.JPG";
import photo36 from "../assets/art/photo36.JPG";
import photo37 from "../assets/art/photo37.JPG";
import photo38 from "../assets/art/photo38.JPG";
import photo39 from "../assets/art/photo39.JPG";
import photo40 from "../assets/art/photo40.JPG";
import photo41 from "../assets/art/photo41.JPG";
import photo42 from "../assets/art/photo42.JPG";
import photo43 from "../assets/art/photo43.JPG";
import photo44 from "../assets/art/photo44.JPG";
import photo45 from "../assets/art/photo45.JPG";
import photo46 from "../assets/art/photo46.JPG";
import photo47 from "../assets/art/photo47.JPG";
import photo48 from "../assets/art/photo48.JPG";
import photo49 from "../assets/art/photo49.JPG";
import photo50 from "../assets/art/photo50.JPG";
import photo51 from "../assets/art/photo51.JPG";
import photo52 from "../assets/art/photo52.JPG";
import photo53 from "../assets/art/photo53.JPG";
import photo54 from "../assets/art/photo54.JPG";
import photo55 from "../assets/art/photo55.JPG";
import photo56 from "../assets/art/photo56.JPG";
import photo57 from "../assets/art/photo57.JPG";
import photo58 from "../assets/art/photo58.JPG";
import photo59 from "../assets/art/photo59.JPG";
import photo60 from "../assets/art/photo60.JPG";
import photo61 from "../assets/art/photo61.JPG";
import photo62 from "../assets/art/photo62.JPG";
import photo63 from "../assets/art/photo63.JPG";
import photo64 from "../assets/art/photo64.JPG";
import photo65 from "../assets/art/photo65.JPG";
import photo66 from "../assets/art/photo66.JPG";
import photo67 from "../assets/art/photo67.JPG";
import photo68 from "../assets/art/photo68.JPG";
import photo69 from "../assets/art/photo69.JPG";
import photo70 from "../assets/art/photo70.JPG";
import photo71 from "../assets/art/photo71.JPG";
import photo72 from "../assets/art/photo72.JPG";
import photo73 from "../assets/art/photo73.JPG";
import photo74 from "../assets/art/photo74.JPG";
import photo75 from "../assets/art/photo75.JPG";
import photo76 from "../assets/art/photo76.JPG";
import photo77 from "../assets/art/photo77.JPG";
import photo78 from "../assets/art/photo78.JPG";
import photo79 from "../assets/art/photo79.JPG";
import photo80 from "../assets/art/photo80.JPG";
import photo81 from "../assets/art/photo81.JPG";
import photo82 from "../assets/art/photo82.JPG";
import photo83 from "../assets/art/photo83.JPG";
import photo84 from "../assets/art/photo84.JPG";
import photo85 from "../assets/art/photo85.JPG";
import photo86 from "../assets/art/photo86.JPG";
import photo87 from "../assets/art/photo87.JPG";
import photo88 from "../assets/art/photo88.JPG";

// ...
const PHOTOS = [
  { src: photo1, alt: "photo 1" },
  { src: photo2, alt: "photo 2" },
  { src: photo3, alt: "photo 3" },
  { src: photo4, alt: "photo 4" },
  { src: photo5, alt: "photo 5" },
  { src: photo6, alt: "photo 6" },
  { src: photo7, alt: "photo 7" },
  { src: photo8, alt: "photo 8" },
  { src: photo9, alt: "photo 9" },
  { src: photo10, alt: "photo 10" },
  { src: photo11, alt: "photo 11" },
  { src: photo12, alt: "photo 12" },
  { src: photo13, alt: "photo 13" },
  { src: photo14, alt: "photo 14" },
  { src: photo15, alt: "photo 15" },
  { src: photo16, alt: "photo 16" },
  { src: photo17, alt: "photo 17" },
  { src: photo18, alt: "photo 18" },
  { src: photo19, alt: "photo 19" },
  { src: photo20, alt: "photo 20" },
  { src: photo21, alt: "photo 21" },
  { src: photo22, alt: "photo 22" },
  { src: photo23, alt: "photo 23" },
  { src: photo24, alt: "photo 24" },
  { src: photo25, alt: "photo 25" },
  { src: photo26, alt: "photo 26" },
  { src: photo27, alt: "photo 27" },
  { src: photo28, alt: "photo 28" },
  { src: photo29, alt: "photo 29" },
  { src: photo30, alt: "photo 30" },
  { src: photo31, alt: "photo 31" },
  { src: photo32, alt: "photo 32" },
  { src: photo33, alt: "photo 33" },
  { src: photo34, alt: "photo 34" },
  { src: photo35, alt: "photo 35" },
  { src: photo36, alt: "photo 36" },
  { src: photo37, alt: "photo 37" },
  { src: photo38, alt: "photo 38" },
  { src: photo39, alt: "photo 39" },
  { src: photo40, alt: "photo 40" },
  { src: photo41, alt: "photo 41" },
  { src: photo42, alt: "photo 42" },
  { src: photo43, alt: "photo 43" },
  { src: photo44, alt: "photo 44" },
  { src: photo45, alt: "photo 45" },
  { src: photo46, alt: "photo 46" },
  { src: photo47, alt: "photo 47" },
  { src: photo48, alt: "photo 48" },
  { src: photo49, alt: "photo 49" },
  { src: photo50, alt: "photo 50" },
  { src: photo51, alt: "photo 51" },
  { src: photo52, alt: "photo 52" },
  { src: photo53, alt: "photo 53" },
  { src: photo54, alt: "photo 54" },
  { src: photo55, alt: "photo 55" },
  { src: photo56, alt: "photo 56" },
  { src: photo57, alt: "photo 57" },
  { src: photo58, alt: "photo 58" },
  { src: photo59, alt: "photo 59" },
  { src: photo60, alt: "photo 60" },
  { src: photo61, alt: "photo 61" },
  { src: photo62, alt: "photo 62" },
  { src: photo63, alt: "photo 63" },
  { src: photo64, alt: "photo 64" },
  { src: photo65, alt: "photo 65" },
  { src: photo66, alt: "photo 66" },
  { src: photo67, alt: "photo 67" },
  { src: photo68, alt: "photo 68" },
  { src: photo69, alt: "photo 69" },
  { src: photo70, alt: "photo 70" },
  { src: photo71, alt: "photo 71" },
  { src: photo72, alt: "photo 72" },
  { src: photo73, alt: "photo 73" },
  { src: photo74, alt: "photo 74" },
  { src: photo75, alt: "photo 75" },
  { src: photo76, alt: "photo 76" },
  { src: photo77, alt: "photo 77" },
  { src: photo78, alt: "photo 78" },
  { src: photo79, alt: "photo 79" },
  { src: photo80, alt: "photo 80" },
  { src: photo81, alt: "photo 81" },
  { src: photo82, alt: "photo 82" },
  { src: photo83, alt: "photo 83" },
  { src: photo84, alt: "photo 84" },
  { src: photo85, alt: "photo 85" },
  { src: photo86, alt: "photo 86" },
  { src: photo87, alt: "photo 87" },
  { src: photo88, alt: "photo 88" },
];

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

