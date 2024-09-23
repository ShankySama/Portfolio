import React from "react";
import src from "../assets/images/avatar.png";

const Avatar = ({ logo, greeting }) => {
  return (
    <div className="header_avatar_container">
      <img className="header_avatar" src={src} {...logo} alt={logo?.alt} />
      <span className="greeting">{greeting}</span>
    </div>
  );
};

export default React.memo(Avatar);
