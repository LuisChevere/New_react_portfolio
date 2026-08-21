import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./compotents/Projects";
import Skills from "./compotents/Skills";
import About from "./compotents/About";
import Footer from "./compotents/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
