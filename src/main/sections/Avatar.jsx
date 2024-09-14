import React from "react";
import skills_avatar from "../../assets/images/skills_avatar.png";
import projects_avatar from "../../assets/images/projects_avatar.png";
import experience_avatar from "../../assets/images/experience_avatar.png";
import interest_avatar from "../../assets/images/interest_avatar.png";

const Avatar = ({ avatar, index }) => {
  const avatars = [
    skills_avatar,
    projects_avatar,
    experience_avatar,
    interest_avatar,
  ];
  return (
    <div className="avatar_container">
      <img src={avatars[index]} {...avatar} alt={avatar.alt} />
    </div>
  );
};

export default React.memo(Avatar);
