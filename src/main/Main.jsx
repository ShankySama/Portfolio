import React, { useState } from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import Section from "./sections/Section";
import "./Main.css";

const Main = () => {
  const [showSection, setShowSection] = useState({
    introSection: true,
    cardsSection: false,
  });

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

  return (
    <div className="main_container">
      {showSection.introSection && (
        <Intro data={mainData.intro} changeSection={changeSection} />
      )}
      {showSection.cardsSection && (
        <Section data={mainData.section} changeSection={changeSection} />
      )}
    </div>
  );
};

export default React.memo(Main);
