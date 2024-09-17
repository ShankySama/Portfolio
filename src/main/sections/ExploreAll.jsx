import React from "react";

const ExploreAll = ({ explore, handleExploreAllClick }) => {
  return (
    <div className="card_explore_more_container">
      <button
        className="explore_all_btn"
        onClick={()=>handleExploreAllClick(explore)}
      >
        <p>Explore All {explore}</p>
      </button>
    </div>
  );
};

export default React.memo(ExploreAll);
