
import './Contact.css';
import Eu2 from '../../assets/images/Eu2.png';
import EmailIcon from '../../assets/icons/Email.png';
import TelefoneIcon from '../../assets/icons/Telefone.png';
import LinkedInIcon from '../../assets/icons/LinkedIn.png';
import GitHubIcon from '../../assets/icons/GitHub.png';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entrarei em contato em breve.');
  };

  return (
    <section id="contact" className="contact contact-figma">
      <div className="container contact-figma-container">
        <h2 className="contact-figma-title">Contato</h2>
        <div className="contact-figma-content">
          <div className="contact-figma-left">
            <h3 className="contact-figma-subtitle">Você tem um novo projeto ?</h3>
            <img src={Eu2} alt="Foto de Maria Paula" className="contact-figma-img" />
            <div className="contact-figma-caption-wrapper">
              <p className="contact-figma-desc">Vamos transformar sua ideia em realidade!<br/>Fale comigo e dê o próximo passo no seu projeto.</p>
            </div>
          </div>
          <div className="contact-figma-right">
            <ul className="contact-figma-list">
              <li className="contact-figma-item">
                <span className="contact-figma-icon">
                  <img src={EmailIcon} alt="E-mail" width={32} height={32} />
                </span>
                <span className="contact-figma-label">E-mail</span>
                <span className="contact-figma-info">0mariapaulaferreira@gmail.com</span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">
                  <img src={TelefoneIcon} alt="Telefone" width={32} height={32} />
                </span>
                <span className="contact-figma-label">Telefone</span>
                <span className="contact-figma-info">
                  <a href="https://wa.me/5582981274764?text=Oi,%20cheguei%20até%20você%20pelo%20seu%20portfólio%20🤓" target="_blank" rel="noopener noreferrer">
                    82 981274764
                  </a>
                </span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">
                  <img src={LinkedInIcon} alt="LinkedIn" width={32} height={32} />
                </span>
                <span className="contact-figma-label">LinkedIn</span>
                <span className="contact-figma-info"><a href="https://www.linkedin.com/in/0mariapaula/" target="_blank" rel="noopener noreferrer">linkedin.com/in/0mariapaula</a></span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">
                  <img src={GitHubIcon} alt="GitHub" width={32} height={32} />
                </span>
                <span className="contact-figma-label">GitHub</span>
                <span className="contact-figma-info"><a href="https://github.com/0mariapaula" target="_blank" rel="noopener noreferrer">github.com/0mariapaula</a></span>
              </li>
            </ul>
            {/* Botão removido conforme solicitado */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
