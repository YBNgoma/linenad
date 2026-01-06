import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/product/${product.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="product-card group cursor-pointer"
            >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                    {/* Primary Image */}
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.7 }}
                    />

                    {/* Lifestyle Image (Cross-fade on hover) */}
                    <motion.img
                        src={product.lifestyleImage}
                        alt={`${product.name} lifestyle`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.7 }}
                    />

                    {/* Quick View Button */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute bottom-0 left-0 right-0 p-4"
                            >
                                <button className="w-full bg-gold hover:bg-gold-500 text-midnight font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-float transition-all duration-300 flex items-center justify-center space-x-2">
                                    <Eye className="w-5 h-5" />
                                    <span>View Details</span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Stock Badge */}
                    {product.inStock && (
                        <div className="absolute top-4 right-4 bg-gold text-midnight text-xs font-semibold px-3 py-1 rounded-full">
                            In Stock
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-3">
                    <div className="text-sm text-gold font-medium">{product.category}</div>
                    <h3 className="text-xl font-serif font-semibold text-midnight dark:text-cream group-hover:text-gold transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-sm text-midnight/70 dark:text-cream/70 line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-midnight dark:text-cream">
                            ${product.price}
                        </span>
                        <span className="text-xs text-midnight/50 dark:text-cream/50">
                            SKU: {product.sku}
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
