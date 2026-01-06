import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { staggerContainer, staggerItem } from '../utils/animations';

const Testimonials = () => {
    return (
        <section className="py-20 bg-cream-100 dark:bg-midnight-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight dark:text-cream mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                        Real experiences from real customers who sleep like royalty
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={staggerItem}
                            className="glass p-6 rounded-2xl hover:shadow-float transition-all duration-300"
                        >
                            {/* Rating Stars */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-gold text-gold"
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-midnight dark:text-cream mb-4 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Customer Info */}
                            <div className="border-t border-midnight/10 dark:border-cream/10 pt-4">
                                <p className="font-semibold text-midnight dark:text-cream">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-midnight/60 dark:text-cream/60">
                                    {testimonial.location}
                                </p>
                                <p className="text-xs text-gold mt-1">
                                    {testimonial.product}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
