import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/mockData';
import { staggerContainer } from '../utils/animations';

const ProductGrid = () => {
    return (
        <section id="products" className="py-20 bg-cream-100 dark:bg-midnight-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight dark:text-cream mb-4">
                        Our Luxury Collection
                    </h2>
                    <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                        Handpicked premium bedding essentials to transform your bedroom into a sanctuary
                    </p>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGrid;
