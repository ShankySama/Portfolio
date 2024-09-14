import React from "react";
import src from "../assets/images/avatar.png";

const Avatar = ({ logo }) => {
  return (
    <div>
      <img src={src} {...logo} alt={logo.alt} />
    </div>
  );
};

export default React.memo(Avatar);
