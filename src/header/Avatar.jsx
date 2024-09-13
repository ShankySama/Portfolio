import React from "react";

const Avatar = ({ logo }) => {
  return (
    <div>
      <img {...logo} alt={logo.alt} />
    </div>
  );
};

export default React.memo(Avatar);
