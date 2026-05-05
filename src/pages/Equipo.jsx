import { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import './Equipo.css';

const founders = [
  {
    name: 'David Sánchez Molina',
    role: 'Responsable de Negocio — Cofundador',
    image: '/Equipo/25.png',
    linkedin: 'https://www.linkedin.com/in/davidmirrorauthor/',
    bullets: [
      'Ingeniero Aeroespacial (UPC & University of Colorado) & Economista (UOC).',
      'Profesor en EADA Business School de Modelos Financieros, Valoración y Proyectos FInTech.',
      'Asesor Financiero Independiente (EFA & CFA Candidate Level II).',
    ],
  },
  {
    name: 'Edgar Alarcón Palma',
    role: 'Responsable Tecnológico — Cofundador',
    image: '/Equipo/26.png',
    linkedin: 'https://www.linkedin.com/in/edgar-alarcon/',
    bullets: [
      'Ingeniero Electrónico (UPC) & Máster en Data Science (UOC).',
      '+10 años de experiencia en Arquitectura de Software, IA, Computer Vision, gestión de servidores y redes.',
      'Tech Lead de proyectos con Renfe, AENA, GAES, PortAventura, etc.',
    ],
  },
  {
    name: 'Javi Ródenas Cumplido',
    role: 'Doctorado en IA (UB) — Cofundador',
    image: '/Equipo/27.png',
    linkedin: 'https://www.linkedin.com/in/javier-rodenas-0226ba128/',
    bullets: [
      'Ingeniero Electrónico (UPC) & Doctorado IA (UB).',
      '+8 años en análisis de datos y a la vanguardia del estado del arte en Inteligencia Artificial.',
      'Experto en Computer Vision, modelos predictivos y series temporales.',
    ],
  },
  {
    name: 'Sergi Farrés Contreras',
    role: 'Partner Márketing - LemonAds — Cofundador',
    image: '/Equipo/28.png',
    linkedin: 'https://www.linkedin.com/in/sergi-farr%C3%A9s/',
    bullets: [
      'MBA (EAE) & Máster en Data Science (Nuclio).',
      '+20 años como responsable comercial.',
      'Propietario de LemonAds, agencia de márketing digital con clientes como GAES, Grupo Volkswagen o la King\'s League.',
    ],
  },
];

const advisors = [
  {
    name: 'Adolf Todó Rovira',
    role: 'Advisor',
    image: '/Equipo/29.png',
    linkedin: null,
    bullets: [
      'Ex Director General de Caixa Manresa y Ex Presidente de Caixa Catalunya.',
      'Consejero en TOUS.',
    ],
  },
  {
    name: 'David Garrofé Puig',
    role: 'Advisor',
    image: '/Equipo/30.png',
    linkedin: 'https://www.linkedin.com/in/davidgarrofe/',
    bullets: [
      'Ex Secretario General - Patronal CECOT.',
      'CEO de Binillium SL Investments.',
    ],
  },
  {
    name: 'Gaspar Andrés Rius',
    role: 'Advisor',
    image: '/Equipo/31.png',
    linkedin: 'https://www.linkedin.com/in/gaspar-andres/',
    bullets: [
      'Ex VP of Innovation - Procter & Gamble (NYSE:PG).',
      'Business Angel & Inversor Profesional.',
    ],
  },
];

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-photo-wrapper">
        <img src={member.image} alt={member.name} className="member-photo" />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <ul className="member-bullets">
          {member.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function Equipo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="equipo">
      <section className="equipo-hero">
        <div className="equipo-hero-inner">
          <h1 className="equipo-title">El equipo</h1>
          <p className="equipo-subtitle">Las personas detrás de Baboon Technologies</p>
        </div>
      </section>

      <section className="equipo-section">
        <div className="equipo-container">
          <h2 className="section-heading">Fundadores</h2>
          <div className="founders-grid">
            {founders.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="equipo-section equipo-section-alt">
        <div className="equipo-container">
          <h2 className="section-heading">Advisors</h2>
          <div className="advisors-grid">
            {advisors.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipo;
