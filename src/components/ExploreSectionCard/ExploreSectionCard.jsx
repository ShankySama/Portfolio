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
    <div
      className={`section_card ${className}`}
      onClick={() => handleExploreAllClick(card.title.toLowerCase())}
      title={card?.title}
    >
      <CardTitle title={card?.title} />
      <Avatar avatar={card?.avatar} icon={card?.icon} />
      <CardDescription description={card?.description} />
      <ExploreAll
        explore={card?.title}
        handleExploreAllClick={handleExploreAllClick}
      />
    </div>
  );
};
