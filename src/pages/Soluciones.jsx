import { useEffect } from 'react';
import './Soluciones.css';

function Soluciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="soluciones">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">Nuestras Soluciones</h1>
          <p className="lead fade-in">Tecnología de IA aplicada a resultados reales</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-content slide-up">
            <h2>Soluciones Innovadoras de IA</h2>
            <p>
              En Baboon Technologies hemos desarrollado soluciones especializadas que combinan lo mejor de la Inteligencia Artificial con la experiencia del sector empresarial. Nuestros productos están diseñados para resolver problemas reales y generar valor medible desde el primer día.
            </p>
          </div>
        </div>
      </section>

      <section className="section solution-detail" id="svi">
        <div className="container">
          <div className="solution-wrapper slide-up">
            <div className="solution-header">
              <h2>SVI</h2>
              <p>Software financiero con integración avanzada y modelos inteligentes</p>
            </div>

            <div className="solution-body">
              <div className="solution-description">
                <h3>Descripción</h3>
                <p>
                  SVI es una plataforma financiera avanzada que integra modelos de Inteligencia Artificial para optimizar la gestión financiera empresarial. Diseñada para organizaciones que buscan automatizar y mejorar sus procesos financieros, SVI combina potencia, precisión y facilidad de uso.
                </p>
                <p>
                  Nuestra solución se integra perfectamente con sistemas ERP existentes, proporcionando capacidades analíticas avanzadas y automatización inteligente de procesos financieros críticos.
                </p>
              </div>

              <div className="solution-features">
                <h3>Características Principales</h3>
                <ul className="features-list">
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Integración avanzada con sistemas ERP</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Modelos predictivos de IA para análisis financiero</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Automatización de procesos contables</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Reporting inteligente y personalizable</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Detección automática de anomalías</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Análisis en tiempo real de flujos financieros</span>
                  </li>
                </ul>
              </div>

              <div className="solution-benefits">
                <h3>Beneficios</h3>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <h4>Reducción de errores</h4>
                    <p>Minimiza errores humanos en procesos financieros críticos</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Ahorro de tiempo</h4>
                    <p>Automatiza tareas repetitivas liberando recursos para análisis estratégico</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Mejor toma de decisiones</h4>
                    <p>Proporciona insights accionables basados en datos precisos</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Escalabilidad</h4>
                    <p>Crece con tu organización sin perder eficiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt solution-detail" id="autodoc">
        <div className="container">
          <div className="solution-wrapper slide-up">
            <div className="solution-header">
              <h2>AutoDoc</h2>
              <p>Sistema de IA para automatización documental con alta precisión y aprendizaje continuo</p>
            </div>

            <div className="solution-body">
              <div className="solution-description">
                <h3>Descripción</h3>
                <p>
                  AutoDoc es nuestra solución especializada en procesamiento inteligente de documentos. Utiliza modelos avanzados de IA para capturar, clasificar, extraer y estructurar información de documentos empresariales con un nivel de precisión excepcional.
                </p>
                <p>
                  Diseñado para empresas que manejan grandes volúmenes de documentación, AutoDoc aprende continuamente de cada interacción, mejorando su precisión y adaptándose a las necesidades específicas de cada organización.
                </p>
              </div>

              <div className="solution-features">
                <h3>Características Principales</h3>
                <ul className="features-list">
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Procesamiento automático de documentos</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Clasificación inteligente por tipo y contenido</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Extracción automática de datos clave</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Aprendizaje continuo y mejora de precisión</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Integración con sistemas de gestión documental</span>
                  </li>
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Validación automática y detección de inconsistencias</span>
                  </li>
                </ul>
              </div>

              <div className="solution-benefits">
                <h3>Beneficios</h3>
                <div className="benefits-list">
                  <div className="benefit-item">
                    <h4>Alta precisión</h4>
                    <p>Procesamiento documental con tasas de precisión superiores al 95%</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Velocidad de procesamiento</h4>
                    <p>Procesa miles de documentos en minutos</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Reducción de costes</h4>
                    <p>Disminuye significativamente los costes de procesamiento manual</p>
                  </div>
                  <div className="benefit-item">
                    <h4>Mejora continua</h4>
                    <p>Sistema que aprende y se optimiza con cada uso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark cta-section">
        <div className="container">
          <div className="cta-content slide-up">
            <h2>Descubre cómo nuestras soluciones pueden transformar tu empresa</h2>
            <a href="/contacto" className="btn btn-primary">
              Solicita una demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Soluciones;
