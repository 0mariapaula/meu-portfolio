import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Modal from './components/shared/Modal'
import euImage from './assets/images/Eu.png'
import './App.css'

function App() {
  const [showAllFrontend, setShowAllFrontend] = useState(false)
  const [showAllBackend, setShowAllBackend] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const frontendSkills = [
    { icon: "🌐", name: "HTML" },
    { icon: "🎨", name: "CSS" },
    { icon: "⚡", name: "JavaScript" },
    { icon: "⚛️", name: "React" },
    { icon: "📝", name: "TypeScript" },
    { icon: "📱", name: "React Native" },
    { icon: "💚", name: "Vue.js" },
    { icon: "🎯", name: "Figma" },
    { icon: "🖼️", name: "UI Design" },
    { icon: "🔗", name: "API Integration" }
  ]

  const backendSkills = [
    { icon: "🟢", name: "Node.js" },
    { icon: "🐍", name: "Python" },
    { icon: "🗄️", name: "MariaDB" },
    { icon: "🐬", name: "MySQL" },
    { icon: "📊", name: "SQL" },
    { icon: "🌐", name: "APIs" },
    { icon: "🔥", name: "Firebase" },
    { icon: "⚙️", name: "Backend Dev" },
    { icon: "📮", name: "Postman" }
  ]

  const displayedFrontendSkills = showAllFrontend ? frontendSkills : frontendSkills.slice(0, 4)
  const displayedBackendSkills = showAllBackend ? backendSkills : backendSkills.slice(0, 4)

  const frontendServices = [
    { icon: "🔧", title: "Desenvolvimento de Funcionalidades", description: "Desenvolvimento de novas funcionalidades e componentes em projetos" },
    { icon: "🎨", title: "Interface do Usuário (UI)", description: "Desenvolvimento da interface do usuário (UI)" },
    { icon: "🔗", title: "Integração com APIs", description: "Integração com APIs" },
    { icon: "🐛", title: "Correção de Bugs", description: "Correção de bugs e problemas reportados por usuários" },
    { icon: "🌐", title: "Sistemas Web", description: "Desenvolvimento de sistemas web" },
    { icon: "📱", title: "Aplicativos Móveis", description: "Desenvolvimento de aplicativos móveis" },
    { icon: "🎯", title: "Prototipagem e Design", description: "Prototipagem e design de interface (UI/UX)" }
  ]

  const backendServices = [
    { icon: "⚙️", title: "Desenvolvimento de Funcionalidades", description: "Desenvolvimento de novas funcionalidades e componentes" },
    { icon: "🔥", title: "Funcionalidades Principais", description: "Implementação de funcionalidades principais em projetos" },
    { icon: "🌐", title: "Sistemas Web", description: "Desenvolvimento de sistemas web" },
    { icon: "🔗", title: "Integração com APIs", description: "Integração com APIs" },
    { icon: "👥", title: "Colaboração em Equipe", description: "Colaboração com equipes de back-end para implementar funcionalidades" },
    { icon: "🐛", title: "Correção de Bugs", description: "Correção de bugs e problemas reportados" },
    { icon: "🔔", title: "Sistemas de Notificações", description: "Implementação de sistemas de notificações" },
    { icon: "🗄️", title: "Sistemas Backend", description: "Desenvolvimento de sistemas backend" },
    { icon: "📡", title: "APIs Escaláveis", description: "Desenvolvimento de APIs escaláveis" },
    { icon: "🔄", title: "Desenvolvimento Full-Stack", description: "Desenvolvimento Full-Stack" },
    { icon: "☁️", title: "Arquitetura Serverless", description: "Trabalho com arquitetura serverless (com base na experiência com Firebase)" }
  ]

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
      <Header />
      <main>
        <About />
        <div id="sobre" className="sobre-section">
          <div className="container">
            <div className="sobre-content">
              <div className="sobre-image">
                <div className="profile-circle">
                  <img src={euImage} alt="Maria Paula" className="sobre-profile-img" />
                </div>
                <button className="download-cv-btn">Download CV</button>
              </div>
              <div className="sobre-text">
                <h2>Sobre mim</h2>
                <p>
                  Sou Maria Paula, uma desenvolvedora em formação com base sólida em 
                  Análise e Desenvolvimento de Sistemas. Minhas competências abrangem 
                  tanto o desenvolvimento front-end quanto o back-end, com foco em 
                  tecnologias como JavaScript, React, Node.js e Python. Minha experiência 
                  em back-end foi aplicada especialmente no projeto Conexão Sangue, onde 
                  fui responsável pela implementação de funcionalidades principais, como o 
                  cadastro de doadores e a integração com sistemas de notificações.
                </p>
                <p>
                  Durante meu período no Instituto Federal de Alagoas (IFAL), atuei em 
                  projetos práticos como o Plantour e o Conexão Sangue, aplicando 
                  conhecimentos em UX/UX e metodologias ágeis. Além disso, minha 
                  trajetória inclui capacitação intensiva na Residência em TIC BRISA e um 
                  estágio no Hospital Universitário Professor Alberto Antunes (HUPAA/UFAL). 
                  Sou apaixonada por tecnologia e busco desafios onde possa usar minhas 
                  habilidades para criar soluções eficientes e impactantes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="habilidades" className="skills-section">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <div className="skills-category">
                <h3>FRONTEND ⬇</h3>
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
                <h3>BACKEND ⬇</h3>
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
