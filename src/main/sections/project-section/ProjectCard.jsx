import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectCard = ({ project, index = 0 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const frontendTechs = project?.techUsed?.techs?.frontend?.techs || [];
  const backendTechs = project?.techUsed?.techs?.backend?.techs || [];

  return (
    <>
      <motion.article
        className="project_card"
        variants={cardVariants}
      >
        <div className="project_card_body">
          <div className="project_overview">
            <div className="project_title_row">
              <span className="project_index">0{index + 1}</span>
              <h2 className="project_title">{project?.title}</h2>
            </div>
            <p className="project_card_description">{project?.description}</p>
            <motion.a
              href={project?.projectLink?.link}
              className="project_link"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="project_link_btn">
                <b>{project?.projectLink?.title}</b>
                <img
                  src={project?.projectLink?.linkIcon}
                  height={20}
                  width={20}
                  alt="link_icon"
                />
              </span>
            </motion.a>
            <div className="project_ss_section">
              {
                project?.projectSS.map((ss, ssIndex) => (
                  <motion.button
                    type="button"
                    className="project_ss_item" 
                    key={ssIndex}
                    layoutId={`project-${index}-image-${ssIndex}`}
                    whileHover={{ 
                      scale: 1.1,
                      zIndex: 10,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30 
                    }}
                    onClick={() => setSelectedImage({ src: ss, index: ssIndex, projectIndex: index })}
                    aria-label={`Open ${project?.title} screenshot ${ssIndex + 1}`}
                  >
                    <motion.img 
                      src={ss} 
                      alt="project-image" 
                      height={200} 
                      width={200}
                      layoutId={`project-${index}-img-${ssIndex}`}
                      style={{ borderRadius: "8px" }}
                    />
                  </motion.button>
                ))
              }
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: (index * 0.1) + 0.2
            }}
          >
            <div className="project_tech_section">
              <div className="technology_section">
                <div className="myrole_section">
                  <h3 className="subHeading">{project?.rolesAndResp?.title}</h3>
                  <ul className="project_sub_card project_role_list">
                    {project?.rolesAndResp?.rolesAndResp.map((item, index) => (
                      <li key={index} className="item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="technology_section">
                <div className="technologies">
                  <h3 className="subHeading">{project?.techUsed?.title}</h3>
                  <div className="project_sub_card">
                    <div className="tech_type">
                      <h3 className="techHeading">
                        {project?.techUsed?.techs?.frontend?.title}
                      </h3>
                      <div className="tech_chip_group">
                        {frontendTechs.map((tech) => (
                          <span className="tech_chip" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="tech_type">
                      <h3 className="techHeading">
                        {project?.techUsed?.techs?.backend?.title}
                      </h3>
                      <div className="tech_chip_group">
                        {backendTechs.map((tech) => (
                          <span className="tech_chip" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="teams">
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
          </motion.div>
        </div>
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "pointer"
            }}
          >
            <motion.div
              layoutId={`project-${selectedImage.projectIndex}-image-${selectedImage.index}`}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                cursor: "pointer"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage.src}
                alt="project-image-modal"
                layoutId={`project-${selectedImage.projectIndex}-img-${selectedImage.index}`}
                style={{
                  width: "100%",
                  height: "60vh",
                  objectFit: "contain",
                  borderRadius: "12px",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(ProjectCard);
