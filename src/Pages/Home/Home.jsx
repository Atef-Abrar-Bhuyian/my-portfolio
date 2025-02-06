import React, { useEffect, useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection data-scroll></HeroSection>
      <About id="about" data-scroll></About>
      <Skills id="skills" data-scroll></Skills>
      <Projects id="projects" data-scroll></Projects>
      <Contact id="contact" data-scroll></Contact>
    </div>
  );
};

export default Home;
