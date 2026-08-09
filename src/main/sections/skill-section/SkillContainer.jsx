import React from "react";

const SkillContainer = ({ data, index = 0 }) => {
  return (
    <section className={`skill_container skill_container_${(index % 6) + 1}`}>
      <div className="skill_header">
        <h2>{data.title}</h2>
      </div>
      <div className="skill_icon_container">
        {data.skills.map((skill, index) => (
          <div className="skill_icon" key={index}>
            <div className="skill_icon_media">
              <img src={skill.icon} height={50} width={50} alt={skill.name} />
            </div>
            <h4 className="skill_name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(SkillContainer);
