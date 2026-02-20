import React from 'react';
import { Instagram, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/GreatLogo2.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-20 pb-10 border-t border-neutral-800 relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <img src={logo} alt="Great Graduates" className="h-16 object-contain brightness-0 invert opacity-90" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Expertos en indumentaria de egresados. Calidad, diseño y compromiso en cada prenda que fabricamos.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/great.egresados/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/5491168972616?text=¡Hola!%20Estoy%20visitando%20la%20página%20web%20de%20GREAT%20CREW%20y%20me%20gustaría%20hacer%20una%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                            >
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block border-b-2 border-blue-600 pb-2">Enlaces Rápidos</h3>
                        <ul className="space-y-4">
                            {['Inicio', 'Buzos', 'Proceso', 'Beneficios', 'Contacto'].map((item) => {
                                let path = `/${item.toLowerCase()}`;
                                if (item === 'Inicio') path = '/';
                                if (item === 'Proceso') path = '/buzos#proceso';

                                const handleLinkClick = () => {
                                    if (item === 'Inicio' || item === 'Buzos') {
                                        window.scrollTo(0, 0);
                                    } else if (item === 'Proceso') {
                                        setTimeout(() => {
                                            const target = document.getElementById('proceso');
                                            if (target) target.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }
                                };

                                return (
                                    <li key={item}>
                                        <Link
                                            to={path}
                                            onClick={handleLinkClick}
                                            className="text-gray-400 hover:text-white flex items-center group transition-colors"
                                        >
                                            <ArrowRight size={16} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block border-b-2 border-blue-600 pb-2">Contacto</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <Phone size={20} className="text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="block text-white font-medium mb-1">WhatsApp</span>
                                    <a href="https://wa.me/5491168972616?text=¡Hola!%20Estoy%20visitando%20la%20página%20web%20de%20GREAT%20GRADUATES%20y%20me%20gustaría%20hacer%20una%20consulta." className="text-gray-400 hover:text-white transition-colors">
                                        +54 11 6897-2616
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <MapPin size={20} className="text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="block text-white font-medium mb-1">Ubicación</span>
                                    <p className="text-gray-400">
                                        Buenos Aires, Argentina
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Call to Action */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white inline-block border-b-2 border-blue-600 pb-2">¿Listos para empezar?</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Contáctanos hoy mismo para comenzar a diseñar el buzo de tu curso. ¡Hacemos envíos a todo el país!
                        </p>
                        <a
                            href="https://wa.me/5491168972616?text=¡Hola!%20Quería%20pedir%20un%20presupuesto%20para%20los%20buzos%20de%20mi%20curso."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
                        >
                            <MessageCircle size={20} className="mr-2" />
                            Pedir Presupuesto
                        </a>
                    </div>

                </div>

                <div className="pt-8 pb-4 md:pb-0 border-t border-neutral-800 flex flex-col md:flex-row justify-start items-center md:items-start gap-4 md:gap-8 text-gray-500 text-sm">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Great Graduates. Todos los derechos reservados. <span className="ml-2 opacity-50">| Design by Ezequiel Banchio</span></p>
                    <div className="flex gap-6">
                        <Link to="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
