import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquareDot, PenTool, Shirt, PackageCheck } from 'lucide-react';
import logo from '../../assets/GreatLogo.png';

const steps = [
    {
        number: "01",
        title: "Consulta Inicial",
        description: "Nos contás tu idea, elegís el modelo base y los colores. Te asesoramos para que tu diseño sea único.",
        icon: MessageSquareDot,
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        number: "02",
        title: "Diseño y Muestra",
        description: "Creamos un boceto digital de alta calidad. Ajustamos cada detalle hasta que esté perfecto para vos.",
        icon: PenTool,
        color: "text-purple-500",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
    {
        number: "03",
        title: "Producción Premium",
        description: "Confeccionamos tus buzos con materiales de primera calidad. Corte, estampado y costura con atención obsesiva al detalle.",
        icon: Shirt,
        color: "text-pink-500",
        bg: "bg-pink-50",
        border: "border-pink-100"
    },
    {
        number: "04",
        title: "Entrega Final",
        description: "Recibís tus buzos listos para usar. Empaquetados con cuidado para que la experiencia sea increíble desde que abrís la caja.",
        icon: PackageCheck,
        color: "text-green-500",
        bg: "bg-green-50",
        border: "border-green-100"
    }
];

const ProcessSteps: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="proceso" className="py-24 bg-slate-50 relative overflow-hidden border-t-2 border-white">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                {/* Floating Logos */}
                <img src={logo} alt="" className="absolute top-[20%] left-[8%] w-32 opacity-25 -rotate-[15deg]" />
                <img src={logo} alt="" className="absolute bottom-[20%] right-[8%] w-40 opacity-20 rotate-[15deg]" />

                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Cómo trabajamos</span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#0a0f1d] uppercase tracking-tighter mb-6">
                        El Proceso
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Simple, transparente y pensado para que disfrutes el camino hacia tu buzo ideal.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block rounded-full">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full origin-top"
                        />
                    </div>

                    {/* Central Line (Mobile - Left aligned) */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 md:hidden rounded-full">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full origin-top"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full md:w-1/2 pl-20 md:pl-0">
                                    <div className={`
                                        bg-white p-8 rounded-2xl shadow-xl shadow-gray-100 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                                        ${index % 2 === 0 ? 'md:ml-16 md:mr-0' : 'md:mr-16 md:ml-0'}
                                        ${step.border}
                                    `}>
                                        <div className={`inline-flex items-center justify-center p-3 rounded-xl ${step.bg} ${step.color} mb-4`}>
                                            <step.icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#0a0f1d] mb-3">{step.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-white shadow-[0_0_0_4px_rgba(243,244,246,1)] z-20">
                                    <div className="w-4 h-4 bg-[#0a0f1d] rounded-full"></div>
                                </div>

                                {/* Empty space for desktop layout balance */}
                                <div className="hidden md:block flex-1"></div>

                                {/* Step Number (Floating Decoration) */}
                                <div className={`
                                    absolute top-0 text-9xl font-black text-gray-50 -z-10 select-none pointer-events-none transform
                                    ${index % 2 === 0 ? 'md:left-1/2 md:-translate-x-full md:-ml-32' : 'md:left-1/2 md:ml-32'}
                                    left-16 md:left-auto
                                `}>
                                    {step.number}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
