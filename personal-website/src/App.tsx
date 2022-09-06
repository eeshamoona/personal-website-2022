import React, { useRef } from "react";
import "./index.css";
import "./styles/navbarStyles.css";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import ProjectView from "./views/ProjectView";
import WorkExperienceView from "./views/WorkExperienceView";

import { FaFileDownload } from "react-icons/fa";

function App() {
  const homeSection = useRef<null | HTMLDivElement>(null);
  const workSection = useRef<null | HTMLDivElement>(null);
  const projectSection = useRef<null | HTMLDivElement>(null);
  const contactSection = useRef<null | HTMLDivElement>(null);

  const scrollDown = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref) {
      window.scrollTo({
        top: ref.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" alt="logo" src="eeshamoonalogo.png"></img>
        <ul className="nav-links">
          <li className="link" onClick={() => scrollDown(homeSection)}>
            Home
          </li>
          <li className="link" onClick={() => scrollDown(workSection)}>
            Work Experience
          </li>
          <li className="link" onClick={() => scrollDown(projectSection)}>
            Projects
          </li>
          <li className="link" onClick={() => scrollDown(contactSection)}>
            Contact
          </li>
        </ul>
        <button className="resume">
          {" "}
          <FaFileDownload /> Download Resume
        </button>
      </div>

      <div className="section home" ref={homeSection}>
        <HomeView />
      </div>
      <div className="section work" ref={workSection}>
        <WorkExperienceView />
      </div>
      <div className="section projects" ref={projectSection}>
        <ProjectView />
      </div>
      <div className="section contact" ref={contactSection}>
        <ContactView />
      </div>
    </div>
  );
}

export default App;
