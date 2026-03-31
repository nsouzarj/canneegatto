import React from 'react';
import logo from '../assets/logocanneegatto.jpg';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--primary-brown)', 
      color: 'var(--white)',
      padding: '80px 0 40px'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        marginBottom: '60px'
      }}>
        <div className="footer-brand">
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 600, 
              color: 'var(--white)',
              letterSpacing: '-1px',
              textTransform: 'lowercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              canne <span style={{ color: 'var(--primary-green)', fontSize: '0.85em', fontWeight: 400, opacity: 0.9 }}>&</span> gatto
            </h3>
          </div>
          <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>
            Seu hospital veterinário 24h na Tijuca. <br/>
            Cuidado especializado com o conforto <br/> 
            que o seu melhor amigo merece.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
            <a 
              href="https://www.instagram.com/cannegatto/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--white)', opacity: 0.8, transition: '0.3s' }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              title="Siga-nos no Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href="https://www.facebook.com/cannegattooficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--white)', opacity: 0.8, transition: '0.3s' }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.8}
              title="Siga-nos no Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-contact">
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Fale Conosco 24h</h4>
          <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>WhatsApp Clínica:</p>
          <p style={{ fontWeight: 700, marginBottom: '1rem' }}>21 99258-9556</p>
          
          <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Telefones:</p>
          <p style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: '1.8' }}>
            (21) 2213-1923 <br/>
            (21) 3547-5734 <br/>
            (21) 2293-0953
          </p>
        </div>
        
        <div className="footer-location">
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Localização</h4>
          <p style={{ opacity: 0.8, lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Rua Pereira de Siqueira, 72<br/>
            Tijuca, Rio de Janeiro - RJ<br/>
            CEP: 20511-280
          </p>
          <div style={{ 
            width: '100%', 
            height: '180px', 
            borderRadius: '20px', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: '2px solid rgba(255,255,255,0.1)',
            marginBottom: '1.5rem'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.341113524584!2d-43.2268752!3d-22.919246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fad0c08bca9%3A0xc3f8e569562507f8!2sR.%20Pereira%20de%20Siqueira%2C%2072%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020511-280!5e0!3m2!1spt-BR!2sbr!4v1711893000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Cursos & Radiologia (WhatsApp):</p>
          <p style={{ fontWeight: 700 }}>21 99844-8882</p>
        </div>
      </div>
      
      <div className="container" style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '30px',
        textAlign: 'center',
        opacity: 0.6,
        fontSize: '0.85rem'
      }}>
        &copy; {new Date().getFullYear()} Canne & Gatto Veterinária Ltda. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
