import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import Inspiration from '../components/home/Inspiration';
import Features from '../components/home/Features';
import { looks } from '../data/looks';

const Home: React.FC = () => {
    // Preload collection images for instant navigation feeling
    useEffect(() => {
        const preloadImages = () => {
            // Get the first 4 looks to preload their main images
            const imagesToPreload = looks.slice(0, 4).map(look => look.images[0]);

            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        };

        // Delay preloading slightly so it doesn't block initial page render
        const timer = setTimeout(preloadImages, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="bg-white">
            <Hero />
            <Inspiration />
            <Features />

            {/* CTA Beneficios */}
            <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
                        <Sparkles className="w-4 h-4" /> Beneficios GREAT CREW
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight max-w-4xl mx-auto">
                        ¿Querés ver todo lo que te <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">regalamos</span> con tus buzos?
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                        Desde banderas gratuitas hasta descuentos en las mejores fiestas de egresados de la ciudad. Descubrí por qué somos la mejor opción para tu curso.
                    </p>

                    <Link
                        to="/beneficios"
                        className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    >
                        Ver Beneficios
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home;
