import Modal from '../shared/Modal'
import { frontendServices, backendServices } from '../../data/profileData'
import { portfolioCopy } from '../../data/portfolioCopy'

function ServiceDetailsModal({ isOpen, onClose, serviceType }) {
  const isFrontend = serviceType === 'frontend'
  const title = isFrontend ? portfolioCopy.services.frontendModalTitle : portfolioCopy.services.backendModalTitle
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
