import React from "react";
import SkillContainer from "./SkillContainer";
import { GoBackBtn, SectionTitle } from "../../../components";
import "./SkillSection.css";

const SkillSection = ({ data, handleGoBack }) => {
  return (
    <div className="skill_section">
      <SectionTitle title={"Skills"} handleGoBack={handleGoBack} />
      {data.sections.map((skills, index) => (
        <SkillContainer data={skills} key={index} />
      ))}
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(SkillSection);
