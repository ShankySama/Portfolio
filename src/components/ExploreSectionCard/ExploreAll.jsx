import React from "react";

const ExploreAll = ({ explore }) => {
  return (
    <div className="card_explore_more_container">
      <button
        className="explore_all_btn"
      >
        <p className="explore_all_text">Explore All {explore}</p>
      </button>
    </div>
  );
};

export default React.memo(ExploreAll);
