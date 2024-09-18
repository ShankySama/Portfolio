import React, { useState } from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import Section from "./sections/Section";
import "./Main.css";
import { Loading } from "../components";
import SkillSection from "./sections/skill-section/SkillSection";
import ProjectSection from "./sections/project-section/ProjectSection";
import ExperienceSection from "./sections/experience-section/ExperienceSection";
import InterestSection from "./sections/interest-section/InterestSection";

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
    }, [3000]);
  };

  const handleExploreAllClick = (explore) => {
    setLoader(true);
    setTimeout(() => {
      changeSection(explore);
      setLoader(false);
    }, 2000);
  };
  console.log(showSection)
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
            <Section
              data={mainData.section}
              handleExploreAllClick={handleExploreAllClick}
            />
          )}
          {showSection.skills && <SkillSection />}
          {showSection.projects && <ProjectSection />}
          {showSection.experience && <ExperienceSection />}
          {showSection.interests && <InterestSection />}
        </>
      )}
    </div>
  );
};

export default React.memo(Main);
