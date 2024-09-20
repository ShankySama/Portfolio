import React from "react";
import "./SkillSection.css";
import Title from "./Title";
import SkillContainer from "./SkillContainer";

const SkillSection = ({ data }) => {
  return (
    <div className="skill_section">
      <Title title={data.title} />
      {data.sections.map((skills, index) => (
        <SkillContainer data={skills} key={index}/>
      ))}
    </div>
  );
};

export default React.memo(SkillSection);
