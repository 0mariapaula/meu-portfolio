
import { useEffect, useState, useRef } from 'react';
import './Projects.css';
import Card from '../shared/Card';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('https://api.github.com/users/0mariapaula/repos?sort=updated')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  const scrollTo = (idx) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[idx];
      if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handlePrev = () => {
    setCurrent((prev) => {
      const newIdx = Math.max(prev - 1, 0);
      scrollTo(newIdx);
      return newIdx;
    });
  };
  const handleNext = () => {
    setCurrent((prev) => {
      const newIdx = Math.min(prev + 1, repos.length - 1);
      scrollTo(newIdx);
      return newIdx;
    });
  };

  useEffect(() => {
    scrollTo(current);
    // eslint-disable-next-line
  }, [loading]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Portfólio</h2>
        {loading ? (
          <p style={{ color: '#fff', textAlign: 'center' }}>Carregando repositórios...</p>
        ) : (
          <div style={{ position: 'relative', width: '100%' }}>
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="carousel-arrow carousel-arrow-left"
              aria-label="Anterior"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M21.5 25L15.5 18L21.5 11" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div
              className="projects-carousel"
              ref={carouselRef}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: '2rem',
                padding: '1rem 0',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {repos.map((repo, idx) => (
                <div
                  key={repo.id}
                  style={{ minWidth: 350, maxWidth: 400, flex: '0 0 80%', scrollSnapAlign: 'center' }}
                >
                  <Card
                    project={{
                      title: repo.name,
                      description: repo.description || 'Sem descrição',
                      technologies: repo.topics && repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : []),
                      link: repo.html_url
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={current === repos.length - 1}
              className="carousel-arrow carousel-arrow-right"
              aria-label="Próximo"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#fff"/><path d="M14.5 11L20.5 18L14.5 25" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
