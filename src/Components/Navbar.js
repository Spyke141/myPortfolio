import React from "react";
import "./Style.css"

const NavBar = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top home_bg">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <b>Vipin</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={() => scrollToSection("projects")}
              >
                <b>Projects</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.crio.do/learn/portfolio/spyketrash141/"
                target="_blank"
              >
                <b>Resume</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={() => scrollToSection("skills")}
              >
                <b>Skills</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutme"
                onClick={() => scrollToSection("about_me")}
              >
                <b>About_Me</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
