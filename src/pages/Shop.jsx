import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Duvet Sets', 'Pillowcases', 'Sheet Sets', 'Throws'];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-20 min-h-screen bg-cream dark:bg-midnight">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-cream via-cream-100 to-gold-50 dark:from-midnight dark:via-midnight-100 dark:to-midnight-200 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-midnight dark:text-cream mb-4">
                            Our Collection
                        </h1>
                        <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                            Discover luxury bedding that transforms your sleep experience
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters Section */}
                <div className="mb-8 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-xl">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-midnight/40 dark:text-cream/40" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-midnight-100 border border-midnight/10 dark:border-cream/10 rounded-xl text-midnight dark:text-cream placeholder-midnight/40 dark:placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                        <div className="flex items-center space-x-2 text-midnight dark:text-cream">
                            <SlidersHorizontal className="w-5 h-5" />
                            <span className="font-medium">Filter:</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-gold text-midnight'
                                        : 'bg-white dark:bg-midnight-100 text-midnight dark:text-cream hover:bg-gold/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-midnight/60 dark:text-cream/60">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-midnight/60 dark:text-cream/60">
                            No products found matching your criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
