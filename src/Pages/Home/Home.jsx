import React, { useEffect, useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  const scrollContainer = useRef(null);

  return (
    <div ref={scrollContainer} data-scroll-container>
      <HeroSection data-scroll></HeroSection>
      <About id="about" data-scroll></About>
      <Skills id="skills" data-scroll></Skills>
      <Projects id="projects" data-scroll></Projects>
    </div>
  );
};

export default Home;
