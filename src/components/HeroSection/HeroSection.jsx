import React from "react";
import myPicture from "../../assets/images/AtefAbrarBhuyian.png";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className=" text-white -screen flex items-center justify-center p-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center md:text-left">
            <Fade triggerOnce={true} delay={500}>
              <p className="font-semibold text-2xl mb-6">Hi There! I am</p>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 relative">
                Md. Atef Abrar Bhuyian
              </h1>
              <h1 className="my-4 text-neon font-bold text-4xl md:text-5xl">
                Web Developer
              </h1>
              <p className="text-gray-400 mt-4">
                I love to build clean and user-friendly websites. Always
                learning, always improving!
              </p>
              <div className="flex gap-6 mt-6 items-center justify-center md:justify-start">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Atef-Abrar-Bhuyian"
                >
                  <FaGithub className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/atef-abrar-bhuyian"
                >
                  <FaLinkedin className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/atef_abrar00"
                >
                  <FaSquareXTwitter className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/atef.abrar.77/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
                </a>
              </div>
              <button
                onClick={() => {
                  const resumeUrl = "/Md.-Atef-Abrar-Bhuyian-Resume.pdf";
                  const link = document.createElement("a");
                  link.href = resumeUrl;
                  link.setAttribute(
                    "download",
                    "Md.-Atef-Abrar-Bhuyian-Resume.pdf"
                  );
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-[#ff014f] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 glow-effect border-neon-glow shadow-neon mt-6 skill-card"
              >
                My Resume
              </button>
            </Fade>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
            <Fade triggerOnce={true} delay={500}>
              <h1 className="absolute text-3xl md:text-7xl ml-8 mt-10  font-bold text-[#ff014d17] text-center">
                𝕎𝔼𝔹 𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ
              </h1>
              <img src={myPicture} alt="Web Designer" className="relative" />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
