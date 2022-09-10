import React from "react";
import "../styles/homeviewStyles.css";
import "../styles/workexperienceviewStyles.css";

function WorkExperienceView() {
  return (
    <div className="work">
      <div className="workExperience-containter">
        <div className="name-container">
          {"WORK EXPERIENCE".split("").map((element, index) => {
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
      <div className="work-container">
        <div className="work-div">
          <h2>Meta</h2>
        </div>
        <div className="work-div">
          <h2> Motorola Solutions</h2>
        </div>
        <div className="work-div">
          <h2> Cargill</h2>
        </div>
        <div className="work-div">
          <h2> SAP</h2>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceView;
