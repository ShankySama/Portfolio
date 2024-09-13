import React, { useState } from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import { Loading } from "../../components";
import ExploreMe from "./ExploreMe";
import "./Intro.css";

const Intro = ({ data }) => {
  const [loader, setLoader] = useState(false);

  const handleExploreMeClick = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, [3000]);
  };

  return (
    <div className="intro_container">
      {loader ? (
        <Loading />
      ) : (
        <>
          <Title title={data.title} />
          <SubTitle subTitle={data.subTitle} />
          <Description description={data.description} />
          <ExploreMe
            exploreMe={data.exploreMe}
            handleExploreMeClick={handleExploreMeClick}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(Intro);
