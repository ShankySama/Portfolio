import React from "react";
import { ExploreSectionCard } from "../../../components";
import "./Section.css";
import src from "../../../assets/images/skills_avatar.png";

const AllSection = ({ data, handleExploreAllClick }) => {
  return (
    <div className="section">
      {/* <div className="preLoader">
        <div className="item item_1">
          <p className="text">Skills</p>
        </div>
        <div className="item item_2">
          <p className="text">Projects</p>
        </div>
        <div className="item item_3">
          <p className="text">Experience</p>
        </div>
        <div className="item item_4">
          <p className="text">Interests</p>
        </div>
        <div className="item item_5">
          <img src={src} height={300} width={300}/>
        </div>
      </div> */}
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
