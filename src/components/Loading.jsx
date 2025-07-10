import React from "react";
import { motion } from "motion/react";

export const Loading = () => {
  const letters = ["L", "o", "a", "d", "i", "n", "g", ".", ".", "."];
  
  return (
    <motion.div 
      className="loading_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ "--i": index + 1 }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-20, 0, -20],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
