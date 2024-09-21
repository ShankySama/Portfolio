import React from "react";

const InterestCard = ({interest}) => {
  return (
    <div className="interest_card">
      <h2>{interest?.title}</h2>
      <div>
        <p>
         {interest?.description}
        </p>
      </div>
    </div>
  );
};

export default React.memo(InterestCard);
