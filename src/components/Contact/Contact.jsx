import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entrarei em contato em breve.');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-avatar">
              <div className="avatar">👩🏾‍💻</div>
            </div>
            <div className="contact-text">
              <h3>Você tem um novo projeto?</h3>
              <p>
                Entre em contato comigo e vamos desenvolver sua ideia!
              </p>
              <button className="contact-main-btn" onClick={() => document.getElementById('contact-form').scrollIntoView()}>
                Entre em contato
              </button>
            </div>
          </div>
          
          <div className="contact-links">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>E-mail</h4>
                <p>maria@exemplo.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Telefone</h4>
                <p>(82) 9999-9999</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <p>maria-paula-dev</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div>
                <h4>GitHub</h4>
                <p>maria-dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
