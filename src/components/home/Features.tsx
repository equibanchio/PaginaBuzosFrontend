import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, PenTool, Sparkles } from 'lucide-react';

const features = [
    {
        title: "Fabricación Propia",
        description: "Control total del proceso. Desde la elección de la tela hasta la última costura, garantizamos calidad superior en cada prenda.",
        icon: ShieldCheck,
        colSpan: "md:col-span-2",
        bg: "bg-blue-900",
        textColor: "text-white"
    },
    {
        title: "Diseños Únicos",
        description: "Tu curso, tu identidad. Creamos diseños exclusivos que te representan.",
        icon: PenTool,
        colSpan: "md:col-span-1",
        bg: "bg-gray-100",
        textColor: "text-gray-900"
    },
    {
        title: "Envíos a Todo el País",
        description: "Llegamos a donde estés. Logística optimizada para cumplir con los plazos de entrega.",
        icon: Truck,
        colSpan: "md:col-span-1",
        bg: "bg-gray-100",
        textColor: "text-gray-900"
    },
    {
        title: "Calidad Premium",
        description: "Materiales seleccionados para durar. No se achican, no destiñen, siempre impecables.",
        icon: Sparkles,
        colSpan: "md:col-span-2",
        bg: "bg-black",
        textColor: "text-white"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0
    }
};

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
                    >
                        POR QUÉ ELEGIRNOS
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`${feature.colSpan} p-8 rounded-[2rem] ${feature.bg} ${feature.textColor} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute -right-4 -top-4 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                                <feature.icon size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-6">
                                    <div className={`p-4 rounded-2xl w-fit mb-4 ${feature.textColor === 'text-white' ? 'bg-white/20 backdrop-blur-md' : 'bg-gray-200'}`}>
                                        <feature.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className={`text-lg font-medium leading-relaxed ${feature.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
