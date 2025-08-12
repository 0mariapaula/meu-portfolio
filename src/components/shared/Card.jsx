function Card({ project }) {
  const { title, description, technologies, link } = project;

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="card-actions">
          <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
