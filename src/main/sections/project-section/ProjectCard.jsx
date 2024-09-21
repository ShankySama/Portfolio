import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project?.projectLink}
      className="project_link"
      target="_blank"
      rel="noreferrer"
      title={project.title}
    >
      <div className="project_card">
        <div className="project_card_body">
          <div>
            <h2 className="project_title">{project?.title}</h2>
            <p className="project_card_description">{project?.description}</p>
          </div>
          <div className="project_tech_section">
            <div className="myrole_section">
              <h3 className="subHeading">{project?.rolesAndResp?.title}</h3>
              <div className="project_sub_card">
                {project?.rolesAndResp?.rolesAndResp.map((item, index) => (
                  <li key={index} className="item">
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <div className="technology_section">
              <h3 className="subHeading">{project?.techUsed?.title}</h3>
              <div className="project_sub_card">
                <div className="tech_type">
                  <h3 className="techHeading">
                    {project?.techUsed?.techs?.frontend?.title}
                  </h3>
                  {project?.techUsed?.techs?.frontend?.techs.join(", ")}
                </div>
                <div className="tech_type">
                  <h3 className="techHeading">
                    {project?.techUsed?.techs?.backend?.title}
                  </h3>
                  {project?.techUsed?.techs?.backend?.techs.join(", ")}
                </div>
              </div>
            </div>
            <div className="team_section">
              <h3 className="subHeading">{project?.team?.title}</h3>
              <div className="project_sub_card">
                {project?.team?.members.map((member, index) => (
                  <div className="team_members" key={index}>
                    <span>{member.memberType}</span>
                    <span>{member.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectCard);
