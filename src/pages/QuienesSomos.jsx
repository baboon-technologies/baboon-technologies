import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TimelineDemo } from '../components/timeline-demo';
import MissionVisionValues from '../components/MissionVisionValues';
import './QuienesSomos.css';

function QuienesSomos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quienes-somos">
      <section className="page-hero">
        <div className="container">
          <h1 className="fade-in">Nuestra Historia</h1>
          <p className="lead fade-in">Baboon Technologies nació con la visión de aplicar tecnología avanzada y modelos cuantitativos al mundo de la inversión y la gestión empresarial.</p>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container-timeline">
          <TimelineDemo />
        </div>
      </section>

      <MissionVisionValues />
    </div>
  );
}

export default QuienesSomos;
