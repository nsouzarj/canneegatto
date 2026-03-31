import React from 'react';
import logo from '../assets/logocanneegatto.jpg';
import heroImage from '../assets/495512351_18386226328142834_388493385060948216_n.jpg';

const Hero = () => {
  return (
    <section className="animate-fade hero-section" style={{
      padding: 'var(--section-padding)',
      background: 'var(--bg-soft)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      marginTop: '60px'
    }}>
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge" style={{ backgroundColor: 'var(--primary-green)', color: 'white', marginBottom: '1.5rem' }}>
            NOVIDADE
          </span>
          <div className="hero-logo-container" style={{ marginBottom: '1.5rem', height: '60px', display: 'flex', alignItems: 'center' }}>
            <img 
              src={logo} 
              alt="Canne & Gatto Logo" 
              style={{ 
                height: '100%', 
                width: 'auto',
                objectFit: 'contain'
              }} 
            />
          </div>
          <h1>
            Veterinária na <span style={{ color: 'var(--primary-green)' }}>Tijuca 24h</span>
          </h1>
          <p className="hero-text" style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
            Hospital Veterinário Canne & Gatto: Atendimento de excelência, <br className="desktop-only"/>
            especialidade em felinos e preços populares no Rio de Janeiro.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5521992589556" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
              Falar Conosco Agora
            </a>
            <a href="#servicos" className="glass" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
              Ver Serviços
            </a>
          </div>
        </div>
        
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--primary-green)',
            borderRadius: '30px',
            opacity: 0.1,
            zIndex: 0
          }}></div>
          <img 
            src={heroImage} 
            alt="Atendimento Veterinário Canne & Gatto - Cão Golden Retriever e Gato na Clínica" 
            style={{
              width: '100%',
              borderRadius: '30px',
              boxShadow: '15px 15px 40px rgba(0,0,0,0.1)',
              position: 'relative',
              zIndex: 1
            }} 
          />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          alignItems: center;
        }

        .hero-text { font-size: 1.4rem; }

        @media (max-width: 991px) {
          .hero-grid { gap: 2rem; }
          .hero-text { font-size: 1.2rem; }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-logo-container { justify-content: center; }
          .hero-btns { justify-content: center; }
          .hero-image { order: -1; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
