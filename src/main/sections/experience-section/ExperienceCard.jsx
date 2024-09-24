import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
      <div className="experience_card">
        <div className="experience_card_body">
          <div className="company_section">
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
          </div>
          <div className="responsibility_section">
            <h3 className="responsibility_heading">
              {experience?.responsibilities?.title}
            </h3>
            <div className="responsibilities">
              {experience?.responsibilities?.resp.map((resp, index) => (
                <li key={index} className="item">
                  {resp}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default React.memo(ExperienceCard);
