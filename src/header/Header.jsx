import React from "react";
import Avatar from "./Avatar";
import Title from "./Title";
import Subtitle from "./Subtitle";
import DarkModeBtn from "./DarkModeBtn";
import { headerData } from "../data";

import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <div className="avatar_container">
          <Avatar logo={headerData.logo} />
        </div>
        <div className="title_container">
          <Title title={headerData.title} />
          <Subtitle subTitle={headerData.subTitle} />
        </div>
      </div>
      <div>
        <DarkModeBtn
          darkModeImg={headerData.mode.darkMode}
          lightModeImg={headerData.mode.lightMode}
        />
      </div>
    </div>
  );
};
export default Header;
