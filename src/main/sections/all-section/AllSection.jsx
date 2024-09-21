import React from "react";
import { ExploreSectionCard } from "../../../components";
import "./Section.css";

const AllSection = ({ data, handleExploreAllClick }) => {
  return (
    <div className="section">
      <div className="cards_section">
        {data.cards.map((card, index) => (
          <ExploreSectionCard
            key={index}
            card={card}
            className={`card_${index + 1}`}
            handleExploreAllClick={handleExploreAllClick}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(AllSection);
