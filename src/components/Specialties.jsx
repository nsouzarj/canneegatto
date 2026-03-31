import React from 'react';
import specialtiesImg from '../assets/496664307_18386226367142834_6654686106336838771_n.jpg';

const specialtiesList = [
  { name: 'Medicina de Felinos', highlight: true },
  { name: 'Ultrassonografia Digital', highlight: true },
  { name: 'Oftalmologia' },
  { name: 'Endocrinologia' },
  { name: 'Oncologia' },
  { name: 'Ortopedia' },
  { name: 'Odontologia' },
  { name: 'Neurologia' },
  { name: 'Gastroenterologia' },
  { name: 'Cardiologia' },
  { name: 'Dermatologia' },
  { name: 'Hematologia' }
];

const Specialties = () => {
  return (
    <section id="especialidades" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--bg-soft)' }}>
      <div className="container specialties-container">
        <div className="specialties-image" style={{ 
          borderRadius: '30px', 
          overflow: 'hidden', 
          boxShadow: '10px 10px 40px rgba(0,0,0,0.05)',
          position: 'relative'
        }}>
          <img 
            src={specialtiesImg} 
            alt="Especialidades Veterinárias na Tijuca - Canne & Gatto" 
            style={{ 
              width: '100%', 
              display: 'block'
            }} 
          />
        </div>
        
        <div className="specialties-content">
          <h2 className="specialties-title" style={{ marginBottom: '1.5rem', color: 'var(--primary-brown)' }}>
            Nossas <span style={{ color: 'var(--primary-green)' }}>Especialidades</span>
          </h2>
          <p className="specialties-desc" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Contamos com um corpo clínico especializado para oferecer o melhor atendimento em diversas áreas da medicina veterinária.
          </p>
          <div className="specialties-grid">
            {specialtiesList.map((spec, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                color: spec.highlight ? 'var(--primary-brown)' : 'inherit',
                fontWeight: spec.highlight ? 800 : 500,
                fontSize: spec.highlight ? '1.05rem' : '0.9rem'
              }}>
                <span style={{ color: spec.highlight ? 'var(--secondary-peach)' : 'var(--primary-green)', fontSize: '1.1rem' }}>
                  {spec.highlight ? '★' : '•'}
                </span>
                {spec.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .specialties-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          background-color: var(--white);
          padding: 3rem;
          border-radius: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.05);
        }
        .specialties-title { font-size: 3rem; }
        .specialties-desc { font-size: 1.1rem; }
        .specialties-grid {
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 1rem;
        }

        @media (max-width: 991px) {
          .specialties-container { gap: 2rem; padding: 2rem; }
          .specialties-title { font-size: 2.22rem; }
        }

        @media (max-width: 768px) {
          .specialties-container {
            grid-template-columns: 1fr;
            text-align: center;
            border-radius: 30px;
            padding: 1.5rem;
          }
          .specialties-grid {
            grid-template-columns: 1fr;
            text-align: left;
            max-width: 300px;
            margin: 0 auto;
          }
          .specialties-image { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Specialties;
