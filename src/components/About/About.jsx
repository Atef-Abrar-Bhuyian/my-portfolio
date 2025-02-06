import "animate.css";
import { Fade } from "react-awesome-reveal";
import Heading from "../Heading/Heading";
import aboutMeLottie from "../../assets/lottie/aboutMe.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Fade>
          <Heading heading={"About Me"} />
        </Fade>
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
          <div>
            <Lottie
              animationData={aboutMeLottie}
              className="w-4/5 mx-auto"
            ></Lottie>
          </div>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed sm:text-xl max-w-3xl mx-auto text-justify">
              Hi! I’m{" "}
              <span className="font-semibold text-[#ff014f]">
                {" "}
                Md. Atef Abrar Bhuyian
              </span>
              , a web developer passionate about building clean, functional
              websites. I enjoy working with React.js, Node.js, and Express.js
              while constantly learning and improving. Every project is a new
              challenge and a chance to find creative solutions. When I’m not
              coding, I’m into competitive gaming, always pushing myself to
              improve. Excited for the journey ahead and the exciting projects
              to come!{" "}
              <span className="font-semibold text-[#ff014f]">
                React.js, Node.js, and Express.js
              </span>{" "}
              are comfortable tools for me, and I enjoy using them to build
              efficient and scalable web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
