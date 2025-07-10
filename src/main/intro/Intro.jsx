import React from "react";
import { motion } from "motion/react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import ExploreMe from "./ExploreMe";
import "./Intro.css";

const Intro = ({ data, handleExploreMeClick }) => {
  return (
    <motion.div 
      className="intro_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Title title={data.title} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SubTitle subTitle={data.subTitle} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Description description={data.description} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ExploreMe
          exploreMe={data.exploreMe}
          handleExploreMeClick={handleExploreMeClick}
        />
      </motion.div>
    </motion.div>
  );
};

export default React.memo(Intro);
