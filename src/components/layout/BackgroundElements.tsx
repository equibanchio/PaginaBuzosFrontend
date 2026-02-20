import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
    return (
        <div className="fixed inset-0 z-20 overflow-hidden pointer-events-none">
            {/* Top Right Orb */}
            <motion.div
                className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Bottom Left Orb */}
            <motion.div
                className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-300/20 blur-[120px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.25, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Bottom Right Orb */}
            <motion.div
                className="absolute -bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-[80px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />
        </div>
    );
};

export default BackgroundElements;
