import React from "react";
import { motion } from "motion/react";
import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";
import { GoBackBtn, SectionTitle } from "../../../components";

const ProjectSection = ({ data, handleGoBack }) => {
  return (
    <div className="project_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {data.projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </motion.div>
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(ProjectSection);
