import React, { useState } from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import Section from "./sections/Section";
import "./Main.css";
import { Loading } from "../components";

const Main = () => {
  const [showSection, setShowSection] = useState({
    introSection: true,
    cardsSection: false,
    skillSection: false,
    projectSection: false,
    experienceSection: false,
    interestSection: false,
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
      changeSection("cardsSection");
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

  return (
    <div className="main_container">
      {loader ? (
        <Loading />
      ) : (
        <>
          {showSection.introSection && (
            <Intro
              data={mainData.intro}
              changeSection={changeSection}
              handleExploreMeClick={handleExploreMeClick}
            />
          )}
          {showSection.cardsSection && (
            <Section
              data={mainData.section}
              handleExploreAllClick={handleExploreAllClick}
            />
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(Main);
