import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutCards from '../components/AboutCards';
import LogoCarousel from '../components/LogoCarousel';
import './Home.css';

function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home">
      <HeroSection />

      <section className="section about">
        <div className="container">
          <div className="about-content-premium animate-on-scroll">
            <div className="about-left">
              <h2>Sobre Baboon Technologies</h2>
              <p className="about-paragraph">
                Somos una startup tecnológica especializada en Inteligencia Artificial aplicada a empresas, reconocida oficialmente como Startup por ENISA. Operamos en España con más de 80 socios estratégicos y desarrollamos soluciones que transforman la manera en que empresas e inversores gestionan sus operaciones.
              </p>
              <p className="about-paragraph">
                Ayudamos a empresas a eliminar la carga administrativa procesando automáticamente sus documentos de todo tipo, integrándolos directamente en sus sistemas. Además, ofrecemos tecnología financiera combinada con una comunidad activa orientada a la creación de valor a largo plazo.
              </p>
              <div className="company-nif">
                <span className="nif-label">NIF</span>
                <span className="nif-value">B67725028</span>
              </div>
            </div>
            <div className="about-right">
              <AboutCards />
            </div>
          </div>
        </div>
      </section>


      <section className="section solutions">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Nuestras Soluciones</h2>
          <div className="solutions-grid">
            <div className="solution-card-new animate-on-scroll">
              <img src="/SVIBolt.png" alt="SVI" className="solution-image-new" />
              <div className="solution-overlay-new"></div>
              <div className="solution-content-new">
                <h3 className="solution-title-new">SVI</h3>
                <p className="solution-desc-new">Software financiero avanzado con integración inteligente y automatización de flujos críticos.</p>
                <a href="https://svinvesting.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Saber más
                </a>
              </div>
            </div>

            <div className="solution-card-new animate-on-scroll">
              <img src="/AutoDocBolt.png" alt="AutoDoc" className="solution-image-new" />
              <div className="solution-overlay-new"></div>
              <div className="solution-content-new">
                <h3 className="solution-title-new">AutoDoc</h3>
                <p className="solution-desc-new">Sistema de IA diseñado para empresas que automatiza el procesamiento documental con alta precisión y aprendizaje continuo.</p>
                <a href="https://autodoc.solutions/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt partners-section">
        <div className="container">
          <div className="partners-header animate-on-scroll">
            <h2>Con quienes trabajamos</h2>
            <p className="partners-description">
              Contamos con una red sólida de partners y clientes estratégicos que forman parte del crecimiento y desarrollo de Baboon Technologies.
            </p>
          </div>
        </div>
        <LogoCarousel />
      </section>

      <section className="cta-section">
        <div className="cta-gradient"></div>
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Estamos aquí para ayudarte</h2>
            <Link to="/contacto" className="btn btn-primary btn-lg">
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
