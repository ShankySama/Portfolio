import React from "react";

const Subtitle = ({ subTitle }) => {
  return (
    <p className="sub_title">
      <i>{subTitle}</i>
    </p>
  );
};

export default React.memo(Subtitle);

