import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Specialties from './components/Specialties';
import DNA from './components/DNA';
import Footer from './components/Footer';

// Banner asset use
import bannerImg from './assets/555386150_18404571220142834_8556003576946577561_n.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <DNA />
        <Services />
        <Specialties />
        
        <section id="cursos" style={{ 
          padding: 'var(--section-padding)',
          background: 'var(--primary-brown)',
          color: 'var(--white)'
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="badge" style={{ backgroundColor: 'var(--secondary-peach)', color: 'white', marginBottom: '1.5rem' }}>
              FOCO EM CARREIRA
            </span>
            <h3 className="cursos-title" style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
              Curso de <span style={{ color: 'var(--primary-green)' }}>Ultrassonografia</span>
            </h3>
            <p className="cursos-desc" style={{ marginBottom: '3.5rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
              Cursos teóricos e práticos de Ultrassonografia Digital e Medicina de Felinos. 
              Referência regional em ensino veterinário de alta tecnologia.
            </p>
            <div className="cursos-banner" style={{
              maxWidth: '800px',
              margin: '4rem auto',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              border: '2px solid rgba(255,255,255,0.1)'
            }}>
              <img 
                src={bannerImg} 
                alt="Curso de Ultrassonografia Canne & Gatto" 
                style={{ 
                  width: '100%', 
                  display: 'block'
                }} 
              />
            </div>
            <div style={{ marginTop: '3rem' }}>
              <a 
                href="https://wa.me/5521998448882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary cursos-btn" 
                style={{ 
                  backgroundColor: 'var(--primary-green)', 
                  border: 'none',
                  padding: '1.2rem 2.8rem',
                  fontSize: '1.1rem',
                  fontWeight: 700
                }}
              >
                Inscrições Abertas via WhatsApp
              </a>
            </div>
          </div>

          <style>{`
            .cursos-title { font-size: 3rem; }
            .cursos-desc { font-size: 1.2rem; }
            
            @media (max-width: 768px) {
              .cursos-title { font-size: 2.2rem; }
              .cursos-desc { font-size: 1.1rem; margin-bottom: 2rem !important; }
              .cursos-banner { margin: 2rem auto !important; border-radius: 20px; }
              .cursos-btn { padding: 1rem 1.5rem !important; font-size: 1rem !important; width: auto !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
