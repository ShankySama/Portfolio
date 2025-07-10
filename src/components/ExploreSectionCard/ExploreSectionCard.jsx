import { motion } from "motion/react";
import CardTitle from "./CardTitle";
import Avatar from "./Avatar";
import CardDescription from "./CardDescription";
import ExploreAll from "./ExploreAll";

export const ExploreSectionCard = ({
  card,
  className,
  handleExploreAllClick,
}) => {
  return (
    <motion.div
      className={`section_card ${className}`}
      onClick={() => handleExploreAllClick(card.title.toLowerCase())}
      title={card?.title}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.3
      }}
    >
      <CardTitle title={card?.title} />
      <Avatar avatar={card?.avatar} icon={card?.icon} />
      <CardDescription description={card?.description} />
      <ExploreAll
        explore={card?.title}
        handleExploreAllClick={handleExploreAllClick}
      />
    </motion.div>
  );
};
