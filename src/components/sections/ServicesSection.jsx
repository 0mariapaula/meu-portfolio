import { portfolioCopy } from '../../data/portfolioCopy'

function ServicesSection({ onOpenModal }) {
  return (
    <div id="servicos" className="services-section">
      <div className="container">
        <h2>{portfolioCopy.services.title}</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>{portfolioCopy.services.frontendCardTitle}</h3>
            <p>{portfolioCopy.services.frontendCardDescription}</p>
            <button className="btn-secondary" onClick={() => onOpenModal(portfolioCopy.services.frontendType)}>
              {portfolioCopy.services.viewMore}
            </button>
          </div>
          <div className="service-card">
            <div className="service-icon">🗄️</div>
            <h3>{portfolioCopy.services.backendCardTitle}</h3>
            <p>{portfolioCopy.services.backendCardDescription}</p>
            <button className="btn-secondary" onClick={() => onOpenModal(portfolioCopy.services.backendType)}>
              {portfolioCopy.services.viewMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
