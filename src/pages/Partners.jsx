import { useEffect } from 'react';
import './Partners.css';

function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">Partners y Socios</h1>
          <p className="lead fade-in">Una red sólida de más de 67 colaboradores estratégicos</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-content slide-up">
            <h2>Nuestra Red de Socios</h2>
            <p>
              En Baboon Technologies creemos firmemente en el poder de la colaboración. Nuestra red de más de 67 socios estratégicos nos permite ofrecer soluciones integrales y adaptadas a las necesidades específicas de cada sector y cliente.
            </p>
            <p>
              Trabajamos con empresas tecnológicas, consultoras especializadas, integradores de sistemas y expertos en diversos sectores industriales para garantizar que nuestras soluciones de IA se implementen de manera efectiva y generen el máximo valor.
            </p>
          </div>

          <div className="stats-grid slide-up">
            <div className="stat-card">
              <div className="stat-number">67+</div>
              <div className="stat-label">Socios Estratégicos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Compromiso con la Calidad</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">España</div>
              <div className="stat-label">Cobertura Nacional</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="benefits-content slide-up">
            <h2>Beneficios de Nuestra Red</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Experiencia Sectorial</h3>
                <p>Acceso a conocimiento especializado en múltiples industrias y sectores.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <h3>Soporte Integral</h3>
                <p>Cobertura completa desde la implementación hasta el soporte continuo.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3>Innovación Continua</h3>
                <p>Colaboración constante para desarrollar nuevas soluciones y capacidades.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Escalabilidad</h3>
                <p>Capacidad para gestionar proyectos de cualquier tamaño y complejidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="partners-showcase slide-up">
            <h2>Nuestros Colaboradores</h2>
            <div className="partners-grid">
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
              <div className="partner-placeholder">
                <div className="partner-logo-placeholder">
                  <span>Logo</span>
                </div>
              </div>
            </div>
            <p className="partners-note">Espacio preparado para añadir logos de partners</p>
          </div>
        </div>
      </section>

      <section className="section-dark cta-section">
        <div className="container">
          <div className="cta-content slide-up">
            <h2>Conviértete en nuestro socio</h2>
            <p>Únete a nuestra red de colaboradores estratégicos y crezcamos juntos</p>
            <a href="/contacto" className="btn btn-primary">
              Contacta con nosotros
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
