import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Art from "./pages/Art.jsx";
import Content from "./pages/Content.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/art" element={<Art />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  );
}