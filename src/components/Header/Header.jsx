import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#projects">Portfólio</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
