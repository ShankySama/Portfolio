import React from "react";
import "./ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";
import { SectionTitle } from "../../../components";

const ExperienceSection = ({ data, handleGoBack }) => {
  return (
    <div className="experience_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      {data.experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
};

export default React.memo(ExperienceSection);
