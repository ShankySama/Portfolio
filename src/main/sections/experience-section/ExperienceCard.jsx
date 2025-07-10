import React from "react";
import { motion } from "motion/react";

const ExperienceCard = ({ experience, index = 0 }) => {
  return (
    <motion.div 
      className="experience_card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="experience_card_body">
        <motion.div 
          className="company_section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: (index * 0.1) + 0.2
          }}
        >
          <h2 className="company_name">{experience?.companyName}</h2>
          <div className="start_end_date">
            <span>
              {experience?.startData} - {experience?.endData}
            </span>
          </div>
          <div className="company_location">
            <span>{experience?.location}</span>
          </div>
          <p className="company_description">{experience?.description}</p>
        </motion.div>
        <motion.div 
          className="responsibility_section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: (index * 0.1) + 0.4
          }}
        >
          <h3 className="responsibility_heading">
            {experience?.responsibilities?.title}
          </h3>
          <div className="responsibilities">
            {experience?.responsibilities?.resp.map((resp, respIndex) => (
              <motion.li 
                key={respIndex} 
                className="item"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index * 0.1) + 0.6 + (respIndex * 0.05)
                }}
              >
                {resp}
              </motion.li>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default React.memo(ExperienceCard);
