import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Modal from './components/shared/Modal'
import {
  aboutParagraphs,
  frontendSkills,
  backendSkills,
  frontendServices,
  backendServices
} from './data/profileData'
import euImage from './assets/images/Eu.png'
import './App.css'

function App() {
  const [showAllFrontend, setShowAllFrontend] = useState(false)
  const [showAllBackend, setShowAllBackend] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const displayedFrontendSkills = showAllFrontend ? frontendSkills : frontendSkills.slice(0, 4)
  const displayedBackendSkills = showAllBackend ? backendSkills : backendSkills.slice(0, 4)

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType('')
  }
  return (
    <div className="App">
      {/* Esconde o Header quando o modal está aberto */}
      {!isModalOpen && <Header />}
      <main>
        <About />
        <div id="sobre" className="sobre-section">
          <div className="container">
            <div className="sobre-content">
              <div className="sobre-image">
                <div className="profile-circle">
                  <img src={euImage} alt="Maria Paula" className="sobre-profile-img" />
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
        <div className="skills-section-divider-wrapper">
          <hr className="fullwidth-divider" aria-hidden="true" />
        </div>
        <div id="habilidades" className="skills-section">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <div className="skills-category">
                <h3 className="skills-title-glow">
                  FRONTEND
                </h3>
                <div className="skills-icons">
                  {displayedFrontendSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="ver-mais-btn"
                  onClick={() => setShowAllFrontend(!showAllFrontend)}
                >
                  {showAllFrontend ? 'Ver menos' : 'Ver mais'}
                </button>
              </div>
              <div className="skills-category">
                <h3 className="skills-title-glow">
                  BACKEND
                </h3>
                <div className="skills-icons">
                  {displayedBackendSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="ver-mais-btn"
                  onClick={() => setShowAllBackend(!showAllBackend)}
                >
                  {showAllBackend ? 'Ver menos' : 'Ver mais'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="servicos" className="services-section">
          <div className="container">
            <h2>Serviços</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Front-End</h3>
                <p>Desenvolvimento de interfaces modernas e responsivas com foco na experiência do usuário</p>
                <button 
                  className="btn-secondary"
                  onClick={() => openModal('frontend')}
                >
                  Ver Mais
                </button>
              </div>
              <div className="service-card">
                <div className="service-icon">🗄️</div>
                <h3>Back-End</h3>
                <p>Desenvolvimento de APIs e sistemas robustos, escaláveis e seguros</p>
                <button 
                  className="btn-secondary"
                  onClick={() => openModal('backend')}
                >
                  Ver Mais
                </button>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <Contact />
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={modalType === 'frontend' ? 'Serviços de Front-End' : 'Serviços de Back-End'}
      >
        <ul className="service-list">
          {(modalType === 'frontend' ? frontendServices : backendServices).map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-text">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  )
}

export default App
