import { aboutParagraphs } from '../../data/profileData'

function AboutProfileSection({ profileImage }) {
  return (
    <div id="sobre" className="sobre-section">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-image">
            <div className="profile-circle">
              <img src={profileImage} alt="Maria Paula" className="sobre-profile-img" />
            </div>
            <a
              href="/Curriculo%20Atualizado.pdf"
              download
              className="download-cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="sobre-text">
            <h2>Sobre mim</h2>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} style={{ fontWeight: 'bold' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProfileSection
