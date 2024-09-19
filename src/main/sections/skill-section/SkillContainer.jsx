import React from "react";
import src from "../../../assets/images/react_icon.png";

const SkillContainer = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <div className="skill_icon_container">
        {data.skills.map((skill, index) => (
          <div className="skill_icon" key={index}>
            <img src={src} height={50} width={50} alt={"icon"} />
            <h4 className="skill_name">{skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SkillContainer);
