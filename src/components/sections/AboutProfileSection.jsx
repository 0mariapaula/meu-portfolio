import { aboutParagraphs } from '../../data/profileData'
import { portfolioCopy } from '../../data/portfolioCopy'

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
              {portfolioCopy.about.downloadCv}
            </a>
          </div>
          <div className="sobre-text">
            <h2>{portfolioCopy.about.title}</h2>
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
