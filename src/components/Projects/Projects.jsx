import './Projects.css';
import Card from '../shared/Card';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce desenvolvida com React e Node.js, incluindo sistema de pagamento e gestão de produtos.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "Aplicação de gerenciamento de tarefas com interface intuitiva e funcionalidades de colaboração em equipe.",
      technologies: ["Vue.js", "Express", "MySQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard interativo para visualização de dados meteorológicos com gráficos dinâmicos e previsões.",
      technologies: ["React", "Chart.js", "API"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Portfólio</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
