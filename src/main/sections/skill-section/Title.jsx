import React from "react";
import GoBackBtn from "../../../components/GoBackBtn";

const Title = ({ title, handleGoBack }) => {
  return (
    <div className="skill_title_container">
      <h1>{title}</h1>
      <GoBackBtn handleGoBack={handleGoBack} />
    </div>
  );
};

export default React.memo(Title);
