import { motion } from 'framer-motion';
import { Truck, Wallet, Shield } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const TrustSignals = () => {
    const signals = [
        {
            icon: Truck,
            title: "Free Delivery in Bulawayo",
            description: "On orders over $50"
        },
        {
            icon: Wallet,
            title: "Cash on Delivery",
            description: "Pay when you receive"
        },
        {
            icon: Shield,
            title: "Quality Guarantee",
            description: "100% satisfaction or refund"
        }
    ];

    return (
        <section className="py-16 bg-cream dark:bg-midnight border-y border-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {signals.map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-midnight dark:text-cream mb-1">
                                        {signal.title}
                                    </h3>
                                    <p className="text-sm text-midnight/70 dark:text-cream/70">
                                        {signal.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSignals;
