import React from "react";
import "../Style.css";

const Footer = () => {
  return (
    <footer
      className="mt-auto py-5 text-center home_bg"
      style={{ backgroundColor: "rgb(245, 245, 245)" }}
    >
      <div className="container">
        <h2 className="display-4 pb-3">Get_In_Touch</h2>
        <p className="lead pb-3">
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at,{" "}
          <a
            className="text-decoration-none"
            href="mailto:spyketrash141@gmail.com"
          >
            spyketrash141@gmail.com
          </a>
          .
        </p>
        <i class="bi bi-code-slash"></i> with <i class="bi bi-heart-fill"></i>{" "}
        by{" "}
        <a
          href="https://github.com/Spyke141"
          aria-label="My GitHub"
          target="_blank"
        >
          <span className="badge bg-dark">Vipin Negi</span>
        </a>{" "}
        using <i class="bi bi-r-circle-fill"></i>eact
      </div>
    </footer>
  );
};

export default Footer;
