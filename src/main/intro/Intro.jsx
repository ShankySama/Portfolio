import React, { useState } from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import ExploreMe from "./ExploreMe";
import Skeleton from "react-loading-skeleton";
import "./Intro.css";

const Intro = ({ data, handleExploreMeClick }) => {
  const [loader, setLoader] = useState(true);
  return (
    <div className="intro_container">
      {/* <Skeleton height={40} width={"70%"} className="mb-1"/>
      <Skeleton height={30} width={"50%"} className="mb-2"/>
      <Skeleton height={70} width={"100%"} className="mb-2"/>
      <Skeleton height={50} width={"35%"}/> */}
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
