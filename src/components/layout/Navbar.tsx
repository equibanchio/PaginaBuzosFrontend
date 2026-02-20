import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/GreatLogo.png';


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const getLinkState = (path: string, hash?: string) => {
        if (hash) {
            return location.pathname === path && location.hash === hash;
        }
        if (path === '/buzos') {
            return location.pathname === path && location.hash !== '#proceso';
        }
        return location.pathname === path;
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color depends on background (Hero is dark, other pages might be light)
    // But strictly, the request asks to keep the "colors of the initial page".
    // The initial page header was white with blue text.
    // We will make it: Transparent wrapping -> White on scroll.
    // BUT: The original design had a fixed white header.
    // Let's go for a modern mix: Transparent on Hero (White text), White on Scroll (Blue text).
    const isNavbarSolid = scrolled || !isHome;
    const textColor = isNavbarSolid ? 'text-primary' : 'text-white';


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavbarSolid ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b-4 border-primary' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                    <img
                        src={logo}
                        alt="Great Graduates"
                        className="h-20 w-auto object-contain transition-all duration-300"
                        style={{ filter: isNavbarSolid ? 'none' : 'brightness(0) invert(1)' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Inicio', path: '/', hash: '' },
                        { name: 'Buzos', path: '/buzos', hash: '' },
                        { name: 'Proceso', path: '/buzos', hash: '#proceso' },
                        { name: 'Beneficios', path: '/beneficios', hash: '' },
                        { name: 'Contacto', path: '/contacto', hash: '' },
                    ].map((item) => {
                        const isActive = getLinkState(item.path, item.hash);
                        const fullPath = item.hash ? `${item.path}${item.hash}` : item.path;

                        return (
                            <Link
                                key={item.name}
                                to={fullPath}
                                onClick={() => {
                                    if (item.name === 'Inicio' || item.name === 'Buzos') {
                                        window.scrollTo(0, 0);
                                    } else if (item.name === 'Proceso') {
                                        setTimeout(() => {
                                            const target = document.getElementById('proceso');
                                            if (target) {
                                                target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }, 100);
                                    }
                                }}
                                className={`${isActive ? 'text-blue-500 border-b-2 border-blue-500' : textColor} hover:text-blue-400 transition-colors py-1 text-sm uppercase tracking-wider font-bold`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 ${textColor}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {[
                                { name: 'Inicio', path: '/', hash: '' },
                                { name: 'Buzos', path: '/buzos', hash: '' },
                                { name: 'Proceso', path: '/buzos', hash: '#proceso' },
                                { name: 'Beneficios', path: '/beneficios', hash: '' },
                                { name: 'Contacto', path: '/contacto', hash: '' },
                            ].map((item) => {
                                const isActive = getLinkState(item.path, item.hash);
                                const fullPath = item.hash ? `${item.path}${item.hash}` : item.path;

                                return (
                                    <Link
                                        key={item.name}
                                        to={fullPath}
                                        onClick={() => {
                                            setMenuOpen(false);
                                            if (item.name === 'Inicio' || item.name === 'Buzos') {
                                                window.scrollTo(0, 0);
                                            } else if (item.name === 'Proceso') {
                                                setTimeout(() => {
                                                    const target = document.getElementById('proceso');
                                                    if (target) {
                                                        target.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }, 100);
                                            }
                                        }}
                                        className={`${isActive ? 'text-blue-500' : 'text-primary'} text-lg font-bold`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
