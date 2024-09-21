import React from "react";
import InterestCard from "./InterestCard";
import { GoBackBtn, SectionTitle } from "../../../components";
import "./InterestSection.css";

const InterestSection = ({ data, handleGoBack }) => {
  return (
    <div className="interest_section">
      <SectionTitle title={data?.title} handleGoBack={handleGoBack} />
      <div className="interest_cards">
        {data?.interests.map((interest, index) => (
          <InterestCard interest={interest} key={index} />
        ))}
      </div>
      <div className="mobile_go_back_container">
        <GoBackBtn handleGoBack={handleGoBack} />
      </div>
    </div>
  );
};

export default React.memo(InterestSection);
