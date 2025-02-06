import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bistroBoss from "../../assets/projectsImages/bistroboss.png";
import smartTrack from "../../assets/projectsImages/smartTrack.png";
import volunVibe from "../../assets/projectsImages/volunvibe.png";
import chillGamer from "../../assets/projectsImages/chillGamer.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: bistroBoss,
      title: "BistroBoss",
      description: "A restaurant management platform to streamline order handling and reservations.",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://bistroboss-84f46.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/Bistro-Boss-Client",
      challenges: "Integrating real-time order updates was a challenge.",
      improvements: "Implement AI-based order predictions and chatbot integration."
    },
    {
      image: smartTrack,
      title: "SmartTrack",
      description: "An asset management system that helps you keep track of your digital and physical assets.",
      techStack: ["Next.js", "MongoDB", "Express.js"],
      liveLink: "https://smart-track-8eed9.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/Smart-Track-Client",
      challenges: "Managing efficient search queries for large databases.",
      improvements: "Enhancing search performance with indexing and AI recommendations."
    },
    {
      image: volunVibe,
      title: "VolunVibe",
      description: "A volunteer management website connecting people with community service opportunities.",
      techStack: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      challenges: "Ensuring user engagement and efficient event management.",
      improvements: "Adding a gamification system and social media sharing options."
    },
    {
      image: chillGamer,
      title: "ChillGamer",
      description: "A platform where gamers can review and discuss their favorite video games.",
      techStack: ["React", "Firebase", "Swiper.js"],
      liveLink: "#",
      githubLink: "#",
      challenges: "Handling high traffic and real-time chat features.",
      improvements: "Implementing WebSockets for real-time messaging and a mobile-friendly UI."
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-20 flex flex-col items-center text-white">
      <Fade>
        <h2 className="text-6xl font-extrabold text-neon mb-12 text-center tracking-wide">
          My Projects
        </h2>
      </Fade>

      <div className="relative w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-transparent p-6 rounded-xl shadow-xl border border-[#ff014d2c] hover:shadow-2xl transition duration-300 overflow-hidden group"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="text-center mt-5">
              <h3 className="text-3xl font-bold primary-color">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-3 text-lg">
                {project.description}
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-sm bg-transparent text-white px-4 py-2 rounded-full border border-neon-glow">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 inline-block px-6 py-2 text-white bg-transparent border rounded-full transition font-bold text-lg  skill-card"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl max-w-lg text-white text-center relative">
            <h2 className="text-4xl font-bold text-neon mb-5">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <h3 className="text-xl text-neon mb-3">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedProject.techStack.map((tech, i) => (
                <span key={i} className="text-sm bg-transparent text-white px-4 py-2 rounded-full border border-neon-glow">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-4"><strong>Challenges:</strong> {selectedProject.challenges}</p>
            <p className="text-gray-400 mb-4"><strong>Future Plans:</strong> {selectedProject.improvements}</p>
            <div className="flex justify-center gap-4">
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-[#ff014d] text-white rounded-lg font-bold hover:bg-[#ff3366] transition">
                Live Project
              </a>
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition">
                GitHub
              </a>
            </div>
            <button onClick={() => setSelectedProject(null)} className="mt-5 px-5 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
