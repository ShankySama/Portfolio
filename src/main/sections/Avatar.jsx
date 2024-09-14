import React from "react";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar_container">
      <img {...avatar} alt={avatar.alt} />
    </div>
  );
};

export default React.memo(Avatar);
