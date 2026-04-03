import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import AboutProfileSection from './components/sections/AboutProfileSection'
import SkillsSection from './components/sections/SkillsSection'
import ServicesSection from './components/sections/ServicesSection'
import ServiceDetailsModal from './components/sections/ServiceDetailsModal'
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

      <ServiceDetailsModal isOpen={isModalOpen} onClose={closeModal} serviceType={modalType} />
    </div>
  )
}

export default App
