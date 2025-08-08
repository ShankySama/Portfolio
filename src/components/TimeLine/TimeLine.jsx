export const TimeLine = ({ experience }) => {
  return (
    <div className="timeline-comp">
        <div className="timeline-card">
            <div>
              <a href={experience.link} target="_blank" rel="noreferrer">
              <img src={experience.logo} alt={experience.organisation} height={experience.logoSize} width={experience.logoSize} />
              </a>
            </div>
            <div>
            <h3>{experience.designation}</h3>
            <p>{experience.organisation}</p>
            <p>{experience.date}</p>
            </div>
        </div>
    </div>
  )
}