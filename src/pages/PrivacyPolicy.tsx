import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-16 bg-white min-h-screen"
        >
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                        Política de Privacidad
                    </h1>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                    <p className="lead text-xl text-gray-800 font-medium">
                        En <span className="text-blue-600 font-bold">Great Graduates</span>, valoramos profundamente tu confianza y nos comprometemos a proteger la información personal que compartes con nosotros al planificar tu indumentaria de egresados.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Datos de Contacto:</strong> Al solicitar un presupuesto o diseño, recopilamos información como tu nombre, colegio, año de egreso, dirección de correo electrónico y número de WhatsApp.</li>
                            <li><strong>Detalles del Pedido:</strong> Información específica sobre talles, preferencias de diseño y cantidades necesarias para la confección de las prendas.</li>
                            <li><strong>Información de Uso:</strong> Recopilamos datos anónimos sobre cómo navegas por nuestro sitio web para mejorar la experiencia de usuario y optimizar nuestros modelos mostrados.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de tu Información</h2>
                        <p>Utilizamos la información recopilada exclusivamente para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Procesar y gestionar tus pedidos de buzos y camperas.</li>
                            <li>Diseñar propuestas personalizadas basadas en las preferencias de tu curso.</li>
                            <li>Mantenerte informado sobre el estado de producción y entrega.</li>
                            <li>Responder a tus consultas y brindar soporte post-venta.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección y Compartición de Datos</h2>
                        <p>
                            Tu privacidad es nuestra prioridad. <strong>No vendemos ni alquilamos tus datos personales</strong> a terceros.
                            Solo compartimos información estrictamente necesaria con proveedores de servicios de confianza (como empresas de logística para los envíos) bajo estrictos acuerdos de confidencialidad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                        <p>
                            Utilizamos cookies esenciales para el funcionamiento del sitio y herramientas de análisis para entender mejor qué diseños son los más populares. Puedes configurar tu navegador para rechazar estas cookies, aunque esto podría afectar algunas funcionalidades del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad</h2>
                        <p>
                            Implementamos medidas de seguridad físicas, electrónicas y administrativas para proteger tus datos contra acceso no autorizado, alteración o divulgación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cambios en esta Política</h2>
                        <p>
                            Podemos actualizar esta política ocasionalmente para reflejar cambios en nuestros servicios. Te recomendamos revisar esta página periódicamente. La última actualización fue realizada en <strong>Febrero 2026</strong>.
                        </p>
                    </section>

                    <section className="bg-gray-100 p-8 rounded-2xl border-l-4 border-blue-600 mt-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">¿Tienes dudas?</h2>
                        <p className="mb-4">
                            Si tienes preguntas sobre cómo manejamos tus datos, no dudes en contactarnos.
                        </p>
                        <p className="font-bold text-blue-800">
                            WhatsApp: +54 11 6897-2616
                        </p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
