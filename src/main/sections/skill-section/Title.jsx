import React from "react";

const Title = ({ title, handleGoBack }) => {
  return (
    <div className="skill_title_container">
      <h1>{title}</h1>
      <button className="go_back" onClick={()=>handleGoBack("all")}>
        <p className="go_back_text">Go back</p>
      </button>
    </div>
  );
};

export default React.memo(Title);
