
const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = (
    <>
      <li className="group">
        <button onClick={() => scrollToSection("about")} className="nav-link cursor-pointer">
          About
        </button>
      </li>
      <li className="group">
        <button onClick={() => scrollToSection("skills")} className="nav-link">Skills</button>
      </li>
      <li className="group">
        <button onClick={() => scrollToSection("projects")} className="nav-link">Projects</button>
      </li>
      <li className="group">
        <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto border sticky top-0 mt-4 rounded-full text-white z-10 backdrop-blur-lg animate__animated animate__fadeInDown">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn bg-transparent border-none text-white hover:bg-transparent hover:text text-xl hover:text-[#ff014f]">
          ᗩ.ᗩ.ᗷᕼᑌYIᗩᑎ
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-4">
        <a className="btn nav-link">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
