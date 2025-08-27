import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="hamburger-icon">☰</span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#habilidades" onClick={handleLinkClick}>Habilidades</a></li>
          <li><a href="#servicos" onClick={handleLinkClick}>Serviços</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Portfólio</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
        </ul>
        {menuOpen && <div className="menu-overlay" onClick={handleMenuToggle} />}
      </nav>
    </header>
  );
}

export default Header;
