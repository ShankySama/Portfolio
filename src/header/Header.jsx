import React from "react";
import Avatar from "./Avatar";
import Title from "./Title";
import Subtitle from "./Subtitle";
import DarkModeBtn from "./DarkModeBtn";
import { headerData } from "../data";
import "./Header.css";

const Header = ({ onAvatarClick }) => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <div className="avatar_container">
          <Avatar logo={headerData?.logo} greeting={headerData?.greeting} onAvatarClick={onAvatarClick}/>
        </div>
        <div className="title_container">
          <Title title={headerData?.title} />
          <Subtitle subTitle={headerData?.subTitle} />
        </div>
      </div>
      <div>
        <DarkModeBtn
          darkModeIcon={headerData?.mode?.darkModeIcon}
          lightModeIcon={headerData?.mode?.lightModeIcon}
          switchAudio={headerData?.switchOnAudio}
          darkMode={headerData?.mode?.darkMode}
          lightMode={headerData?.mode?.lightMode}
        />
      </div>
    </div>
  );
};
export default Header;
