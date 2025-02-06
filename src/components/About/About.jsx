import "animate.css";
import { Fade } from "react-awesome-reveal";
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Fade>
          <Heading heading={"About"}></Heading>
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
    </section>
  );
};

export default About;
