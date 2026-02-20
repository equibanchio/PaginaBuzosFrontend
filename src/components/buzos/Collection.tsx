import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { looks } from '../../data/looks';
import { ArrowRight } from 'lucide-react';
import logo from '../../assets/GreatLogo.png';

const Collection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
                {/* Floating Logos */}
                <img src={logo} alt="" className="absolute top-[10%] right-[10%] w-24 md:w-32 opacity-25 rotate-[15deg]" />
                <img src={logo} alt="" className="absolute top-[50%] left-[8%] w-20 md:w-28 opacity-[0.15] -rotate-[10deg]" />
                <img src={logo} alt="" className="absolute bottom-[10%] right-[15%] w-24 opacity-20 rotate-[10deg]" />

                <div className="absolute top-[10%] -left-[10%] text-[15rem] font-black text-gray-200 opacity-60 rotate-12 whitespace-nowrap drop-shadow-sm">
                    NEW DROP
                </div>
                <div className="absolute bottom-[20%] -right-[10%] text-[15rem] font-black text-gray-200 opacity-60 -rotate-12 whitespace-nowrap drop-shadow-sm">
                    COLLECTION
                </div>
                <div className="absolute top-1/3 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[150px] opacity-20 mix-blend-multiply"></div>
                <div className="absolute bottom-1/3 left-20 w-[600px] h-[600px] bg-purple-200 rounded-full blur-[150px] opacity-20 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-[#0a0f1d] mb-6 uppercase tracking-tighter leading-tight relative inline-block">
                            Nuestra Colección
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#0a0f1d] transform -skew-x-12"></span>
                        </h2>
                        <p className="text-gray-500 text-xl font-bold uppercase tracking-widest mt-4">
                            Diseños Exclusivos • Edición Limitada
                        </p>
                    </motion.div>
                </div>

                {/* Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {looks.map((look, index) => (
                        <motion.div
                            key={look.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`group ${index % 2 !== 0 ? 'lg:translate-y-16' : ''}`} // Stagger effect on desktop
                        >
                            <Link to={`/look/${look.id}`} className="block relative">
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-blue-900/20">

                                    {/* Frame/Border Effect */}
                                    <div className="absolute inset-2 border border-white/20 z-20 pointer-events-none"></div>

                                    {/* Images */}
                                    <img
                                        src={look.images[0]}
                                        alt={look.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                                    />
                                    <img
                                        src={look.images[1] || look.images[0]}
                                        alt={`${look.title} detail`}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#0a0f1d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <ArrowRight className="w-6 h-6 text-[#0a0f1d]" />
                                        </div>
                                    </div>

                                    {/* Floating Tag */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a0f1d] z-20 rotate-3 group-hover:rotate-0 transition-transform">
                                        New
                                    </div>
                                </div>

                                <div className="relative pl-2">
                                    {/* Vertical Line Decoration */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-[#0a0f1d] group-hover:h-full transition-all duration-300"></div>

                                    <h3 className="text-2xl font-black text-[#0a0f1d] uppercase leading-none mb-1 group-hover:text-blue-700 transition-colors">
                                        {look.title}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                                        Ver diseño
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Spacer for Staggered Grid */}
                <div className="h-0 lg:h-32"></div>

            </div>
        </section>
    );
};

export default Collection;
