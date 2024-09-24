import React from "react";
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
        <>
          {showSection.intro && (
            <Intro
              data={mainData.intro}
              changeSection={changeSection}
              handleExploreMeClick={handleExploreMeClick}
            />
          )}
          {showSection.all && (
            <AllSection
              data={mainData.section}
              handleExploreAllClick={handleExploreAllClick}
            />
          )}
          {showSection.skills && (
            <SkillSection
              data={mainData.skillSection}
              handleGoBack={handleGoBack}
            />
          )}
          {showSection.projects && (
            <ProjectSection
              data={mainData.projectSection}
              handleGoBack={handleGoBack}
            />
          )}
          {showSection.experience && (
            <ExperienceSection
              data={mainData.experienceSection}
              handleGoBack={handleGoBack}
            />
          )}
          {showSection.interests && (
            <InterestSection
              data={mainData.interestSection}
              handleGoBack={handleGoBack}
            />
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(Main);
