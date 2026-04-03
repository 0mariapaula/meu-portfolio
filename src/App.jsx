import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Modal from './components/shared/Modal'
import AboutProfileSection from './components/sections/AboutProfileSection'
import SkillsSection from './components/sections/SkillsSection'
import ServicesSection from './components/sections/ServicesSection'
import {
  frontendServices,
  backendServices
} from './data/profileData'
import euImage from './assets/images/Eu.png'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

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
        <AboutProfileSection profileImage={euImage} />
        <SkillsSection />
        <ServicesSection onOpenModal={openModal} />
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
