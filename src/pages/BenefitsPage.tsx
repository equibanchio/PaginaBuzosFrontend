import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Sparkles, CheckCircle2 } from 'lucide-react';

import santacruz from '../assets/SantaCruz.png';
import click from '../assets/Click2.jpg';
import nilus from '../assets/NilusClub.png';
import micros from '../assets/Micros.png';
import kethal from '../assets/KClub.png';

interface Benefit {
    id: number;
    title: string;
    description?: string;
    logos?: { src?: string; alt: string; invert?: boolean; textLogo?: string }[];
    features?: string[];
}

const benefitsData: Benefit[] = [
    {
        id: 1,
        title: "GARANTÍA X CONTRATO",
        description: "Tu seguridad es lo primero. Respaldo total por escrito en cada prenda de tu curso.",
    },
    {
        id: 2,
        title: "BUZOS LIBERADOS PARA PROFESORES",
        description: "Para los profes que los acompañaron en todo el recorrido escolar.",
    },
    {
        id: 3,
        title: "BANDERA DE REGALO",
        description: "La bandera más zarpada para llevar a Bariloche y explotar la presentación.",
    },
    {
        id: 4,
        title: "ENVÍO GRATIS A TODO EL PAÍS",
        description: "Estemos donde estemos, los buzos llegan a la puerta de tu colegio sin cargo adicional.",
    },
    {
        id: 5,
        title: "DESCUENTO EN FIESTAS DE EGRESADOS (SANTACRUZ)",
        description: "Beneficios exclusivos en Santacruz Eventos para una noche inolvidable.",
        logos: [
            { src: santacruz, alt: "SantaCruz Eventos", invert: false }
        ]
    },
    {
        id: 6,
        title: "DESCUENTO EN FIESTAS DE EGRESADOS (KETHAL)",
        description: "Beneficios exclusivos en Kethal Club para una noche inolvidable.",
        logos: [
            { src: kethal, alt: "Kethal Club", textLogo: "KETHAL CLUB" }
        ]
    },
    {
        id: 7,
        title: "DESCUENTO EN PRODUCCIÓN DE FOTO Y VIDEO",
        description: "Ahorrá en la presentación de buzos, UPD y fiesta con el equipo de @clickgraduates_.",
        logos: [
            { src: click, alt: "Click Graduates" }
        ]
    },
    {
        id: 8,
        title: "MÉTODO DE RECAUDACIÓN MATINEE",
        description: "Posibilidad de armar una matinee con @nilus.arg para juntar plata para el curso de forma fácil y segura.",
        logos: [
            { src: nilus, alt: "Nilus", textLogo: "@nilus.arg" }
        ]
    },
    {
        id: 9,
        title: "DESCUENTO EN TRASLADOS EN MICROS",
        description: "Beneficio en @micros.bsas para moverse todo el curso (Válido solo en AMBA y CABA).",
        logos: [
            { src: micros, alt: "Micros Bs As", textLogo: "@micros.bsas" }
        ]
    }
];

const BenefitCard: React.FC<{ benefit: Benefit, index: number }> = ({ benefit, index }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleUnlock = () => {
        if (!isUnlocked) {
            setIsUnlocked(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative group min-h-[400px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500`}
            onMouseEnter={handleUnlock}
            onClick={handleUnlock}
        >
            {/* Base Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1429] to-[#0a0f1d] border border-blue-900/40 rounded-3xl z-0" />

            {/* Glowing borders */}
            <div className={`absolute inset-0 border-2 rounded-3xl transition-colors duration-700 z-10 pointer-events-none ${isUnlocked ? 'border-primary/50' : 'border-transparent group-hover:border-primary/30'}`} />

            <AnimatePresence mode="wait">
                {!isUnlocked ? (
                    // Locked State
                    <motion.div
                        key="locked"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center"
                    >
                        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
                            />
                            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-500/30 group-hover:bg-blue-600/20 group-hover:border-blue-400 transition-all duration-300">
                                <Lock className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                            </div>
                        </div>
                        <h3 className="text-xl md:text-3xl font-black text-gray-400 mb-2 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                            Beneficio {index + 1}
                        </h3>
                        <p className="text-sm md:text-base text-blue-500/80 uppercase font-bold tracking-widest mt-4 flex items-center gap-2 group-hover:text-blue-400">
                            <Sparkles className="w-4 h-4" />
                            Descubrir
                        </p>
                    </motion.div>
                ) : (
                    // Unlocked State
                    <motion.div
                        key="unlocked"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="absolute inset-0 z-20 flex flex-col p-8 h-full relative"
                    >
                        {/* Animated Success Background */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/40 rounded-full blur-2xl pointer-events-none"
                        />

                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-blue-300">
                                Desbloqueado
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col justify-center">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase leading-tight">
                                {benefit.title}
                            </h3>
                            {benefit.description && (
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            )}
                        </div>

                        {/* Space for logos or additional tags */}
                        {benefit.logos && (
                            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 w-full">
                                {benefit.logos.map((logoItem, idx) => (
                                    <div key={idx} className="flex items-center justify-center h-16 min-w-[6rem]">
                                        {logoItem.src ? (
                                            <img
                                                src={logoItem.src}
                                                alt={logoItem.alt}
                                                className={`h-full w-auto object-contain max-w-[150px] ${logoItem.invert ? 'brightness-0 invert opacity-80' : ''}`}
                                            />
                                        ) : (
                                            <span className="text-sm md:text-base font-black text-white uppercase tracking-widest px-4 border-2 border-dashed border-white/20 rounded-xl py-2">
                                                {logoItem.textLogo || logoItem.alt}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const BenefitsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-[100dvh] bg-[#0a0f1d] selection:bg-primary selection:text-white">

            {/* Detailed Background specific to Beneficios */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[5%] -left-[10%] text-[15rem] font-black text-white/[0.02] -rotate-12 whitespace-nowrap">
                    REWARDS
                </div>
                <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[-200px] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 py-32 relative z-10 min-h-[100dvh] flex flex-col">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Exclusivo GREAT CREW
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Tus Beneficios <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Ocultos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 leading-relaxed font-medium"
                    >
                        Descubrí todas las ventajas de elegirnos para hacer los buzos de tu curso. Pasá por encima de las tarjetas para revelar cada beneficio.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
                    {benefitsData.map((benefit, index) => {
                        // Si es el último elemento y el total de elementos es impar, lo centramos ocupando ambas columnas en desktop
                        const isLastAndOdd = index === benefitsData.length - 1 && benefitsData.length % 2 !== 0;

                        return (
                            <div key={benefit.id} className={isLastAndOdd ? 'md:col-span-2 md:w-1/2 md:mx-auto w-full' : ''}>
                                <BenefitCard benefit={benefit} index={index} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BenefitsPage;
