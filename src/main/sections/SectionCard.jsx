import React from "react";
import CardTitle from "./CardTitle";
import Avatar from "./Avatar";
import CardDescription from "./CardDescription";
import ExploreAll from "./ExploreAll";

const SectionCard = ({ card, index, className,handleExploreAllClick }) => {
  return (
    <div className={`section_card ${className}`}>
      <CardTitle title={card.title} />
      <Avatar avatar={card.avatar} index={index} />
      <CardDescription description={card.description} />
      <ExploreAll explore={card.title} handleExploreAllClick={handleExploreAllClick}/>
    </div>
  );
};

export default React.memo(SectionCard);
