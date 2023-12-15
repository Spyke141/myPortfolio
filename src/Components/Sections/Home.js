import React from "react";
import "../Style.css";

const Home = () => {
  return (
    <div
      className="py-3 title bg-transparent home_bg bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div className="container py-5">
        <div id="stars" />
        <div className="text-center container">
          <h1 className="display-1">Vipin_Negi</h1>
          <div className="lead typist">
            "99 little bugs in the code, Take one down, patch it around 117
            little bugs in the code.."
          </div>
          <div className="p-5 d-flex justify-content-center align-items-center">
            <a
              href="https://github.com/Spyke141"
              target="_blank"
              className="me-5 text-white fs-1"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/spyke141/"
              target="_blank"
              className="me-5 text-white fs-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.crio.do/learn/portfolio/spyketrash141/"
              target="_blank"
              className="text-white fs-1"
            >
              <i className="bi bi-person-square"></i>
            </a>
          </div>

          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
