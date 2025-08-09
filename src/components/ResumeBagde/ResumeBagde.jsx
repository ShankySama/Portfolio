import './ResumeBadge.css'
import resume from '../../data/mainData/Pardeep-Singh-Rawat-Resume.pdf'

const ResumeBagde = () => {
  return (
    <div className="resume_bagde">
        <a href={resume} download>
        Download Resume
        </a>
    </div>
  )
}

export default ResumeBagde