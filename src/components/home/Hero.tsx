import React from 'react';
import { motion } from 'framer-motion';

import Button from '../ui/Button';
import bgImage from '../../assets/buzos/Buzos-7.jpg';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-primary-dark">
            {/* Background Image (Static for Performance) */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Darker overlay for text readability on bright images */}
                <div className="absolute inset-0 bg-black/40" />
            </div>



            {/* Content */}
            {/* Content - Positioned at Bottom */}
            <div className="absolute bottom-10 left-0 right-0 z-30 container mx-auto px-6 text-center text-white pointer-events-none pb-8">
                <div className="pointer-events-auto flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-xl md:text-3xl font-medium tracking-[0.2em] uppercase drop-shadow-md">
                            Tu promo, tu estilo, tu historia.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link to="/buzos" onClick={() => window.scrollTo(0, 0)}>
                            <Button size="md" variant="outline" className="text-lg px-8 py-2 rounded-full border hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                                Explorar
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scrolldown Indicator */}

        </section>
    );
};
import { Link } from 'react-router-dom';

export default Hero;
