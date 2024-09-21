import React from "react";
import ProjectCard from "./ProjectCard";
import { SectionTitle } from "../../../components";
import "./ProjectSection.css";

const ProjectSection = ({ handleGoBack }) => {
  return (
    <div className="project_section">
      <SectionTitle title={"Projects"} handleGoBack={handleGoBack}/>
      <ProjectCard />
    </div>
  );
};

export default React.memo(ProjectSection);
