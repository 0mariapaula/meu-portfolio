import { useState } from 'react'
import { frontendSkills, backendSkills } from '../../data/profileData'

function SkillsSection() {
  const [showAllFrontend, setShowAllFrontend] = useState(false)
  const [showAllBackend, setShowAllBackend] = useState(false)

  const displayedFrontendSkills = showAllFrontend ? frontendSkills : frontendSkills.slice(0, 4)
  const displayedBackendSkills = showAllBackend ? backendSkills : backendSkills.slice(0, 4)

  return (
    <>
      <div className="skills-section-divider-wrapper">
        <hr className="fullwidth-divider" aria-hidden="true" />
      </div>
      <div id="habilidades" className="skills-section">
        <div className="container">
          <h2>Habilidades</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="skills-title-glow">FRONTEND</h3>
              <div className="skills-icons">
                {displayedFrontendSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <button className="ver-mais-btn" onClick={() => setShowAllFrontend(!showAllFrontend)}>
                {showAllFrontend ? 'Ver menos' : 'Ver mais'}
              </button>
            </div>

            <div className="skills-category">
              <h3 className="skills-title-glow">BACKEND</h3>
              <div className="skills-icons">
                {displayedBackendSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <button className="ver-mais-btn" onClick={() => setShowAllBackend(!showAllBackend)}>
                {showAllBackend ? 'Ver menos' : 'Ver mais'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsSection
