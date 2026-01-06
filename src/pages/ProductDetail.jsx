import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Share2, Check, Truck, Shield, ChevronLeft } from 'lucide-react';
import { products } from '../data/mockData';
import { fadeInUp } from '../utils/animations';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center bg-cream dark:bg-midnight">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-midnight dark:text-cream mb-4">
                        Product Not Found
                    </h1>
                    <Link to="/shop" className="text-gold hover:underline">
                        Return to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const images = [product.image, product.lifestyleImage];

    const handleAddToCart = () => {
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    };

    const features = [
        { icon: Truck, text: "Free delivery in Bulawayo" },
        { icon: Shield, text: "Quality guarantee" },
        { icon: Check, text: "30-day returns" },
    ];

    return (
        <div className="pt-20 min-h-screen bg-cream dark:bg-midnight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <Link
                    to="/shop"
                    className="inline-flex items-center space-x-2 text-midnight/60 dark:text-cream/60 hover:text-gold transition-colors mb-8"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back to Shop</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        {/* Main Image */}
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-cream-200 dark:bg-midnight-200">
                            <img
                                src={images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            {images.map((image, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-xl overflow-hidden ${selectedImage === idx
                                            ? 'ring-4 ring-gold'
                                            : 'ring-2 ring-midnight/10 dark:ring-cream/10'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} view ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Category */}
                        <div className="text-gold text-sm font-medium mb-2">
                            {product.category}
                        </div>

                        {/* Product Name */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-midnight dark:text-cream mb-4">
                            {product.name}
                        </h1>

                        {/* Rating & Reviews */}
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? 'fill-gold text-gold'
                                                : 'text-midnight/20 dark:text-cream/20'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-midnight/60 dark:text-cream/60">
                                {product.rating} ({product.reviews} reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-midnight dark:text-cream">
                                ${product.price}
                            </span>
                        </div>

                        {/* Short Description */}
                        <p className="text-lg text-midnight/80 dark:text-cream/80 mb-6">
                            {product.description}
                        </p>

                        {/* Long Description */}
                        <p className="text-midnight/70 dark:text-cream/70 mb-8">
                            {product.longDescription}
                        </p>

                        {/* Stock Status */}
                        <div className="mb-6">
                            {product.inStock ? (
                                <span className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                                    <Check className="w-4 h-4" />
                                    <span>In Stock</span>
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-midnight dark:text-cream mb-2">
                                Quantity
                            </label>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-lg bg-cream-200 dark:bg-midnight-200 flex items-center justify-center hover:bg-gold hover:text-midnight transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-xl font-semibold text-midnight dark:text-cream w-12 text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-lg bg-cream-200 dark:bg-midnight-200 flex items-center justify-center hover:bg-gold hover:text-midnight transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className={`flex-1 flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${addedToCart
                                        ? 'bg-green-500 text-white'
                                        : product.inStock
                                            ? 'bg-gold hover:bg-gold-500 text-midnight hover:scale-105'
                                            : 'bg-midnight/20 text-midnight/40 dark:bg-cream/20 dark:text-cream/40 cursor-not-allowed'
                                    }`}
                            >
                                {addedToCart ? (
                                    <>
                                        <Check className="w-5 h-5" />
                                        <span>Added to Cart!</span>
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>Add to Cart</span>
                                    </>
                                )}
                            </button>

                            <button className="px-6 py-4 rounded-full border-2 border-midnight/10 dark:border-cream/10 hover:border-gold hover:bg-gold/10 transition-colors">
                                <Heart className="w-6 h-6 text-midnight dark:text-cream" />
                            </button>

                            <button className="px-6 py-4 rounded-full border-2 border-midnight/10 dark:border-cream/10 hover:border-gold hover:bg-gold/10 transition-colors">
                                <Share2 className="w-6 h-6 text-midnight dark:text-cream" />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 border-t border-midnight/10 dark:border-cream/10 pt-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <Icon className="w-5 h-5 text-gold" />
                                        <span className="text-midnight/70 dark:text-cream/70">
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* SKU */}
                        <div className="mt-6 text-sm text-midnight/50 dark:text-cream/50">
                            SKU: {product.sku}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
