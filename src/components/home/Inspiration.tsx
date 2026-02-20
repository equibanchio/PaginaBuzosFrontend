import React from 'react';
import { motion } from 'framer-motion';
import buzo1 from '../../assets/buzos/Buzos-307.png';
import buzo2 from '../../assets/buzos/Buzos-292.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '../../assets/GreatLogo2.png';

const Inspiration: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0a0f1d] mb-4 uppercase tracking-wide">
                        Descubrí tu Estilo
                    </h2>
                    <div className="w-24 h-1 bg-[#0a0f1d] mx-auto rounded-full opacity-20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Card 1: Inspirate */}
                    <div className="relative group">
                        {/* Decorative Background - Logo Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.03] pointer-events-none z-0 flex items-center justify-center">
                            <img src={logo} alt="" className="w-full h-full object-contain brightness-0" />
                        </div>

                        {/* Image Container */}
                        <div className="relative z-10 aspect-[3/4] flex items-center justify-center overflow-hidden">
                            <motion.img
                                src={buzo1}
                                alt="Descubrí"
                                className="h-full w-full object-cover object-top md:object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            />
                        </div>

                        {/* Bottom Bar */}
                        <div className="absolute bottom-8 left-0 w-full z-20">
                            <div className="bg-[#0a0f1d] text-white py-4 px-8 flex justify-between items-center mx-4 rounded-lg shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-wider">Descubrí</h3>
                                <Link to="/buzos" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-sm font-bold bg-white text-[#0a0f1d] px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                                    VER <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Calidad */}
                    <div className="relative group mt-12 md:mt-0">
                        {/* Decorative Background - Logo Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.03] pointer-events-none z-0 flex items-center justify-center">
                            <img src={logo} alt="" className="w-full h-full object-contain brightness-0" />
                        </div>

                        {/* Image Container */}
                        <div className="relative z-10 aspect-[3/4] flex items-center justify-center overflow-hidden">
                            <motion.img
                                src={buzo2}
                                alt="Descubrí"
                                className="h-full w-full object-cover object-top md:object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            />
                        </div>

                        {/* Bottom Bar */}
                        <div className="absolute bottom-8 left-0 w-full z-20">
                            <div className="bg-[#0a0f1d] text-white py-4 px-8 flex justify-between items-center mx-4 rounded-lg shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-wider">Descubrí</h3>
                                <Link to="/buzos" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-sm font-bold bg-white text-[#0a0f1d] px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                                    VER <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Inspiration;
