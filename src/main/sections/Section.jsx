import React from "react";
import SectionCard from "./SectionCard";
import "./Section.css";

const Section = ({ data }) => {
  return (
    <div className="section">
      <div className="cards_section">
        {data.cards.map((card, index) => (
          <SectionCard card={card} key={index} className={`card_${index+1}`}/>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Section);
