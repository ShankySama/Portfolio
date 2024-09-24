import React from "react";
import src from "../assets/images/avatar.png";

const Avatar = ({ logo, greeting, onAvatarClick }) => {
  return (
    <div className="header_avatar_container">
      <img
        className="header_avatar"
        src={src}
        {...logo}
        alt={logo?.alt}
        onClick={()=>onAvatarClick("all")}
      />
      <span className="greeting">{greeting}</span>
    </div>
  );
};

export default React.memo(Avatar);
