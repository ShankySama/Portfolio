import React from "react";
import "./ExperienceSection.css";
import ExperienceCard from "./ExperienceCard";
import { SectionTitle } from "../../../components";

const ExperienceSection = ({ handleGoBack }) => {
  return (
    <div className="experience_section">
      <SectionTitle title={"Experiences"} handleGoBack={handleGoBack}/>
      <ExperienceCard />
    </div>
  );
};

export default React.memo(ExperienceSection);
