import React from "react";
import myPicture from "../../assets/images/AtefAbrarBhuyian.png";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className=" text-white -screen flex items-center justify-center p-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center md:text-left animate__animated animate__fadeInLeft animate__delay-1s">
            <p className="font-semibold text-2xl mb-6">Hi There! I am</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 relative">
              Md. Atef Abrar Bhuyian 
            </h1>
            <h1 className="my-4 text-neon font-bold text-4xl md:text-5xl">Web Developer</h1>
            <p className="text-gray-400 mt-4">
              I love to build clean and user-friendly websites. Always learning,
              always improving!
            </p>
            <div className="flex gap-6 mt-6">
              <Link to={"https://github.com/Atef-Abrar-Bhuyian"}>
                <FaGithub className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to={"https://www.linkedin.com/in/atef-abrar-62a7a4264/"}>
                <FaLinkedin className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to={"https://x.com/atef_abrar00"}>
                <FaSquareXTwitter className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
              </Link>
              <Link to={"https://www.facebook.com/atef.abrar.77/"}>
                <FaFacebookSquare className="text-3xl hover:text-[#ff014f] hover:scale-125 transition-all duration-300" />
              </Link>
            </div>
            <button className="bg-[#ff014f] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 glow-effect border-neon-glow shadow-neon mt-6 skill-card">
              My Resume
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative animate__animated animate__fadeInRight animate__delay-1s">
            <h1 className="absolute text-7xl font-bold text-[#ff014d17] text-center">
              𝕎𝔼𝔹 𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ
            </h1>
            <img src={myPicture} alt="Web Designer" className="relative" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
