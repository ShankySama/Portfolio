import React from "react";

const SubTitle = ({subTitle}) => {
  return <h2 className="subtitle">{subTitle}</h2>;
};

export default React.memo(SubTitle);
