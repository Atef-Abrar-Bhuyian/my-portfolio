import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import Heading from "../Heading/Heading";
import { Fade } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";

const Education = () => {
  return (
    <div id="education" className="relative max-w-5xl mx-auto px-4 pt-20">
      {/* Glowing effect */}
      <div className="absolute inset-0 flex justify-center items-center mt-52">
        <div className="w-80 h-80 bg-[#ff014d75] blur-3xl opacity-30 rounded-full"></div>
      </div>

      <Fade>
        <Heading heading={"Education"} />
      </Fade>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* University */}
        <div className="flex flex-col items-center justify-center p-6 bg-transparent backdrop-blur-md rounded-2xl shadow-md transform transition-transform hover:scale-105 cursor-pointer hover:backdrop-blur-lg border-[#ff014d21] border hover:rotate-3 hover:shadow-sm hover:shadow-[#ff014f] skill-card relative overflow-hidden text-center">
          <FaUniversity className="text-4xl text-[#ff014f]" />
          <p className="mt-3 text-lg font-semibold text-white">
            B.Sc in Computer Science And Engineering
          </p>
          <p className="mt-1 text-base font-medium text-gray-300">
            Port City International University
          </p>
          <p className="mt-1 text-sm text-gray-400 flex items-center gap-1">
            {" "}
            <FaLocationDot className="primary-color" /> Khulshi Rd, Chittagong
          </p>
        </div>

        {/* School */}
        <div className="flex flex-col items-center justify-center p-6 bg-transparent backdrop-blur-md rounded-2xl shadow-md transform transition-transform hover:scale-105 cursor-pointer hover:backdrop-blur-lg border-[#ff014d21] border hover:rotate-3 hover:shadow-sm hover:shadow-[#ff014f] skill-card relative overflow-hidden text-center">
          <FaSchool className="text-4xl text-[#ff014f]" />
          <p className="mt-3 text-lg font-semibold text-white">
            Higher Secondary School
          </p>
          <p className="mt-1 text-base font-medium text-gray-300">
            Chittagong Government Model School and College
          </p>
          <p className="mt-1 text-sm text-gray-400 flex items-center gap-1">
            {" "}
            <FaLocationDot className="primary-color" /> Khulshi Rd, Chittagong
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
