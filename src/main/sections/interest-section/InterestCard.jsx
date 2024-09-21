import React from "react";

const InterestCard = () => {
  return (
    <div className="interest_card">
      <h2>Interest Name</h2>
      <div className="interest_card_body">
        <p>
          Pellentesque bibendum sagittis velit, in blandit diam ultricies et.
          Etiam euismod rutrum aliquam. Ut ex augue, lobortis et tellus eget,
          placerat iaculis magna. Suspendisse scelerisque ipsum nec urna porta,
          at aliquet mauris tristique. Aliquam pharetra consequat tellus, nec
          ullamcorper ante commodo eget. Vivamus tristique mattis leo ac
          malesuada. In sit amet urna nibh. Nullam tempor libero non elit tempus
          elementum.
        </p>
      </div>
    </div>
  );
};

export default React.memo(InterestCard);
