import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { ScrollToTop } from "scroll-totop-button";
import Education from "../../components/Education/Education";
import { FaWhatsapp, FaEnvelope, FaPhone, FaComments, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop
        style={{
          backgroundColor: "#ff014f",
          color: "white",
          borderRadius: "50%",
          fontSize: "1.25rem",
        }}
      />

      {/* Floating Chat Button */}
      <div className="fixed bottom-24 right-8 flex flex-col items-center gap-3">
        {/* Contact Options (WhatsApp, Email, Phone) */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 scale-0"
          }`}
        >
          <a
            href="https://wa.me/8801576408435"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition-all duration-500 animate__animated animate__fadeInUp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:abrarbhuyian8@gmail.com"
            className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition-all duration-500 animate__animated animate__fadeInUp"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+8801576408435"
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-110 transition-all duration-500 animate__animated animate__fadeInUp"
          >
            <FaPhone size={24} />
          </a>
        </div>

        {/* Chat Icon (Toggle Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#ff014f] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate__animated animate__pulse animate__infinite"
        >
          {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Home;
