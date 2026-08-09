export const TimeLine = ({ experience }) => {
  return (
    <div className="timeline-comp">
      <span className="timeline-dot" aria-hidden="true" />
      <div className="timeline-card">
        <a
          className="timeline-logo-link"
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${experience.organisation}`}
        >
          <img
            className="timeline-logo"
            src={experience.logo}
            alt={experience.organisation}
            height={experience.logoSize}
            width={experience.logoSize}
          />
        </a>
        <div className="timeline-content">
          <h3>{experience.designation}</h3>
          <p className="timeline-organisation">{experience.organisation}</p>
          <p className="timeline-date">{experience.date}</p>
        </div>
      </div>
    </div>
  );
};
