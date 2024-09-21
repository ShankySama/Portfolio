import React from "react";
import InterestCard from "./InterestCard";
import { SectionTitle } from "../../../components";
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
    </div>
  );
};

export default React.memo(InterestSection);
