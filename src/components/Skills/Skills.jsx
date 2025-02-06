import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import Heading from "../Heading/Heading";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400 text-5xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-blue-400 text-5xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  {
    name: "Firebase",
    icon: <IoLogoFirebase className="text-yellow-400 text-5xl" />,
  },
];

const Skills = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-20">
      {/* Glowing effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-80 h-80 bg-[#ff014d75] blur-3xl opacity-30 rounded-full"></div>
      </div>

      <Fade>
        <Heading heading={"Skills"}></Heading>
      </Fade>
      <Fade delay={500} triggerOnce={true}>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 bg-transparent backdrop-blur-md rounded-2xl shadow-md transform transition-transform hover:scale-105 cursor-pointer hover:backdrop-blur-lg border-[#ff014d21] border hover:rotate-3 hover:shadow-sm hover:shadow-[#ff014f] skill-card relative overflow-hidden"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
