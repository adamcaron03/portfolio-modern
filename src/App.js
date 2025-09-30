import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Skills from "./components/Skills";
import Competences from "./components/Competences";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
  <Competences />
  {/* <Skills /> */}
      <Projects />
      <Experience />
  {/* <Contact /> */}
    </div>
  );
}

export default App;
