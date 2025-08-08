import React from "react";
import "./ExperienceSection.css";
import { GoBackBtn, SectionTitle, TimeLine } from "../../../components";

const ExperienceSection = ({ data, handleGoBack }) => {
  return (
    <div className="experience_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      <div className="timeline-container">
      {data.experiences.map((experience, index) => (
        <TimeLine experience={experience} key={index}/>
      ))}
      </div>
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(ExperienceSection);
