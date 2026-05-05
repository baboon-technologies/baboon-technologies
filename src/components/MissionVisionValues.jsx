import { useEffect, useRef, useState } from 'react';
import { Timeline } from './ui/timeline';
import './MissionVisionValues.css';

function MissionVisionValues() {
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const [visionVisible, setVisionVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const visionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisionVisible(true);
    }, observerOptions);

    const valuesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setValuesVisible(true);
    }, observerOptions);

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (valuesRef.current) valuesObserver.observe(valuesRef.current);

    return () => {
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (valuesRef.current) valuesObserver.unobserve(valuesRef.current);
    };
  }, []);

  const missionMilestones = [
    {
      title: "2026",
      content: "Expansión estratégica. Nueva etapa de expansión impulsada por financiación adicional, crecimiento comercial y acuerdos estratégicos con distribuidores y colaboradores clave."
    },
    {
      title: "2027",
      content: "Escalado del negocio. Escalado del negocio con una expansión significativa de clientes, activos bajo gestión y desarrollo de nuevos productos de inversión."
    },
    {
      title: "2030",
      content: "Consolidación internacional. Consolidación de la marca SVI en mercados nacionales e internacionales, ampliación de la gama de productos y fortalecimiento estructural de la compañía."
    }
  ];

  const values = [
    {
      title: "Educación financiera",
      description: "Fomentamos decisiones informadas y responsables.",
      image: "/educacion.png"
    },
    {
      title: "Fondos de inversión competitivos",
      description: "Diseñamos productos eficientes y alineados con el cliente.",
      image: "/finance.png"
    },
    {
      title: "Creación y preservación del patrimonio",
      description: "Priorizamos sostenibilidad y visión a largo plazo.",
      image: "/creacion.png"
    }
  ];

  return (
    <>
      <div className="section-divider">
        <div className="divider-glow"></div>
        <div className="divider-line"></div>
        <p className="divider-text">Del recorrido al propósito</p>
      </div>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-header">
            <div className="mission-badge">MISIÓN</div>
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-subtitle">En Baboon Technologies trabajamos para transformar la gestión de inversiones mediante el uso de inteligencia artificial, modelos cuantitativos y tecnología financiera avanzada.</p>
          </div>

          <div className="mission-timeline-wrapper">
            <Timeline data={missionMilestones} />
          </div>
        </div>
      </section>

      <section className="vision-section" ref={visionRef}>
        <div className={`vision-container ${visionVisible ? 'vision-visible' : ''}`}>
          <h2 className="vision-title">Nuestro Objetivo</h2>
          <p className="vision-description">
            Nuestro objetivo es democratizar el acceso a estrategias de inversión sofisticadas, ofreciendo productos transparentes, escalables y basados en datos que generen valor sostenible para nuestros clientes.
          </p>
          <p className="vision-tagline">A través de nuestras soluciones tecnológicas y de inversión buscamos construir una plataforma global capaz de combinar innovación, rigor financiero y eficiencia operativa.</p>
        </div>
      </section>

      <section className="values-section" ref={valuesRef}>
        <div className={`values-container ${valuesVisible ? 'values-visible' : ''}`}>
          <h2 className="values-title">Valores</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <img src={value.image} alt={value.title} className="value-card-img" />
                <div className="value-card-overlay"></div>
                <div className="value-card-content">
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-card-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVisionValues;
