import React from "react";
import InterestCard from "./InterestCard";
import { SectionTitle } from "../../../components";
import "./InterestSection.css";

const InterestSection = ({ handleGoBack }) => {
  return (
    <div className="interest_section">
      <SectionTitle title={"Interests"} handleGoBack={handleGoBack}/>
      <div className="interest_cards">
      <InterestCard />
      </div>
    </div>
  );
};

export default React.memo(InterestSection);
