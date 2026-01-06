import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/mockData';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="pt-20 min-h-screen bg-cream dark:bg-midnight">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-cream via-cream-100 to-gold-50 dark:from-midnight dark:via-midnight-100 dark:to-midnight-200 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-midnight dark:text-cream mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                            Find answers to common questions about our products, delivery, and agent program
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Items */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {faqs.map((faq) => (
                            <motion.div
                                key={faq.id}
                                variants={staggerItem}
                                className="glass rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gold/10 transition-colors duration-300"
                                >
                                    <span className="font-semibold text-lg text-midnight dark:text-cream pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                                        {openId === faq.id ? (
                                            <Minus className="w-5 h-5 text-gold" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gold" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-midnight/80 dark:text-cream/80 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Still Have Questions? */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 text-center glass p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-serif font-bold text-midnight dark:text-cream mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-midnight/70 dark:text-cream/70 mb-6">
                            Our customer support team is here to help
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-gold hover:bg-gold-500 text-midnight font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
