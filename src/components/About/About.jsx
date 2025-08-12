import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>Olá, eu sou a<br />Maria Paula! 👋</h1>
            <p className="about-subtitle">
              Sou formada pela <strong>Universidade Federal de Alagoas (UFAL)</strong>
            </p>
            <p className="about-description">
              Desenvolvedora júnior com base sólida em HTML, CSS e JavaScript. 
              Sou apaixonada por criar soluções eficientes tanto no front-end 
              quanto no back-end, utilizando tecnologias como React e Node.js.
            </p>
            <button className="contact-btn">Contato</button>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="avatar">👩🏾‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
