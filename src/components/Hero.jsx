import { motion } from 'framer-motion';
import { fadeInUp, magneticHover } from '../utils/animations';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream-100 to-gold-50 dark:from-midnight dark:via-midnight-100 dark:to-midnight-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="space-y-8"
                >
                    {/* Headline */}
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-midnight dark:text-cream leading-tight"
                        variants={fadeInUp}
                    >
                        Sleep Like{' '}
                        <span className="text-gradient-gold block mt-2">
                            Royalty
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-midnight/80 dark:text-cream/80 max-w-3xl mx-auto font-light"
                        variants={fadeInUp}
                    >
                        Experience the finest luxury bedding, crafted from the world's most exquisite materials.
                        Delivered to your doorstep in Bulawayo.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={fadeInUp}
                        className="pt-8"
                    >
                        <motion.button
                            whileHover={magneticHover}
                            whileTap={{ scale: 0.95 }}
                            className="btn-gold btn-magnetic group inline-flex items-center space-x-2 text-lg"
                            onClick={() => {
                                document.getElementById('products')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            <span>Shop Collection</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="pt-16 flex justify-center space-x-8"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-serif font-bold text-gold">1000+</div>
                            <div className="text-sm text-midnight/60 dark:text-cream/60 mt-1">Thread Count</div>
                        </div>
                        <div className="w-px bg-gold/30" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-serif font-bold text-gold">100%</div>
                            <div className="text-sm text-midnight/60 dark:text-cream/60 mt-1">Satisfaction</div>
                        </div>
                        <div className="w-px bg-gold/30" />
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-serif font-bold text-gold">24/7</div>
                            <div className="text-sm text-midnight/60 dark:text-cream/60 mt-1">Support</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-gold rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
