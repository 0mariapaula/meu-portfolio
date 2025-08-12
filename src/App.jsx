import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <div id="habilidades" className="skills-section">
          <div className="container">
            <h2>Habilidades</h2>
            <div className="skills-grid">
              <div className="skills-category">
                <h3>FRONTEND</h3>
                <div className="skills-icons">
                  <div className="skill-item">HTML</div>
                  <div className="skill-item">CSS</div>
                  <div className="skill-item">JavaScript</div>
                  <div className="skill-item">React</div>
                  <div className="skill-item">Vue</div>
                  <div className="skill-item">Angular</div>
                </div>
              </div>
              <div className="skills-category">
                <h3>BACKEND</h3>
                <div className="skills-icons">
                  <div className="skill-item">Node.js</div>
                  <div className="skill-item">Python</div>
                  <div className="skill-item">Java</div>
                  <div className="skill-item">PHP</div>
                  <div className="skill-item">MongoDB</div>
                  <div className="skill-item">MySQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="servicos" className="services-section">
          <div className="container">
            <h2>Serviços</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Front-End</h3>
                <p>Desenvolvimento de interfaces modernas e responsivas</p>
                <button className="btn-secondary">Veja Mais</button>
              </div>
              <div className="service-card">
                <div className="service-icon">🗄️</div>
                <h3>Back-End</h3>
                <p>Desenvolvimento de APIs e sistemas robustos</p>
                <button className="btn-secondary">Veja Mais</button>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
