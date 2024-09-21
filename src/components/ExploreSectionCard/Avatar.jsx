import React from "react";

const Avatar = ({ avatar, icon }) => {
  return (
    <div className="avatar_container">
      <img src={icon} {...avatar} alt={avatar.alt} />
    </div>
  );
};

export default React.memo(Avatar);
