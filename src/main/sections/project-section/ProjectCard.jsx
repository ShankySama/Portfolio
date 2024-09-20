import React from "react";

const ProjectCard = () => {
  return (
    <a href="/" className="project_link">
      <div className="project_card">
        <div className="project_card_body">
          <div>
            <h2 className="project_title">Tricera</h2>
            <p className="project_card_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vel nisi nec dolor imperdiet rhoncus. Nunc eu blandit lacus, non
              convallis nisi. Curabitur massa ex, laoreet at sapien quis,
              hendrerit convallis nisi. Proin vulputate mauris at ex cursus
              vehicula. Donec rutrum est sed vehicula consectetur. Fusce
              lobortis sapien vel nunc convallis tristique. Aliquam sollicitudin
              tellus a tellus ultrices, ac elementum libero scelerisque.
              Phasellus mattis vulputate pellentesque. Phasellus condimentum
              consequat erat.
            </p>
          </div>
          <div className="project_tech_section">
            <div className="myrole_section">
              <h3 className="subHeading">My Role and Responsibilies</h3>
              <li className="item">elerisque</li>
              <li className="item">Cart Module</li>
              <li className="item">pellentesque sed v</li>
              <li className="item">rutrum v</li>
              <li className="item">convallis v</li>
            </div>
            <div className="technology_section">
              <h3 className="subHeading">Technology Used</h3>
              <li className="item">psum dol</li>
              <li className="item">onsectetur </li>
              <li className="item">lobortis s</li>
            </div>
            <div className="team_section">
              <h3 className="subHeading">Team</h3>
              <li className="item">Backend: 1</li>
              <li className="item">Frontend: 2</li>
              <li className="item">QA: 2</li>
              <li className="item">Manger:1</li>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectCard);
