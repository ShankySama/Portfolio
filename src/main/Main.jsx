import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import { Loading } from "../components";
import AllSection from "./sections/all-section/AllSection";
import SkillSection from "./sections/skill-section/SkillSection";
import ProjectSection from "./sections/project-section/ProjectSection";
import ExperienceSection from "./sections/experience-section/ExperienceSection";
import InterestSection from "./sections/interest-section/InterestSection";
import "./Main.css";

const Main = ({
  showSection,
  loader,
  changeSection,
  handleExploreMeClick,
  handleExploreAllClick,
  handleGoBack,
}) => {
  return (
    <div className="main_container">
      {loader ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          {showSection.intro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Intro
                data={mainData.intro}
                changeSection={changeSection}
                handleExploreMeClick={handleExploreMeClick}
              />
            </motion.div>
          )}
          {showSection.all && (
            <motion.div
              key="all"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AllSection
                data={mainData.section}
                handleExploreAllClick={handleExploreAllClick}
              />
            </motion.div>
          )}
          {showSection.skills && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SkillSection
                data={mainData.skillSection}
                handleGoBack={handleGoBack}
              />
            </motion.div>
          )}
          {showSection.projects && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectSection
                data={mainData.projectSection}
                handleGoBack={handleGoBack}
              />
            </motion.div>
          )}
          {showSection.experience && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ExperienceSection
                data={mainData.experienceSection}
                handleGoBack={handleGoBack}
              />
            </motion.div>
          )}
          {showSection.interests && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <InterestSection
                data={mainData.interestSection}
                handleGoBack={handleGoBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default React.memo(Main);
