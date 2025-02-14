import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <li className="group">
        <button
          onClick={() => scrollToSection("about")}
          className="nav-link cursor-pointer"
        >
          About
        </button>
      </li>
      <li className="group">
        <button
          onClick={() => scrollToSection("education")}
          className="nav-link"
        >
          Education
        </button>
      </li>
      <li className="group">
        <button onClick={() => scrollToSection("skills")} className="nav-link">
          Skills
        </button>
      </li>
      <li className="group">
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-link"
        >
          Projects
        </button>
      </li>
      <li className="group">
        <button onClick={() => scrollToSection("contact")} className="nav-link">
          Contact
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto border sticky top-0 mt-4 rounded-full text-white z-10 backdrop-blur-lg animate__animated animate__fadeInDown">
      {/* Navbar Left */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="btn btn-ghost text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <a
          href="/"
          className="btn bg-transparent border-none text-xl text-white hover:bg-transparent hover:text-[#ff014f]"
        >
          &lt; ᗩ.ᗩ.ᗷᕼᑌYIᗩᑎ /&gt;
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end mr-4">
        <button
          onClick={() => {
            const resumeUrl = "/Md.-Atef-Abrar-Bhuyian-Resume.pdf";
            const link = document.createElement("a");
            link.href = resumeUrl;
            link.setAttribute("download", "Md.-Atef-Abrar-Bhuyian-Resume.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-[#ff014f] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 glow-effect border-neon-glow shadow-neon skill-card"
        >
          My Resume
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-12 left-6 bg-[#ff014f] z-20 shadow-lg rounded-xl p-5 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-20 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
