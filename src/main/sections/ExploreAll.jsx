import React from "react";

const ExploreAll = ({explore}) => {
  return (
    <div className="card_explore_more_container">
      <button className="explore_all_btn"><p>Explore All {explore}</p></button>
    </div>
  );
};

export default ExploreAll;
