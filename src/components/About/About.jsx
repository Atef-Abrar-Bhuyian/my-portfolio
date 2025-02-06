import React, { useEffect, useRef } from "react";
import "animate.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    imagesRef.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Fade>
        <h2 className="text-5xl font-bold primary-color mb-6">About Me</h2>
        </Fade>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi! I’m{" "}
          <span className="font-semibold text-white">Atef Abrar Bhuyian</span>,
          a passionate web developer with a love for creating clean, functional,
          and user-friendly websites. I’m always learning and growing in my
          field, striving to build efficient and scalable web applications. I
          enjoy taking on new challenges, working with the latest technologies,
          and finding creative solutions to problems. I am comfortable working
          with{" "}
          <span className="font-semibold text-white">
            React.js, Node.js, and Express.js
          </span>
          . I’m excited about the journey ahead and the projects I’ll get to
          work on!
        </p>
      </div>

      <div className="flex items-center justify-center mt-12 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCexwutNZt0aSRMrVRLoXtex8XMNyWxjD4Q&s"
            alt=""
            className="opacity-0" // Hide initially
          />
        ))}
      </div>
    </section>
  );
};

export default About;
