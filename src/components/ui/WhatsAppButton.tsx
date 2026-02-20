import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    // URL containing the pre-filled message
    const whatsappUrl = "https://wa.me/5491168972616?text=¡Hola!%20Estoy%20visitando%20la%20página%20web%20de%20GREAT%20GRADUATES%20y%20me%20gustaría%20hacer%20una%20consulta.";

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none"
        >
            {/* Small floating tooltip message to encourage clicking */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-xl shadow-lg shadow-black/10 flex items-center"
            >
                ¿Tenes dudas? ¡Escribinos! 👋
            </motion.div>

            {/* Main Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:bg-green-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
            >
                <MessageCircle size={32} className="fill-current" />
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
