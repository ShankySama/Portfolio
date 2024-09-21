import React from "react";
import "./ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";
import { GoBackBtn, SectionTitle } from "../../../components";

const ExperienceSection = ({ data, handleGoBack }) => {
  return (
    <div className="experience_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      {data.experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(ExperienceSection);
