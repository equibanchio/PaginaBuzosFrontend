import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight, X, Maximize2, Share2 } from 'lucide-react';
import { looks } from '../data/looks';
import Button from '../components/ui/Button';

const LookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const look = looks.find(l => l.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!look) {
        return (
            <div className="min-h-[100dvh] flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Modelo no encontrado</h2>
                    <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % look.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + look.images.length) % look.images.length);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+541168972616";
        const currentUrl = window.location.href;

        // Creamos un mensaje personalizado
        const message = `¡Hola! Me interesa consultar un presupuesto por el "${look.title}".\n\nPodés ver el modelo que elegí acá: ${currentUrl}`;

        // Codificamos el mensaje para la URL
        const encodedMessage = encodeURIComponent(message);

        // Abrimos WhatsApp con el link (funciona en web y celular)
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `Página Buzos - ${look.title}`,
                    text: `Mirá este diseño para nuestro curso: ${look.title}`,
                    url: window.location.href,
                });
            } else {
                // Fallback: Copy to clipboard if Web Share API is not supported
                await navigator.clipboard.writeText(window.location.href);
                alert('¡Link copiado al portapapeles!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <div className="min-h-[100dvh] bg-white">
            <div className="container mx-auto px-6 py-24 md:py-32">

                {/* Navigation */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0a0f1d] mb-8 font-medium transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Volver a la Colección
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Gallery Section */}
                    <div className="space-y-6 lg:sticky lg:top-24">
                        {/* Main Image Carousel */}
                        <div className="relative group aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={look.images[currentImageIndex]}
                                    alt={look.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                    onClick={() => setIsLightboxOpen(true)}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(_e, { offset, velocity }) => {
                                        const swipe = Math.abs(offset.x) * velocity.x;
                                        if (swipe < -10000) nextImage();
                                        else if (swipe > 10000) prevImage();
                                    }}
                                />
                            </AnimatePresence>

                            {/* Fullscreen Icon Hint */}
                            <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <Maximize2 size={20} />
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {look.images.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                            {look.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative aspect-square rounded-xl overflow-hidden transition-all ${currentImageIndex === index ? 'ring-2 ring-blue-600 ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" loading="lazy" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Section - Aligned Top */}
                    <div className="flex flex-col pt-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Nueva Colección
                                </span>
                                <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {look.price}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-[#0a0f1d] mb-6 uppercase tracking-tight leading-none">
                                {look.title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                                {look.description}
                            </p>

                            {/* Core Features */}
                            <div className="bg-gray-50/50 rounded-3xl p-6 sm:p-8 mb-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Sobre nuestros buzos</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Calidad Premium", desc: "Telas seleccionadas y costuras reforzadas." },
                                        { title: "Diseño 100% Personalizado", desc: "Elegí colores, tipografías y apliques." },
                                        { title: "Todos los Talles", desc: "Moldería adaptada para todo el curso." },
                                        { title: "Envíos a Todo el País", desc: "Llevamos tu buzo a cualquier provincia." }
                                    ].map((feature, index) => (
                                        <li key={index} className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-[#0a0f1d] font-black text-sm uppercase tracking-wide">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                {feature.title}
                                            </div>
                                            <span className="text-gray-500 text-sm font-medium pl-3.5 leading-relaxed">{feature.desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <Link to="/beneficios" className="group flex items-center justify-between hover:bg-white p-3 -mx-3 rounded-xl transition-colors">
                                        <div className="flex flex-col">
                                            <span className="text-[#0a0f1d] font-bold text-sm uppercase tracking-wide">Conocé todos los beneficios</span>
                                            <span className="text-gray-500 text-xs">Exclusivo para la GREAT CREW</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <Button
                                    size="lg"
                                    className="gap-2 w-full text-lg shadow-xl shadow-blue-900/20 py-4"
                                    onClick={handleWhatsAppClick}
                                >
                                    <MessageCircle className="w-5 h-5" /> Consultar Presupuesto
                                </Button>
                            </div>

                            {/* Share button */}
                            <div className="mb-8">
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md"
                                >
                                    <Share2 className="w-4 h-4" />
                                    Compartir diseño con tu curso
                                </button>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 text-yellow-800 text-sm font-medium flex items-start gap-3">
                                <div className="mt-0.5">✨</div>
                                <p>Todos nuestros diseños son 100% personalizables. Podés cambiar colores, telas y estampados para que se adapten a tu curso.</p>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 lg:left-8 text-white/50 hover:text-white transition-colors hidden md:block"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <motion.img
                            key={currentImageIndex}
                            src={look.images[currentImageIndex]}
                            alt={look.title}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 lg:right-8 text-white/50 hover:text-white transition-colors hidden md:block"
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white/80 text-sm backdrop-blur-md">
                            {currentImageIndex + 1} / {look.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LookDetail;
