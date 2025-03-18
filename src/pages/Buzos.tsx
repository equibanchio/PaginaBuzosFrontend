import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Buzos.css';
import logo from '../assets/logo.png';
// Importa las imágenes de buzos desde assets (asumiendo que las tendrás en esta carpeta)
// Por ejemplo:
import buzo1 from '../assets/buzos/buzo1.png';
import buzo2 from '../assets/buzos/buzo2.png';
import buzo3 from '../assets/buzos/buzo3.png';
// Añade más importaciones según necesites

const Buzos: React.FC = () => {
    // Estado para controlar el menú responsive
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Referencia para animaciones
    const buzosRef = useRef<HTMLDivElement>(null);
    
    // Estado para controlar el carrusel
    const [currentBuzo, setCurrentBuzo] = useState(0);

    const location = useLocation();

    // Datos locales de buzos en lugar de cargarlos desde API
    const buzos = [
        { id: 1, name: "Buzo Modelo Clásico", image: buzo1, description: "Diseño clásico con capucha y bolsillo canguro" },
        { id: 2, name: "Buzo Modelo Deportivo", image: buzo2, description: "Diseño deportivo con cremallera y bolsillos laterales" },
        { id: 3, name: "Buzo Modelo Premium", image: buzo3, description: "Diseño premium con bordados personalizados" },
        // Añade más buzos según necesites
    ];

    // Añade esta constante cerca del inicio del componente, después de los estados
  const SHOW_PLACEHOLDER = true; // Cambia a false cuando tengas las imágenes reales

    // Añade esta parte al inicio del componente para manejar hash en URLs
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
    
    // Manejar el cierre del menú al hacer clic en un enlace
    const handleMenuClick = () => {
      setMenuOpen(false);
    };

    // Función para abrir/cerrar el menú
    const toggleMenu = () => {
      const newState = !menuOpen;
      console.log("Menu state changed to:", newState);
      setMenuOpen(newState);
    };

    // Función para navegar a secciones específicas
    const scrollToSection = (id: string) => {
      setMenuOpen(false); // Cierra el menú
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Pequeño retraso para permitir que el menú se cierre
    };

    // Efecto para manejar el scroll a la sección correcta al cargar la página
    useEffect(() => {
      // Verificar si hay un hash en la URL (por ejemplo, #design-process)
      if (location.hash) {
        // Dar tiempo para que el componente se renderice completamente
        setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, [location]);
    
    // Funciones para navegación del carrusel
    const nextBuzo = () => {
      if (buzos.length > 0) {
        setCurrentBuzo((prev) => (prev + 1) % buzos.length);
      }
    };
    
    const prevBuzo = () => {
      if (buzos.length > 0) {
        setCurrentBuzo((prev) => (prev - 1 + buzos.length) % buzos.length);
      }
    };
    
    // Efectos de animación al hacer scroll
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-item');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      
      if (buzosRef.current) {
        const items = buzosRef.current.querySelectorAll('.animate-on-scroll');
        items.forEach(item => observer.observe(item));
      }

      return () => {
        if (buzosRef.current) {
          const items = buzosRef.current.querySelectorAll('.animate-on-scroll');
          items.forEach(item => observer.unobserve(item));
        }
      };
    }, []);

    // Enhanced touch functionality for the carousel
    useEffect(() => {
      if (buzosRef.current) {
        const carousel = buzosRef.current.querySelector('.buzos-carousel');
        
        let startX: number;
        let isDragging = false;
        
        const handleTouchStart = (e: Event) => {
          // Cast the event to TouchEvent to access the touches property
          const touchEvent = e as TouchEvent;
          startX = touchEvent.touches[0].clientX;
          isDragging = true;
        };
        
        const handleTouchMove = (e: Event) => {
          if (!isDragging) return;
          
          // Cast the event to TouchEvent to access the touches property
          const touchEvent = e as TouchEvent;
          const currentX = touchEvent.touches[0].clientX;
          const diff = startX - currentX;
          
          // Determine swipe direction
          if (Math.abs(diff) > 50) { // threshold of 50px
            if (diff > 0) {
              // Swiped left
              nextBuzo();
            } else {
              // Swiped right
              prevBuzo();
            }
            isDragging = false;
          }
        };
        
        const handleTouchEnd = () => {
          isDragging = false;
        };
        
        if (carousel) {
          carousel.addEventListener('touchstart', handleTouchStart);
          carousel.addEventListener('touchmove', handleTouchMove);
          carousel.addEventListener('touchend', handleTouchEnd);
          
          return () => {
            carousel.removeEventListener('touchstart', handleTouchStart);
            carousel.removeEventListener('touchmove', handleTouchMove);
            carousel.removeEventListener('touchend', handleTouchEnd);
          };
        }
      }
    }, [nextBuzo, prevBuzo]);

    // Cambio automático del carrusel cada 5 segundos
    useEffect(() => {
      if (buzos.length > 0) {  // Solo activar el intervalo si hay buzos
        const interval = setInterval(nextBuzo, 5000);
        return () => clearInterval(interval);
      }
    }, [buzos.length]); // Dependencia en buzos.length

    useEffect(() => {
      // Selecciona todas las tarjetas de proceso
      const processCards = document.querySelectorAll('.process-card');
      
      if (processCards.length > 0) {
        // Configura el intervalo para animar las tarjetas secuencialmente
        let currentIndex = 0;
        
        // Función para añadir la clase de animación a una tarjeta
        const animateCard = (index: number) => {
          // Primero reseteamos todas las tarjetas (opcional, dependiendo del efecto deseado)
          processCards.forEach(card => {
            card.classList.remove('active-card');
          });
          
          // Añadimos la clase active a la tarjeta actual
          if (index < processCards.length) {
            processCards[index].classList.add('active-card');
          }
        };
        
        // Inicializa la primera tarjeta
        animateCard(0);
        
        // Configura el intervalo para cambiar de tarjeta cada 3 segundos
        const interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % processCards.length;
          animateCard(currentIndex);
        }, 3000);
        
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
      }
    }, []);

    return (
      <div className="buzos-page">
        <header className="header">
          <div className="container header-container">
            <div className="logo-container">
              <a href="/">
                <img src={logo} alt="Great Graduates Logo" className="logo animate-logo" />
              </a>
            </div>
            {/* Botón de menú hamburguesa para móviles */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
              <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* Menú de navegación con clase para abrir/cerrar */}
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="/" className="menu-item" onClick={handleMenuClick}>Inicio</a></li>
                <li><a href="#" className="active menu-item" onClick={handleMenuClick}>Buzos</a></li>
                <li><a href="#design-process" className="menu-item" onClick={() => scrollToSection('design-process')}>Proceso</a></li>
                <li><a href="/#beneficios" className="menu-item" onClick={handleMenuClick}>Beneficios</a></li>
                <li><a href="/#contacto" className="menu-item" onClick={handleMenuClick}>Contacto</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="buzos-banner">
          <div className="container">
            <h1>Nuestros Buzos</h1>
            <p>Diseños exclusivos para que tu promoción brille</p>
          </div>
        </div>

        <section className="buzos-showcase" ref={buzosRef}>
          <div className="container">
            {/* Presentación principal con imágenes grandes */}
            <div className="feature-buzo-container animate-on-scroll">
              <div className="feature-buzo-image">
                <div className="feature-placeholder">
                  <h2 className="feature-title">Colección 2025</h2>
                  <p className="feature-subtitle">Calidad y estilo para tu promoción</p>
                </div>
              </div>
            </div>
            
           <div className="buzos-carousel">
  {buzos.map((buzo, index) => (
    <div
      className={`carousel-item ${index === currentBuzo ? 'active' : ''}`}
      key={buzo.id}
    >
      <div className="buzo-image">
        {SHOW_PLACEHOLDER ? (
          <div className="buzo-placeholder">
            <span className="soon-text">SOON</span>
            <p className="soon-description">{buzo.name}</p>
          </div>
        ) : (
          <img 
            src={buzo.image} 
            alt={buzo.name} 
            className="buzo-img"
          />
        )}
      </div>
    </div>
  ))}
</div>
            
            {/* Sección mejorada - La Diferencia Great Graduates */}
            <div className="why-choose-us-section animate-on-scroll">
              <div className="why-choose-header">
                <h2>La Diferencia Great Graduates</h2>
                <p>Cientos de promociones ya eligieron nuestros diseños</p>
              </div>
              <div className="why-choose-content">
                <div className="why-choose-info">
                  <h3>¿Por qué elegirnos?</h3>
                  <ul className="feature-list">
                    <li><span className="feature-icon">✓</span> Calidad premium garantizada</li>
                    <li><span className="feature-icon">✓</span> Diseño personalizado</li>
                    <li><span className="feature-icon">✓</span> Entrega rápida</li>
                    <li><span className="feature-icon">✓</span> Materiales duraderos y cómodos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="buzos-cta">
          <div className="container">
            <div className="cta-content">
              <h2>¿Tienes una idea para tu promoción?</h2>
              <p>Hacela realidad con nuestro equipo de diseño</p>
              <a href="https://wa.me/5491168972616?text=Hola,%20quisiera%20obtener%20información%20sobre%20los%20buzos%20de%20egresados%20para%20mi%20curso.%20¡Gracias!" className="cta-button">Contactanos</a>
            </div>
          </div>
        </section>

        <section className="design-process" id="design-process">
          <div className="container">
            <h2>¿Cómo creamos tu buzo personalizado?</h2>
            <div className="process-cards">
              {[
                {
                  icon: "fas fa-comments",
                  title: "Consulta Inicial",
                  desc: "Charlamos sobre tus ideas y necesidades para tu buzo de egresados"
                },
                {
                  icon: "fas fa-pencil-ruler",
                  title: "Bocetos y Diseño",
                  desc: "Creamos propuestas de diseño basadas en tus preferencias"
                },
                {
                  icon: "fas fa-check-circle",
                  title: "Aprobación",
                  desc: "Revisas y apruebas el diseño final antes de la producción"
                },
                {
                  icon: "fas fa-tshirt",
                  title: "Producción",
                  desc: "Fabricamos tus buzos con los más altos estándares de calidad"
                }
              ].map((step, index) => (
                <div className="process-card" key={index}>
                  <div className="process-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}

export default Buzos;