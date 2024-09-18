import React from "react";
import "./SkillSection.css";
import src from "../../../assets/images/react_icon.png";

const SkillSection = () => {
  return (
    <div className="skill_section">
      <h1>Skills</h1>
      <div>
        <h2>Web Technologies</h2>
        <div className="skill_icon_container">
          <div className="skill_icon">
            <img src={src} height={50} width={50} alt={'icon'}/>
            <h4 className="skill_name">React JS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkillSection);
