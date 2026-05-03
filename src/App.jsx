import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetails from "./sections/ProjectDetails"; // 👈 new page

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Details Page */}
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;