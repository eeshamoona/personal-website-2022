import React from "react";
import "../styles/homeviewStyles.css";
function HomeView() {
  return (
    <div className="home-container">
      <div className="text-container">
        <h3 className="intro"> Hi, my name is </h3>

        <div className="name-container">
          {"EESHA MOONA".split("").map((element, index) => {
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
        <div className="description-div">
          <p>
            I'm a fast-paced & ever-curious software developer with an expertise
            in full stack web-development and a passion for solving human
            problems through efficient, intuitive, and approachable tech
            solutions.
          </p>
        </div>

        <div>
          <button className="btn"> Contact Me</button>
          <button className="btn"> My Philosophy</button>
        </div>
      </div>
      <div>
        <img
          className="prof-pic"
          alt="Eesha Profile"
          src="eeshaImage.png"
        ></img>
      </div>
    </div>
  );
}

export default HomeView;
