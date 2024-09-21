import React, { useState } from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import { Loading } from "../components";
import AllSection from "./sections/all-section/AllSection";
import SkillSection from "./sections/skill-section/SkillSection";
import ProjectSection from "./sections/project-section/ProjectSection";
import ExperienceSection from "./sections/experience-section/ExperienceSection";
import InterestSection from "./sections/interest-section/InterestSection";
import "./Main.css";

const Main = () => {
  const [showSection, setShowSection] = useState({
    intro: true,
    all: false,
    skills: false,
    projects: false,
    experience: false,
    interests: false,
  });
  const [loader, setLoader] = useState(false);

  const changeSection = (key) => {
    setShowSection((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, section) => {
        acc[section] = false;
        return acc;
      }, {});
      newState[key] = true;
      return newState;
    });
  };
  const handleExploreMeClick = () => {
    setLoader(true);
    setTimeout(() => {
      changeSection("all");
      setLoader(false);
    }, [1500]);
  };
  const handleExploreAllClick = (explore) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoader(true);
    setTimeout(() => {
      changeSection(explore);
      setLoader(false);
    }, 1500);
  };
  const handleGoBack = (backTo) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoader(true);
    setTimeout(() => {
      changeSection(backTo);
      setLoader(false);
    }, [1500]);
  };

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
            <ProjectSection handleGoBack={handleGoBack} />
          )}
          {showSection.experience && (
            <ExperienceSection handleGoBack={handleGoBack} />
          )}
          {showSection.interests && (
            <InterestSection handleGoBack={handleGoBack} />
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(Main);
