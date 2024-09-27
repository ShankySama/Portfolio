import React from "react";
import "./Section.css";
import src from "../../../assets/images/skills_avatar.png";

const AllSection = ({ data, handleExploreAllClick }) => {
  return (
    <div className="section">
      <div className="all_sections">
        {data.cards.map((card, index) => (
          <div
            className={`item item_${index + 1}`}
            key={index}
            onClick={() => handleExploreAllClick(card.title.toLowerCase())}
          >
            <p className="text">{card?.title}</p>
          </div>
        ))}
        <div className="item item_5">
          <img
            className="all_section_avatar"
            src={src}
            height={200}
            width={200}
            alt="avatar-icon"
          />
        </div>
      </div>
      {/* <div className="cards_section">
        {data.cards.map((card, index) => (
          <ExploreSectionCard
            key={index}
            card={card}
            className={`card_${index + 1}`}
            handleExploreAllClick={handleExploreAllClick}
          />
        ))}
      </div> */}
    </div>
  );
};

export default React.memo(AllSection);
