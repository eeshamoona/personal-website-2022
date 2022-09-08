import React from "react";
import "../styles/homeviewStyles.css";
import "../styles/contactviewStyles.css";

import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function ContactView() {
  return (
    <div className="contact-container">
      <div className="connect-containter ">
        <div className="name-container">
          {"CONNECT WITH ME".split("").map((element, index) => {
            return (
              <div className="name-div">
                <div className="top-div"></div>
                <div className="bottom-div"></div>
                <div className="name-h1">
                  <h2 className="main-header">{element}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="subheader">
        I'm currently looking for full-time opportunities in full-stack web
        development and software development.
      </p>

      <div className="logos">
        <a
          href="https://www.linkedin.com/in/eeshamoona/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-logo"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:eeshamoona@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-logo"
        >
          <MdMailOutline />
        </a>
        <a
          href="https://www.instagram.com/eeshamoona/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-logo"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/eeshamoona"
          target="_blank"
          rel="noopener noreferrer"
          className="link-logo"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}

export default ContactView;
