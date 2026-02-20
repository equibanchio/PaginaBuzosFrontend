import React from 'react';
import { motion } from 'framer-motion';
import santacruz from '../../assets/SantaCruz.png';
import southside from '../../assets/Southside.png';
import click from '../../assets/Click2.jpg'; // Using as placeholder or correct image
import logo2 from '../../assets/GreatLogo2.png';

const Benefits: React.FC = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    const benefitsData = [
        {
            subtitle: "CONTRATANDO TUS BUZOS CON GREAT",
            title: "DESCUENTO",
            detail: "EN TU FIESTA DE EGRESADOS",
            highlight: "SANTA CRUZ",
            extra: "EXCLUSIVO COLEGIOS CLIENTES",
            logo: santacruz,
            transform: "rotate-[-2deg]"
        },
        {
            subtitle: "CONTRATANDO TUS BUZOS CON GREAT",
            title: "DESCUENTO",
            detail: "EN TU FIESTA DE EGRESADOS",
            highlight: "SOUTHSIDE EVENTOS",
            extra: "EXCLUSIVO COLEGIOS CLIENTES",
            logo: southside,
            transform: "rotate-[2deg]"
        },
        {
            subtitle: "CONTRATANDO TUS BUZOS CON GREAT",
            title: "DESCUENTO",
            detail: "EN TUS FOTOS Y VIDEOS",
            highlight: "CLICK GRADUATES",
            extra: "EXCLUSIVO COLEGIOS CLIENTES",
            logo: click,
            transform: "rotate-[1deg]"
        },
        {
            subtitle: "BENEFICIOS CREW GREAT",
            title: "EXTRAS",
            detail: "PARA TU CURSO",
            highlight: "BENEFICIOS ADICIONALES",
            features: ["ENVÍO GRATIS", "BUZO LIBERADO PARA EL CURSO", "BANDERA DE REGALO"],
            logo: logo2,
            logoInvert: true
        }
    ];

    return (
        <section className="py-24 bg-[#0a0f1d] relative overflow-hidden" id="beneficios">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-wide">Beneficios Exclusivos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {benefitsData.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-[#0f1429] rounded-xl p-8 shadow-xl border border-blue-900/30 text-center flex flex-col items-center justify-between min-h-[400px]"
                        >
                            <div className="w-full flex-grow flex flex-col justify-center">
                                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] mb-3 text-gray-400 uppercase">
                                    {item.subtitle}
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                    {item.title}
                                </h2>
                                <h3 className="text-lg md:text-xl font-bold text-blue-200 mb-6 uppercase">
                                    {item.detail}
                                </h3>

                                {item.features ? (
                                    <ul className="text-left text-gray-300 space-y-3 mb-6 mx-auto max-w-xs font-semibold text-sm md:text-base">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="text-blue-500 text-xl font-bold">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className={`text-xl md:text-2xl font-black text-white mb-2 uppercase ${item.transform || ''}`}>
                                        {item.highlight}
                                    </div>
                                )}

                                {item.extra && (
                                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-2">
                                        {item.extra}
                                    </p>
                                )}

                                <p className="text-xs font-bold text-blue-600 mt-4 tracking-wider">#SOMOSGREAT</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-center">
                                <img
                                    src={item.logo}
                                    alt="Logo"
                                    className={`h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${item.logoInvert ? 'brightness-0 invert' : ''}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Benefits;
