import React from 'react';
import internacaoImg from '../assets/495570854_18386226373142834_8711678555453242813_n.jpg';
import laboratorioImg from '../assets/496806080_18386226382142834_7214299807952703891_n.jpg';
import emergenciaImg from '../assets/496241509_18386226346142834_6380754251669406671_n.jpg';
import cirurgiaImg from '../assets/496390459_18386226370142834_6406922100051470532_n.jpg';
import imagemImg from '../assets/495958199_18386226343142834_7334518725396936175_n.jpg';

const ServiceCard = ({ title, description, image, color }) => (
  <div style={{
    backgroundColor: 'var(--white)',
    borderRadius: '30px',
    overflow: 'hidden',
    padding: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    transition: 'var(--transition-smooth)',
    cursor: 'zoom-in',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  }}>
    <div style={{ 
      borderRadius: '20px', 
      overflow: 'hidden', 
      height: '350px',
      position: 'relative'
    }}>
      <img 
        src={image} 
        alt={`Serviço de ${title} - Clínica Canne & Gatto Veterinária na Tijuca`} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformOrigin: '50% 25%'
        }} 
        onMouseOver={e => e.currentTarget.style.transform = 'scale(2)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: 600,
        pointerEvents: 'none',
        color: 'var(--primary-brown)',
        zIndex: 10
      }}>
        Ampliar para ler
      </div>
    </div>
    <span className="badge" style={{ backgroundColor: color, color: 'white', alignSelf: 'start', fontSize: '1rem' }}>
      {title}
    </span>
    <p style={{ color: 'var(--text-dark)', fontSize: '1rem', fontWeight: 500, lineHeight: '1.5' }}>
      {description}
    </p>
  </div>
);

const Services = () => {
  return (
    <section id="servicos" className="bg-green" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          Cuidados <span style={{ color: 'var(--primary-brown)' }}>Especializados</span>
        </h2>
        
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          <ServiceCard 
            title="Emergência 24H"
            description="Atendimento emergencial prioritário em qualquer horário, com equipe clínica médica dedicada."
            image={emergenciaImg}
            color="#E15B5B"
          />
          <ServiceCard 
            title="Internação"
            description="Suporte 24h com ambientes diferenciados para gatos, garantindo segurança e conforto amigo."
            image={internacaoImg}
            color="var(--primary-green)"
          />
          <ServiceCard 
            title="Cirurgias"
            description="Procedimentos emergenciais e agendados com estrutura completa e cuidado intensivo."
            image={cirurgiaImg}
            color="var(--secondary-peach)"
          />
          <ServiceCard 
            title="Exames Laboratoriais"
            description="Análises de alta confiança para diagnósticos rápidos e precisão absoluta nos resultados."
            image={laboratorioImg}
            color="#6B8E23"
          />
          <ServiceCard 
            title="Diagnóstico por Imagem"
            description="Referência em Ultrassonografia Digital (Doppler) com tecnologia Versana Active VET para laudos de alta precisão."
            image={imagemImg}
            color="var(--primary-green)"
          />
        </div>
      </div>

      <style>{`
        .section-title { font-size: 3rem; color: var(--white); }
        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; margin-bottom: 2.5rem !important; }
          .services-grid { gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Services;
