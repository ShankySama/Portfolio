import React from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import Section from "./sections/Section";
import "./Main.css";

const Main = () => {
  return (
    <div className="main_container">
      <Intro data={mainData.intro} />
      <Section data={mainData.section}/>
    </div>
  );
};

export default React.memo(Main);
