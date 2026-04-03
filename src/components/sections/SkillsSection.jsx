import { useState } from 'react'
import { frontendSkills, backendSkills } from '../../data/profileData'
import { portfolioCopy } from '../../data/portfolioCopy'

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
          <h2>{portfolioCopy.skills.title}</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3 className="skills-title-glow">{portfolioCopy.skills.frontendTitle}</h3>
              <div className="skills-icons">
                {displayedFrontendSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <button className="ver-mais-btn" onClick={() => setShowAllFrontend(!showAllFrontend)}>
                {showAllFrontend ? portfolioCopy.skills.showLess : portfolioCopy.skills.showMore}
              </button>
            </div>

            <div className="skills-category">
              <h3 className="skills-title-glow">{portfolioCopy.skills.backendTitle}</h3>
              <div className="skills-icons">
                {displayedBackendSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              <button className="ver-mais-btn" onClick={() => setShowAllBackend(!showAllBackend)}>
                {showAllBackend ? portfolioCopy.skills.showLess : portfolioCopy.skills.showMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsSection
