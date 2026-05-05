import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solucionesOpen, setSolucionesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolucionesOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setSolucionesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setSolucionesOpen(false), 80);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/baboonlogo.png" alt="Baboon Technologies" className="navbar-logo-img" />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar-right">
          <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/quienes-somos" className={location.pathname === '/quienes-somos' ? 'active' : ''}>
                Quiénes Somos
              </Link>
            </li>
            <li
              ref={dropdownRef}
              className="dropdown-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`dropdown-trigger ${solucionesOpen ? 'open' : ''}`}
                onClick={() => setSolucionesOpen(prev => !prev)}
                aria-expanded={solucionesOpen}
              >
                Soluciones
                <svg
                  className={`dropdown-arrow ${solucionesOpen ? 'rotated' : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 8L2 4h8z" />
                </svg>
              </button>

              <div className={`dropdown-panel ${solucionesOpen ? 'visible' : ''}`}>
                <div className="dropdown-inner">
                  <a
                    href="https://autodoc.solutions/"
                    className="dropdown-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dropdown-link-label">Autodoc</span>
                    <span className="dropdown-link-desc">Documentación automática con IA</span>
                  </a>
                  <a
                    href="https://svinvesting.com/"
                    className="dropdown-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dropdown-link-label">SVI</span>
                    <span className="dropdown-link-desc">Plataforma de inversión inteligente</span>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/equipo" className={location.pathname === '/equipo' ? 'active' : ''}>
                Equipo
              </Link>
            </li>
          </ul>

          <Link to="/contacto" className="navbar-cta">
            Contactar
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
