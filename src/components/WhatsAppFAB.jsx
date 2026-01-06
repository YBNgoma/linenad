import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    // Replace with actual WhatsApp number
    const whatsappNumber = "263771234567"; // Zimbabwe number format
    const message = "Hi! I'm interested in your luxury bedding collection.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute bottom-full right-0 mb-4 whitespace-nowrap"
                    >
                        <div className="glass-strong px-4 py-2 rounded-lg shadow-lg">
                            <p className="text-sm font-medium text-midnight dark:text-cream">
                                Chat with an Expert
                            </p>
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/90 dark:border-t-midnight-100/90" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-16 h-16 bg-gold hover:bg-gold-500 rounded-full shadow-float hover:shadow-float-lg transition-all duration-300 animate-pulse-slow"
            >
                <MessageCircle className="w-8 h-8 text-midnight" />
            </motion.a>
        </div>
    );
};

export default WhatsAppFAB;
