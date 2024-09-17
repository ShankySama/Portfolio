import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import ExploreMe from "./ExploreMe";
import "./Intro.css";

const Intro = ({ data, handleExploreMeClick }) => {
  return (
    <div className="intro_container">
      <Title title={data.title} />
      <SubTitle subTitle={data.subTitle} />
      <Description description={data.description} />
      <ExploreMe
        exploreMe={data.exploreMe}
        handleExploreMeClick={handleExploreMeClick}
      />
    </div>
  );
};

export default React.memo(Intro);
