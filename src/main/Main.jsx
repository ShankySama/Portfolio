import React from "react";
import Intro from "./intro/Intro";
import { mainData } from "../data";
import "./Main.css"

const Main = () => {
  return (
    <div className="main_container">
      <Intro data={mainData.intro} />
    </div>
  );
};

export default React.memo(Main);
