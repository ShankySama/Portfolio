import React from "react";
import SkillContainer from "./SkillContainer";
import { GoBackBtn, SectionTitle } from "../../../components";
import "./SkillSection.css";

const SkillSection = ({ data, handleGoBack }) => {
  return (
    <div className="skill_section">
      <SectionTitle title={"Skills"} handleGoBack={handleGoBack} />
      <div className="skill_bento_grid">
        {data.sections.map((skills, index) => (
          <SkillContainer data={skills} index={index} key={index} />
        ))}
      </div>
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(SkillSection);
