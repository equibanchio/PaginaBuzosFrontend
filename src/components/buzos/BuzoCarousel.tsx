import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images dynamically using Vite's import.meta.glob
const rawImages = import.meta.glob<{ default: string }>('../../assets/buzosCarousel/*.{png,jpg,jpeg}', { eager: true });
const allImages = Object.values(rawImages).map((module) => module.default);

const BuzoCarousel: React.FC = () => {
    // Randomize images on initial mount
    const images = useMemo(() => {
        return [...allImages].sort(() => Math.random() - 0.5);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate the position of an image relative to the current index
    const getPosition = (index: number) => {
        const total = images.length;
        let offset = (index - currentIndex + total) % total;
        if (offset > total / 2) offset -= total;

        if (offset === 0) return 'center';
        if (offset === 1) return 'right';
        if (offset === -1) return 'left';
        if (offset > 1) return 'rightHidden';
        return 'leftHidden';
    };

    const variants = {
        center: {
            x: "0%",
            scale: 1,
            zIndex: 10,
            opacity: 1,
            filter: "blur(0px)",
        },
        left: {
            x: "-60%",
            scale: 0.7,
            zIndex: 5,
            opacity: 0.8,
            filter: "blur(2px)",
        },
        right: {
            x: "60%",
            scale: 0.7,
            zIndex: 5,
            opacity: 0.8,
            filter: "blur(2px)",
        },
        rightHidden: {
            x: "100%",
            scale: 0.5,
            zIndex: 1,
            opacity: 0,
            filter: "blur(5px)",
        },
        leftHidden: {
            x: "-100%",
            scale: 0.5,
            zIndex: 1,
            opacity: 0,
            filter: "blur(5px)",
        }
    };

    const paginate = (newDirection: number) => {
        setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    return (
        <section className="pb-24 pt-0 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6">

                {/* SOMOS GREAT Header */}
                <div className="flex flex-col items-center justify-center mb-10 relative">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 tracking-[0.2em] uppercase mb-2">
                            SOMOS
                        </h2>
                        <h1 className="text-5xl md:text-8xl font-black text-[#0a0f1d] tracking-tighter leading-none">
                            GREAT
                        </h1>
                        <div className="w-24 h-1 bg-[#0a0f1d] mx-auto mt-6"></div>
                    </div>
                </div>

                {/* Carousel - 3D Effect */}
                <div className="relative w-full max-w-2xl md:max-w-6xl mx-auto h-[500px] md:h-[700px] flex items-center justify-center perspective-[1000px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial="center"
                                animate={getPosition(index)}
                                variants={variants}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute w-[70%] md:w-[40%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-white ring-1 ring-gray-200 bg-gray-100"
                                style={{
                                    transformOrigin: "center center"
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Arrows - Positioned outside or on edges depending on preference */}
                    <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-30">
                        <button
                            className="bg-white/80 hover:bg-white text-blue-900 p-3 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-lg"
                            onClick={() => paginate(-1)}
                        >
                            <ChevronLeft size={32} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-30">
                        <button
                            className="bg-white/80 hover:bg-white text-blue-900 p-3 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-lg"
                            onClick={() => paginate(1)}
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Dots Pagination */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex
                                    ? 'bg-blue-900 w-8'
                                    : 'bg-gray-400 hover:bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BuzoCarousel;
