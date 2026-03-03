import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
        <Route path="/Portfolio/projects/:slug" element={<ProjectDetail />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
        <Route path="/Portfolio/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </div>
  );
}
