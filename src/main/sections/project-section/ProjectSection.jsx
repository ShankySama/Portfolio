import React from "react";
import ProjectCard from "./ProjectCard";
import { GoBackBtn, SectionTitle } from "../../../components";
import "./ProjectSection.css";

const ProjectSection = ({ data, handleGoBack }) => {
  return (
    <div className="project_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      {data?.projects?.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(ProjectSection);
