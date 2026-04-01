import React from 'react';
import dnaImg from '../assets/496034552_18386226391142834_7682573530735195013_n.jpg';

const DNA = () => {
  return (
    <section id="sobre" style={{ 
      padding: 'var(--section-padding)', 
      backgroundColor: 'var(--bg-soft)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="dna-title" style={{ marginBottom: '4rem', color: 'var(--primary-brown)' }}>
          Há 15 Anos <span style={{ color: 'var(--primary-green)' }}>Cuidando com Amor</span>
        </h2>
        
        <div style={{
          position: 'relative',
          borderRadius: '40px',
          overflow: 'hidden',
          boxShadow: '0 20px 80px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={dnaImg} 
            alt="História da Canne & Gatto - Clínica Veterinária há 15 anos na Tijuca" 
            style={{ 
              width: '100%', 
              display: 'block'
            }} 
          />
        </div>
        
        <div className="dna-content" style={{ marginTop: '4rem', color: 'var(--text-muted)' }}>
          <p className="dna-text" style={{ marginBottom: '3rem' }}>
            Desde 2011, a Canne & Gatto se dedica a oferecer medicina veterinária de ponta na Tijuca. 
            Nossa abordagem une o carinho com a precisão tecnológica, tornando-nos referência em Diagnóstico por Imagem e Cursos de Ultrassonografia.
          </p>
          
          <div className="coord-card" style={{ 
            backgroundColor: 'var(--white)', 
            padding: '3rem', 
            borderRadius: '30px', 
            textAlign: 'left',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            borderLeft: '8px solid var(--secondary-peach)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <p style={{ fontWeight: 600, color: 'var(--primary-brown)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Coordenação Técnica
            </p>
            <h4 className="coord-name" style={{ fontWeight: 800, color: 'var(--primary-brown)', marginBottom: '0.5rem' }}>
              Dra. Adriene Firmo
            </h4>
            <p className="coord-spec" style={{ color: 'var(--primary-green)', fontWeight: 600, marginBottom: '1.5rem' }}>
              MV, Especialista — CRMV RJ 5302
            </p>
            <p className="coord-desc" style={{ lineHeight: '1.6', opacity: 0.9 }}>
              Especialista em Diagnóstico por Imagem e referência regional em Ultrassonografia Doppler e Medicina de Felinos. Coordenadora do Curso de Ultrassonografia Canne & Gatto.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .dna-title { font-size: 3rem; }
        .dna-text { font-size: 1.2rem; }
        .coord-name { font-size: 1.6rem; }
        .coord-spec { font-size: 1rem; }
        .coord-desc { font-size: 1rem; }

        @media (max-width: 768px) {
          .dna-title { font-size: 2.2rem; margin-bottom: 2.5rem !important; }
          .dna-content { margin-top: 2.5rem !important; }
          .dna-text { font-size: 1.1rem; margin-bottom: 2rem !important; }
          .coord-card { padding: 2rem !important; }
          .coord-name { font-size: 1.4rem; }
        }
      `}</style>
    </section>
  );
};

export default DNA;
