import './About.css';
import euImage from '../../assets/images/Eu.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Desktop: lado a lado | Mobile: empilhado */}
          <div className="about-text">
            <h1>Olá, eu sou a<br />Maria Paula! 🌱</h1>
            <p className="about-subtitle">
              Um humilde mortal que se apaixonou perdidamente pelo mundo da tecnologia.
            </p>
            {/* Imagem só aparece aqui no mobile */}
            <div className="about-image-mobile">
              <div className="image-container">
                <img src={euImage} alt="Maria Paula" className="profile-image" />
              </div>
            </div>
            <p className="about-description">
              Desenvolvedora júnior com base sólida em HTML, CSS e JavaScript. <br/>
              Sou apaixonada por criar soluções eficientes tanto no front-end quanto no back-end, utilizando tecnologias como React e Node.js
            </p>
            <a href="#contact" className="contact-btn">Contato</a>
          </div>
          {/* Imagem só aparece aqui no desktop */}
          <div className="about-image-desktop">
            <div className="image-container">
              <img src={euImage} alt="Maria Paula" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
