import Modal from '../shared/Modal'
import { frontendServices, backendServices } from '../../data/profileData'

function ServiceDetailsModal({ isOpen, onClose, serviceType }) {
  const isFrontend = serviceType === 'frontend'
  const title = isFrontend ? 'Servicos de Front-End' : 'Servicos de Back-End'
  const services = isFrontend ? frontendServices : backendServices

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <ul className="service-list">
        {services.map((service) => (
          <li key={service.title} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <div className="service-text">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default ServiceDetailsModal
