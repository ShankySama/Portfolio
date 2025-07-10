import React from "react";
import { motion } from "motion/react";

const Card = ({ profile }) => {
  let anchorAttributes = {};
  if (profile?.type === "Gmail") {
    anchorAttributes = { href: "mailTo:" + profile.value };
  } else {
    anchorAttributes = {
      href: profile?.value,
      target: "_blank",
      rel: "noreferrer",
    };
  }
  
  return (
    <motion.a 
      className="card_link" 
      {...anchorAttributes}
      whileHover={{ 
        scale: 1.1,
        y: -3,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        duration: 0.2
      }}
    >
      <motion.div 
        className="card"
        whileHover={{ 
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <img
            src={profile?.icon}
            alt={profile?.alt}
            height={profile?.size}
            width={profile?.size}
          />
        </div>
        <div>
          <h3 className="type">{profile?.type}</h3>
        </div>
      </motion.div>
    </motion.a>
  );
};

export default React.memo(Card);
