import React, { useState } from 'react';
import logo from '../assets/logocanneegatto.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '0.6rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{ height: '45px', display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Logo Canne & Gatto - Clínica Veterinária 24h na Tijuca" 
            style={{ 
              height: '100%', 
              width: 'auto', 
              display: 'block',
              objectFit: 'contain'
            }} 
          />
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            fontSize: '1.5rem',
            color: 'var(--primary-brown)'
          }}
          className="mobile-toggle"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center' 
        }} className={isMenuOpen ? 'nav-open' : 'nav-desktop'}>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.9rem' }}>Serviços</a>
          <a href="#especialidades" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.9rem' }}>Especialidades</a>
          <a href="#cursos" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, fontSize: '0.9rem' }}>Curso de Ultrassonografia</a>
          <span className="badge desktop-only" style={{ backgroundColor: 'var(--secondary-peach)', color: 'white' }}>
            24 horas
          </span>
          <a href="https://wa.me/5521992589556" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
            WhatsApp
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-toggle { display: block !important; }
          .nav-desktop { display: none !important; }
          .nav-open {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--bg-soft);
            padding: 2rem;
            flex-direction: column;
            gap: 1.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-top: 1px solid var(--glass-border);
          }
          .nav-open a { width: 100%; text-align: center; font-size: 1.2rem !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
