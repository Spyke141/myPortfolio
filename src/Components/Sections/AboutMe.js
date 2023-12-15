import React from "react";
import profile_pic from "../../Assets/profile_pic.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className="py-3 m-0 bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block align-self-center">
            <img
              className="border border-secondary rounded-circle img-fluid"
              src={profile_pic}
              alt="profilepicture"
              width={375}
              height={375}
            />
          </div>
          <div className="col-lg-7">
            <h2 className="display-4 mb-5 text-center">About_Me</h2>
            <p className="lead text-left">
              My name is Vipin Negi. Completed my Bachelor's in Computer Science
              from IETE Delhi. I love Nature, I like video games and I like
              coding. I also keep researching for out for new technology and
              keep myself updated.
            </p>
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://www.crio.do/learn/portfolio/spyketrash141/"
                target="_blank"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
