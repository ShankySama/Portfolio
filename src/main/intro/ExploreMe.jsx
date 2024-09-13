import React from "react";

const ExploreMe = ({ exploreMe, handleExploreMeClick }) => {
  return (
    <div>
      <button className="explore_more_btn" onClick={handleExploreMeClick}>
        <h3 className="explore_me_text">{exploreMe}</h3>
      </button>
    </div>
  );
};

export default ExploreMe;
