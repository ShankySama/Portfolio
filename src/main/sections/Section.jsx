import React from "react";
import SectionCard from "./SectionCard";
import "./Section.css";

const Section = ({ data,handleExploreAllClick }) => {
  return (
    <div className="section">
      <div className="cards_section">
        {data.cards.map((card, index) => (
          <SectionCard
            index={index}
            card={card}
            key={index}
            className={`card_${index + 1}`}
            handleExploreAllClick={handleExploreAllClick}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Section);
