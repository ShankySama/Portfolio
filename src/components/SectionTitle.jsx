import React from "react";
import GoBackBtn from "./GoBackBtn";

export const SectionTitle = ({ title, handleGoBack }) => {
  return (
    <div className="section_title_container">
      <h1>{title}</h1>
      <GoBackBtn handleGoBack={handleGoBack} />
    </div>
  );
};
