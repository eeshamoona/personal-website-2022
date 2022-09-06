import React, { useRef } from "react";
import "./index.css";
import "./styles/navbarStyles.css";

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
        <button className="resume"> Download Resume</button>
      </div>

      <div className="section section2" ref={homeSection}>
        <h2>Home</h2>
      </div>
      <div className="section section3" ref={workSection}>
        <h2>Work Experience</h2>
      </div>
      <div className="section section3" ref={projectSection}>
        <h2>Projects</h2>
      </div>
      <div className="section section4" ref={contactSection}>
        <h2>Contact Me</h2>
      </div>
    </div>
  );
}

export default App;
