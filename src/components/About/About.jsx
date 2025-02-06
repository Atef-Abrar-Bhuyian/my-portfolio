import "animate.css";
import { Fade } from "react-awesome-reveal";
import Heading from "../Heading/Heading";
import aboutMeLottie from "../../assets/lottie/aboutMe.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Fade>
          <Heading heading={"About Me"} />
        </Fade>
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
          <div>
            <Lottie animationData={aboutMeLottie} className="w-4/5 mx-auto"></Lottie>
          </div>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed sm:text-xl max-w-3xl mx-auto text-justify">
              Hi! I’m{" "}
              <span className="font-semibold text-[#ff014f]">
                {" "}
                Md. Atef Abrar Bhuyian
              </span>
              , a passionate web developer focused on creating clean,
              functional, and user-friendly websites. I ’m always learning and
              growing, striving to build efficient and scalable web
              applications. I enjoy taking on new challenges, working with the
              latest technologies, and finding creative solutions. I am
              comfortable working with{" "}
              <span className="font-semibold text-[#ff014f]">
                React.js, Node.js, and Express.js
              </span>
              . Excited for the journey ahead and the projects I’ll get to work
              on!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
