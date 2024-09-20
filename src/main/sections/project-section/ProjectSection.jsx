import React from "react";
import Title from "./Title";
import "./ProjectSection.css"
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="project_section">
      <Title />
      <ProjectCard/>
    </div>
  );
};

export default React.memo(ProjectSection);
