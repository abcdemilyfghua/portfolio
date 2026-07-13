import React, { useEffect, useRef } from "react";

// ---------------------------------------------------------------------
// EDIT ME
// ---------------------------------------------------------------------
const WORD = "EMILY";

// Shown by default (no hover) in the space below the letters.
const WELCOME_MESSAGE =
  "hi, i'm emily. welcome to my little corner of the internet. i'm so happy you are here.";

// One sentence per letter — shown while that letter is hovered.
const SENTENCES = {
  E: "an engineer chasing curiosity across code, the chattahoochee, and cities i haven't seen yet.",
  M: "a mirror of the people who learn alongside and inspire me, known and unknown alike.",
  I: "an innovator who turns ordinary afternoons into baked goods, playlists, and songs on the violin.",
  L: "a lover of my best friends, the earth, and the small, beautiful, overlooked things.",
  Y: "a yet-unfinished version of who i'm becoming, always learning, always in motion.",
};
// ---------------------------------------------------------------------

const POOL = ["{", "}", "0", "(", ")", "%", "#", "*", "/", "+", "1"];
const BG_COLOR = "#d3d0c5";
const PINK = "#e22869";
const ACTIVE = "#7a1030";
const STEP = 13;
const CELL_FONT_SIZE = 15;

export default function EmilyHero() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let ambientInterval;
    let cleanupFns = [];
    let built = false;

    function build() {
      const stageW = stage.clientWidth;
      const stageH = stage.clientHeight;
      if (stageW < 50 || stageH < 50) return;

      clearInterval(ambientInterval);
      cleanupFns.forEach((fn) => fn());
      cleanupFns = [];
      stage.innerHTML = "";
      built = true;

      const cols = Math.floor(stageW / STEP);
      const rows = Math.floor(stageH / STEP);

      // vertical offset where the word starts (used to preserve current position)
      const OFFSET_TOP_RATIO = 0.12;
      const offsetY = stageH * OFFSET_TOP_RATIO;
      const offsetRow = Math.round(offsetY / STEP);

      const canvas = document.createElement("canvas");
      canvas.width = stageW;
      const letterAreaHeight = stageH * 0.5;
      canvas.height = letterAreaHeight;
      const ctx = canvas.getContext("2d");
      const fontSize = Math.min(letterAreaHeight * 0.9, stageW * 0.24);
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillStyle = "#000";
      ctx.textBaseline = "middle";

      const gap = fontSize * 0.14;
      const letterWidths = WORD.split("").map((l) => ctx.measureText(l).width);
      const totalWidth =
        letterWidths.reduce((a, b) => a + b, 0) + gap * (WORD.length - 1);
      let cursorX = (stageW - totalWidth) / 2;

      const bounds = {};
      WORD.split("").forEach((letter, i) => {
        ctx.fillText(letter, cursorX, letterAreaHeight / 2);
        bounds[letter] = [cursorX - 4, cursorX + letterWidths[i] + 4];
        cursorX += letterWidths[i] + gap;
      });

      const letterRowsEnd = offsetRow + Math.ceil(letterAreaHeight / STEP);
      const letterCells = {};
      WORD.split("").forEach((l) => (letterCells[l] = []));
      const grid = {};

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = c * STEP;
          const py = r * STEP;
          let isLetter = false;
          let letterKey = null;
          if (r >= offsetRow && r < letterRowsEnd) {
            const canvasY = py - offsetY;
            const d = ctx.getImageData(px, canvasY, 1, 1).data;
            if (d[3] > 100) {
              isLetter = true;
              for (const k in bounds) {
                if (px >= bounds[k][0] && px < bounds[k][1]) letterKey = k;
              }
            }
          }
          const span = document.createElement("span");
          span.textContent = POOL[Math.floor(Math.random() * POOL.length)];
          span.style.position = "absolute";
          span.style.left = px + "px";
          span.style.top = py + "px";
          span.style.fontSize = CELL_FONT_SIZE + "px";
          span.style.fontFamily = "monospace";
          span.style.color = isLetter ? PINK : BG_COLOR;
          span.style.fontWeight = isLetter ? "600" : "normal";
          span.style.transition = "color 0.2s";
          span.style.userSelect = "none";
          stage.appendChild(span);
          const cellObj = { el: span, isLetter, r, c, timer: null, busy: false };
          grid[r + "," + c] = cellObj;
          if (isLetter && letterKey) letterCells[letterKey].push(cellObj);
        }
      }

      ambientInterval = setInterval(() => {
        for (let i = 0; i < 45; i++) {
          const r2 = Math.floor(Math.random() * rows);
          const c2 = Math.floor(Math.random() * cols);
          const cell = grid[r2 + "," + c2];
          if (cell && !cell.isLetter && !cell.busy) {
            cell.el.textContent = POOL[Math.floor(Math.random() * POOL.length)];
          }
        }
      }, 150);

      function clearCellTimer(cell) {
        if (cell.timer) {
          clearInterval(cell.timer);
          cell.timer = null;
        }
      }

      function wrapSentence(sentence, maxCols) {
        const words = sentence.split(" ");
        const lines = [""];
        words.forEach((w) => {
          if (w.length > maxCols) {
            if (lines[lines.length - 1] !== "") lines.push("");
            for (let i = 0; i < w.length; i += maxCols) {
              lines.push(w.slice(i, i + maxCols));
            }
            lines.push("");
            return;
          }
          const test = lines[lines.length - 1] + (lines[lines.length - 1] ? " " : "") + w;
          if (test.length > maxCols) lines.push(w);
          else lines[lines.length - 1] = test;
        });
        return lines.filter((l) => l.length > 0).map((l) => l.slice(0, maxCols));
      }

      let currentMessageCells = [];

      function revealText(text) {
        const toClear = currentMessageCells;
        toClear.forEach((cell) => {
          clearCellTimer(cell);
          cell.busy = false;
          cell.el.style.color = BG_COLOR;
          cell.el.textContent = POOL[Math.floor(Math.random() * POOL.length)];
        });

        const maxCols = Math.max(8, Math.floor((totalWidth * 0.88) / STEP));
        const lines = wrapSentence(text, maxCols);
        const startRow = letterRowsEnd + 3;
        const targets = [];
        lines.forEach((line, li) => {
          const startCol = Math.round((cols - line.length) / 2);
          const row = startRow + li * 3;
          for (let i = 0; i < line.length; i++) {
            if (line[i] === " ") continue;
            const col = startCol + i;
            const cell = grid[row + "," + col];
            if (cell && !cell.isLetter) targets.push({ cell, ch: line[i], col });
          }
        });
        if (targets.length === 0) return;

        const colsUsed = targets.map((t) => t.col);
        const minCol = Math.min(...colsUsed);
        const maxColUsed = Math.max(...colsUsed);
        const spanW = maxColUsed - minCol || 1;

        currentMessageCells = targets.map((t) => t.cell);
        targets.forEach((t) => {
          const cell = t.cell;
          cell.busy = true;
          const delay = ((t.col - minCol) / spanW) * 600;
          const to = setTimeout(() => {
            let ticks = 0;
            clearCellTimer(cell);
            cell.timer = setInterval(() => {
              ticks++;
              cell.el.style.color = PINK;
              if (ticks < 5) {
                cell.el.textContent = POOL[Math.floor(Math.random() * POOL.length)];
              } else {
                cell.el.textContent = t.ch;
                clearCellTimer(cell);
              }
            }, 40);
          }, delay);
          cleanupFns.push(() => clearTimeout(to));
        });
      }

      revealText(WELCOME_MESSAGE);

      WORD.split("").forEach((letter) => {
        const b = bounds[letter];
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.left = b[0] + "px";
        overlay.style.top = offsetY + "px";
        overlay.style.width = b[1] - b[0] + "px";
        overlay.style.height = letterAreaHeight + "px";
        overlay.style.cursor = "pointer";
        stage.appendChild(overlay);

        function onEnter() {
          letterCells[letter].forEach((cell) => {
            cell.el.style.color = ACTIVE;
          });
          revealText(SENTENCES[letter]);
        }
        function onLeave() {
          letterCells[letter].forEach((cell) => {
            cell.el.style.color = PINK;
          });
          revealText(WELCOME_MESSAGE);
        }
        overlay.addEventListener("mouseenter", onEnter);
        overlay.addEventListener("mouseleave", onLeave);
        cleanupFns.push(() => {
          overlay.removeEventListener("mouseenter", onEnter);
          overlay.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    build();

    let debounceTimer;
    const observer = new ResizeObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(build, built ? 200 : 0);
    });
    observer.observe(stage);

    return () => {
      clearInterval(ambientInterval);
      clearTimeout(debounceTimer);
      cleanupFns.forEach((fn) => fn());
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F2F1ED]">
      <div ref={stageRef} className="absolute inset-0" />
    </section>
  );
}
