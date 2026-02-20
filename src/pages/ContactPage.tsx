import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Instagram } from 'lucide-react';

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // We use FormSubmit for simple email forwarding without backend
    const formAction = "https://formsubmit.co/lautarofranco1@hotmail.com";

    return (
        <div className="min-h-[100dvh] bg-white">
            <div className="container mx-auto px-6 py-32 md:py-40">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-[#0a0f1d] mb-6 uppercase tracking-tighter"
                    >
                        Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Buzo</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 font-medium"
                    >
                        Dejanos tus datos o los de tu colegio y te enviaremos una cotización a medida.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0a0f1d] text-white p-10 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative background elements in the dark card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-black uppercase tracking-wide mb-8">
                                Información de Contacto
                            </h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-sm uppercase tracking-widest mb-1">WhatsApp</h4>
                                        <a href="https://wa.me/5491168972616" className="text-lg font-medium hover:text-blue-400 transition-colors">
                                            +54 11 6897-2616
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-sm uppercase tracking-widest mb-1">Ubicación</h4>
                                        <p className="text-lg font-medium">Buenos Aires, Argentina</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Instagram className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-sm uppercase tracking-widest mb-1">Instagram</h4>
                                        <a href="https://www.instagram.com/great.egresados/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-400 transition-colors">
                                            @great.egresados
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white"
                    >
                        <form action={formAction} method="POST" className="space-y-6">

                            {/* FormSubmit Configuration Settings */}
                            <input type="hidden" name="_subject" value="¡Nuevo pedido de presupuesto desde la Web!" />
                            <input type="hidden" name="_captcha" value="false" />
                            {/* <input type="hidden" name="_next" value="https://tu-web.com/gracias" /> */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Tu Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Ej: Juan Pérez"
                                        className="w-full px-4 py-3 bg-gray-100/80 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium placeholder-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="school" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Colegio</label>
                                    <input
                                        type="text"
                                        id="school"
                                        name="school"
                                        required
                                        placeholder="Ej: Colegio Nacional"
                                        className="w-full px-4 py-3 bg-gray-100/80 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="correo@ejemplo.com"
                                    className="w-full px-4 py-3 bg-gray-100/80 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Teléfono / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+54 11 ..."
                                    className="w-full px-4 py-3 bg-gray-100/80 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wide">Mensaje o Detalles del Pedido</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Hola, somos un curso de 30 alumnos y queríamos consultar por..."
                                    className="w-full px-4 py-3 bg-gray-100/80 border-2 border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all font-medium resize-none placeholder-gray-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"
                            >
                                <Send className="w-5 h-5" /> Enviar Mensaje
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Al enviar, recibirás una copia en tu correo y te contactaremos a la brevedad.
                            </p>

                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
