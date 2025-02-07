import React, { useEffect, useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { ScrollToTop } from "scroll-totop-button";
import Education from "../../components/Education/Education";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <ScrollToTop
        style={{
          backgroundColor: "#ff014f",
          color: "white",
          borderRadius: "50%",
          fontSize: "1.25rem",
        }}
      />
    </div>
  );
};

export default Home;
