
import './Contact.css';
import Eu2 from '../../assets/images/Eu2.png';

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
              <p className="contact-figma-desc">Vamos transformar sua ideia em realidade! Fale comigo e dê o próximo passo no seu projeto.</p>
          </div>
          <div className="contact-figma-right">
            <ul className="contact-figma-list">
              <li className="contact-figma-item">
                <span className="contact-figma-icon">{/* email */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F3F3F3"/><path d="M8 11L16 17L24 11" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="11" width="16" height="10" rx="2" stroke="#222" strokeWidth="2"/></svg>
                </span>
                <span className="contact-figma-label">E-mail</span>
                <span className="contact-figma-info">0mariapaulaferreira@gmail.com</span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">{/* telefone */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F3F3F3"/><path d="M22 21C21 22 19 24 16 24C13 24 11 22 10 21M12 15C12.5 14 14 12 16 12C18 12 19.5 14 20 15" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="contact-figma-label">Telefone</span>
                <span className="contact-figma-info">82 981274764</span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">{/* linkedin */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F3F3F3"/><g><rect x="10" y="10" width="12" height="12" rx="3" fill="#0077B5"/><path d="M13.5 22V15.5M13.5 15.5V15.51M16 22V19M16 19C16 18.4477 16.4477 18 17 18H18C18.5523 18 19 18.4477 19 19V22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
                </span>
                <span className="contact-figma-label">LinkedIn</span>
                <span className="contact-figma-info"><a href="https://www.linkedin.com/in/0mariapaula/" target="_blank" rel="noopener noreferrer">linkedin.com/in/0mariapaula</a></span>
              </li>
              <li className="contact-figma-item">
                <span className="contact-figma-icon">{/* github */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F3F3F3"/><path d="M20 21C19.5 20.5 18.5 19.5 17 19.5C15.5 19.5 14.5 20.5 14 21M12 13.5C12.5 14 13.5 15 15 15C16.5 15 17.5 14 18 13.5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="contact-figma-label">GitHub</span>
                <span className="contact-figma-info"><a href="https://github.com/0mariapaula" target="_blank" rel="noopener noreferrer">github.com/0mariapaula</a></span>
              </li>
            </ul>
            <div className="contact-figma-btn-wrapper">
              <button className="contact-main-btn contact-figma-btn" onClick={() => document.getElementById('contact-form')?.scrollIntoView()}>entre em contato</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
