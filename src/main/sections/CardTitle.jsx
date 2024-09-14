import React from "react";

const CardTitle = ({ title }) => {
  return <h2 className="section_cards_title"><p>{title}</p></h2>;
};

export default React.memo(CardTitle);
