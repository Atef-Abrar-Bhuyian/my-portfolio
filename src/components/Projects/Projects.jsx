import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import bistroBoss from "../../assets/projectsImages/bistroboss.png";
import smartTrack from "../../assets/projectsImages/smartTrack.png";
import volunVibe from "../../assets/projectsImages/volunvibe.png";
import chillGamer from "../../assets/projectsImages/chillGamer.png";
import "animate.css";
import Heading from "../Heading/Heading";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const projects = [
    {
      image: bistroBoss,
      title: "BistroBoss",
      description:
        "Bistro Boss is a restaurant management app where users can explore the menu, place orders, and manage accounts. The admin panel allows food management, order tracking, and sales insights. Secure payments via Stripe (cards) and SSLCommerz (mobile banking). Built with React, Tailwind CSS, Firebase, MongoDB, and Express.js for a seamless experience.",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Axios",
        "TanStackQuery",
        "Firebase",
        "Stripe",
        "SSLCommerz",
      ],
      liveLink: "https://bistroboss-84f46.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/Bistro-Boss-Client",
      challenges:
        "Initially, integrating Stripe and SSLCommerz did not work as expected. However, after thoroughly reading the documentation and following a step-by-step approach, I was able to resolve the issues, and both payment gateways functioned correctly.",
      improvements:
        "Loyalty Program – Implement a points-based system where customers earn rewards on purchases, with special offers like birthday discounts and referral bonuses to boost engagement.",
    },
    {
      image: smartTrack,
      title: "SmartTrack",
      description:
        "SmartTrack is an asset management web app that allows HR to manage assets, approve employee requests, and generate reports. Employees can request assets, track requests, and view details. The app includes features like asset filtering, role management, and PDF report generation. Payments are securely processed via Stripe.",
      techStack: [
        "React",
        "Tailwind CSS",
        "React Flowbite",
        "React Router",
        "Axios",
        "Firebase",
        "Stripe",
      ],
      liveLink: "https://smart-track-8eed9.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/Smart-Track-Client",
      challenges:
        "Managing team members and asset allocation for each team was a significant challenge. Ensuring accurate tracking of team member roles, responsibilities, and the distribution of assets required a robust system to prevent errors and mismanagement. Implementing efficient data structures and workflows to streamline the process while maintaining real-time updates and smooth coordination between teams was key to overcoming this challenge.",
      improvements:
        "My future plan is to implement a Kanban Board for Task Management, allowing users to easily track tasks across different stages (To-Do, In Progress, Done) with a drag-and-drop interface for seamless task management.",
    },
    {
      image: volunVibe,
      title: "VolunVibe",
      description:
        "VolunVibe is a modern platform that makes it easy for volunteers to connect with opportunities in a simple and engaging way. It helps organize volunteer efforts and boosts the impact of community projects.",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "React Router",
        "Firebase",
      ],
      liveLink: "https://volunvibe.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/VolunVibe-Client",
      challenges:
        "The challenge was to effectively manage both the volunteer posts and the users who create them. Ensuring a seamless process for users to add, edit, and delete their posts while maintaining proper access control and validation was crucial. Additionally, managing the interaction between volunteers and the posts ensuring that volunteers can easily sign up, track, and update their participation required careful planning of the database structure and user interface for smooth usability.",
      improvements:
        "The future plan for VolunVibe includes adding a rating system for posts and volunteers, along with user profiles to track volunteer activities, aiming to enhance engagement and overall user experience.",
    },
    {
      image: chillGamer,
      title: "ChillGamer",
      description:
        "ChillGamer is a game review platform where users can explore games, share their reviews, and build their wishlist. Users can submit, edit, and manage their reviews while discovering what others think about their favorite games. The platform offers an engaging, user-friendly experience for tracking and updating game preferences.",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://chill-gamer-d4be4.web.app/",
      githubLink: "https://github.com/Atef-Abrar-Bhuyian/Chill-Gamer-Client",
      challenges:
        "A key challenge I faced was maintaining individual wishlists for users and allowing them to edit their wishlists. Ensuring that each user’s wishlist was stored and updated separately, while providing an intuitive interface for users to add, remove, or modify items, required careful management of user data and state. Implementing this functionality efficiently, while ensuring data persistence and smooth user interaction, was critical to the success of the feature.",
      improvements:
        "My future plan is to add game trailers and previews, allowing users to watch videos of games before making their choices.",
    },
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 500); // Match duration of the closing animation
  };

  return (
    <div className="bg-gray-950 min-h-screen py-20 flex flex-col items-center text-white">
      <Fade>
        <Heading heading={"Projects"}></Heading>
      </Fade>

      <div className="relative w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="relative bg-transparent p-6 rounded-xl border border-[#ff014d2c] transition duration-300 overflow-hidden group cursor-pointer"
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
              <p className="text-gray-400 mt-3 text-lg text-justify">
                {project.description.slice(0, 154)}...
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-transparent text-white px-4 py-2 rounded-full border border-neon-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 inline-block px-6 py-2 text-white bg-transparent border rounded-full transition font-bold text-lg skill-card"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4 sm:px-0 
    ${
      isClosing
        ? "animate__animated animate__fadeOut animate__faster"
        : "animate__animated animate__fadeIn animate__faster"
    }`}
        >
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl max-w-lg w-11/12 sm:w-auto text-white text-center relative animate__animated animate__zoomIn max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl sm:text-4xl font-bold primary-color mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-4 text-justify text-sm sm:text-base">
              {selectedProject.description}
            </p>

            <h3 className="text-xl sm:text-2xl font-bold primary-color mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm bg-transparent text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-neon-glow"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold primary-color mb-3">
              Challenges
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base text-justify">
              {selectedProject.challenges}
            </p>

            <h3 className="text-xl sm:text-2xl font-bold primary-color mb-3">
              Future Plans
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              {selectedProject.improvements}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 bg-transparent text-white rounded-lg font-bold border skill-card w-full sm:w-auto text-sm sm:text-base"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 bg-transparent text-white rounded-lg font-bold border skill-card w-full sm:w-auto text-sm sm:text-base"
              >
                GitHub
              </a>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 px-5 py-2 bg-[#ff014f] text-white rounded-lg font-bold skill-card w-full sm:w-auto text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
