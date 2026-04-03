function ServicesSection({ onOpenModal }) {
  return (
    <div id="servicos" className="services-section">
      <div className="container">
        <h2>Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Front-End</h3>
            <p>Desenvolvimento de interfaces modernas e responsivas com foco na experiência do usuário</p>
            <button className="btn-secondary" onClick={() => onOpenModal('frontend')}>
              Ver Mais
            </button>
          </div>
          <div className="service-card">
            <div className="service-icon">🗄️</div>
            <h3>Back-End</h3>
            <p>Desenvolvimento de APIs e sistemas robustos, escaláveis e seguros</p>
            <button className="btn-secondary" onClick={() => onOpenModal('backend')}>
              Ver Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
