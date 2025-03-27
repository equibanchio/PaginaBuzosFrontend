import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from '../assets/GreatLogo.png'
import logo2 from '../assets/GreatLogo2.png'
import SantaCruz from '../assets/SantaCruz.png';
import Southside from '../assets/Southside.png';
import whatsapp from '../assets/whatsapp.png';
import instagram from '../assets/instagram.png';
import Click from '../assets/Click2.jpg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    // Comprueba si hay un hash en la URL cuando se monta el componente
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Quita el '#' del hash
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    benefits: false,
    footer: false
  });

  // Efecto para controlar el scroll y aplicar animaciones
  useEffect(() => {
    const handleScroll = () => {
      // Cambiar header al hacer scroll
      setScrolled(window.scrollY > 50);
      
      // Detectar elementos visibles para animaciones
      const heroSection = document.querySelector('.hero');
      const featuresSection = document.querySelector('.features');
      const benefitsSection = document.querySelector('.benefits');
      const footerSection = document.querySelector('.footer');
      
      if (heroSection && isElementInViewport(heroSection)) {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }
      
      if (featuresSection && isElementInViewport(featuresSection)) {
        setIsVisible(prev => ({ ...prev, features: true }));
      }
      
      if (benefitsSection && isElementInViewport(benefitsSection)) {
        setIsVisible(prev => ({ ...prev, benefits: true }));
      }
      
      if (footerSection && isElementInViewport(footerSection)) {
        setIsVisible(prev => ({ ...prev, footer: true }));
      }
    };
    
    // Comprobar si un elemento es visible en el viewport
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    // Iniciar con la animación del hero visible
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 300);
    
    // Rotación de características destacadas
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(featureInterval);
    };
  }, []);

  // Manejar el cierre del menú al hacer clic en un enlace
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    const newState = !menuOpen;
    console.log("Menu state changed to:", newState);
    setMenuOpen(newState);
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false); // Cierra el menú
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Pequeño retraso para permitir que el menú se cierre
  };

  // Función para scroll al inicio cuando se hace clic en el logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Alternativa: scroll al sección "inicio"
    // scrollToSection('inicio');
  };

  return (
    <div className="home">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div 
            className={`logo-container ${scrolled ? 'logo-small' : ''}`} 
            onClick={scrollToTop} 
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt="Great Graduates Logo" className="logo animate-logo" />
          </div>
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="#inicio" className="menu-item" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><Link to="/buzos" className="menu-item" onClick={handleMenuClick}>Buzos</Link></li>
            <li><Link to="/buzos#design-process" className="menu-item" onClick={handleMenuClick}>Proceso</Link></li>
            <li><a href="#beneficios" className="menu-item" onClick={() => scrollToSection('beneficios')}>Beneficios</a></li>
            <li><a href="#contacto" className="menu-item" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenidos a <span className="highlight-text">GREAT!</span></h1>
            <p className="hero-subtitle">Llegamos para dejar una marca en tu último año escolar</p>
            <p className="secondary-subtitle">Buzos de egresados personalizados</p>
            <Link to="/buzos" className="cta-button">Nuestros Buzos</Link>
          </div>
        </div>
      </section>

      <section className={`features ${isVisible.features ? 'visible' : ''}`}>
        <div className="container">
          <div className={`feature-item ${activeFeature === 0 ? 'feature-active' : ''}`}>
            <div className="feature-icon">
              <i className="fas fa-tshirt"></i>
            </div>
            <h3>Fabricacion Propia</h3>
            <p>Telas y materiales de primera calidad para mayor durabilidad</p>
          </div>
          <div className={`feature-item ${activeFeature === 1 ? 'feature-active' : ''}`}>
            <div className="feature-icon">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h3>Diseños Personalizados</h3>
            <p>Creamos diseños únicos adaptados a tu promoción</p>
          </div>
          <div className={`feature-item ${activeFeature === 2 ? 'feature-active' : ''}`}>
            <div className="feature-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h3>Entregas en Tiempo</h3>
            <p>Cumplimos con los plazos para que tengas tu buzo a tiempo</p>
          </div>
        </div>
      </section>

      <section className="benefits" id="beneficios">
  <div className="container">
    <h2 className="section-title">Beneficios Exclusivos</h2>
    <div className="benefits-container">
      {/* Primera tarjeta existente */}
      <div className="benefit-card">
        <div className="benefit-content">
          <h3>CONTRATANDO TUS BUZOS CON GREAT</h3>
          <h2>DESCUENTO</h2>
          <h3>EN TU FIESTA DE EGRESADOS</h3>
          <div className="benefit-highlight">SANTA CRUZ</div>
          <p className="benefit-note">EXCLUSIVO COLEGIOS CLIENTES</p>
          <p className="benefit-hashtag">#SOMOSGREAT</p>
        </div>
        <div className="benefit-logo">
          <img src={SantaCruz} alt="Logo del beneficio" />
        </div>
      </div>
      
      {/* Segunda tarjeta existente */}
      <div className="benefit-card">
        <div className="benefit-content">
          <h3>CONTRATANDO TUS BUZOS CON GREAT</h3>
          <h2>DESCUENTO</h2>
          <h3>EN TU FIESTA DE EGRESADOS</h3>
          <div className="benefit-highlight">SOUTHSIDE EVENTOS</div>
          <p className="benefit-note">EXCLUSIVO COLEGIOS CLIENTES</p>
          <p className="benefit-hashtag">#SOMOSGREAT</p>
        </div>
        <div className="benefit-logo">
          <img src={Southside} alt="Logo del beneficio" />
        </div>
      </div>
      
      {/* Nueva tarjeta centrada con tema oscuro */}
      <div className="benefit-card dark-theme centered-third">
        <div className="benefit-content">
          <h3>CONTRATANDO TUS BUZOS CON GREAT</h3>
          <h2>DESCUENTO</h2>
          <h3>EN TU FOTOS Y VIDEOS</h3>
          <div className="benefit-highlight">CLICK GRADUATES</div>
          <p className="benefit-note">EXCLUSIVO COLEGIOS CLIENTES</p>
          <p className="benefit-hashtag">#SOMOSGREAT</p>
        </div>
        <div className="benefit-logo">
          <img src={Click} alt="Logo del beneficio de fotografía" />
        </div>
      </div>
      {/* New Crew Benefits Card */}
      <div className="benefit-card dark-theme centered-third">
              <div className="benefit-content">
                <h3>BENEFICIOS CREW GREAT</h3>
                <h2>EXTRAS</h2>
                <h3>PARA TU CURSO</h3>
                <div className="benefit-highlight">BENEFICIOS ADICIONALES</div>
                <ul className="benefit-list">
                  <li>ENVÍO GRATIS</li>
                  <li>BUZO LIBERADO PARA EL CURSO</li>
                  <li>BANDERA DE REGALO</li>
                </ul>
                <p className="benefit-hashtag">#SOMOSGREAT</p>
              </div>
              <div className="benefit-logo">
                <img src={logo2} alt="Crew Benefits" />
              </div>
          </div>
    </div>
  </div>
</section>

      <footer className={`footer ${isVisible.footer ? 'visible' : ''}`} id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo2} alt="Great Graduates Logo" className="logo logo-pulse" />
              <p>Great Graduates - Buzos de Egresados</p>
            </div>
            <div className="footer-contact">
              <h3>Contacto</h3>
              <p>WhatsApp: +54 11 6897-2616</p> 
              <div className="social-links">
                <a href="https://www.instagram.com/great.egresados/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://wa.me/5491168972616?text=Hola,%20quisiera%20obtener%20información%20sobre%20los%20buzos%20de%20egresados%20para%20mi%20curso.%20¡Gracias!" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Great Graduates - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;