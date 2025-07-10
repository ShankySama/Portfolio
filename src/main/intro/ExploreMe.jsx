import React from "react";
import { motion } from "motion/react";

const ExploreMe = ({ exploreMe, handleExploreMeClick }) => {
  return (
    <div>
      <motion.button 
        className="explore_more_btn" 
        onClick={handleExploreMeClick}
        whileHover={{ 
          scale: 1.1,
          y: -3,
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          duration: 0.2
        }}
      >
        <h3 className="explore_me_text">{exploreMe}</h3>
      </motion.button>
    </div>
  );
};

export default ExploreMe;
