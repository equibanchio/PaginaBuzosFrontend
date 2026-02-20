import React from 'react';
import { motion } from 'framer-motion';
// Using placeholders since original assets are pending
import placeholder1 from '../../assets/Click.png';
import placeholder2 from '../../assets/Click2.jpg';

const buzos = [
    { id: 1, name: "Modelo Classic", image: placeholder1, category: "Clásico" },
    { id: 2, name: "Modelo Sport", image: placeholder2, category: "Deportivo" },
    { id: 3, name: "Modelo Oversize", image: placeholder1, category: "Urbano" },
    { id: 4, name: "Modelo Vintage", image: placeholder2, category: "Retro" },
];

const BuzoGallery: React.FC = () => {
    return (
        <section className="py-24 bg-light-gray">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">Nuestra Colección</h2>
                    <p className="text-gray-500 font-medium text-lg">Diseños que marcan tendencia.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {buzos.map((buzo, index) => (
                        <motion.div
                            key={buzo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg"
                        >
                            <img
                                src={buzo.image}
                                alt={buzo.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-white text-xs font-bold tracking-wider uppercase mb-1">{buzo.category}</span>
                                <h3 className="text-white text-xl font-bold">{buzo.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuzoGallery;
