import { motion } from 'framer-motion';
import { Heart, Award, Users, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: "Quality First",
            description: "We source only the finest materials from around the world to ensure your comfort."
        },
        {
            icon: Award,
            title: "Craftsmanship",
            description: "Each piece is carefully crafted with attention to detail and luxury in mind."
        },
        {
            icon: Users,
            title: "Community",
            description: "Our agent program empowers local entrepreneurs to build their own businesses."
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description: "We're revolutionizing bedding retail with our unique runner/agent model."
        }
    ];

    const stats = [
        { number: "1000+", label: "Happy Customers" },
        { number: "50+", label: "Active Agents" },
        { number: "4.9", label: "Average Rating" },
        { number: "100%", label: "Satisfaction" }
    ];

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
                            About LinenAd 2.0
                        </h1>
                        <p className="text-xl text-midnight/70 dark:text-cream/70 max-w-3xl mx-auto leading-relaxed">
                            We're on a mission to bring luxury bedding to every home in Bulawayo,
                            while empowering local entrepreneurs through our innovative agent program.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-midnight dark:text-cream mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-midnight/80 dark:text-cream/80 leading-relaxed">
                                <p>
                                    LinenAd 2.0 was born from a simple observation: luxury bedding shouldn't be a privilege
                                    reserved for the few. Everyone deserves to sleep like royalty.
                                </p>
                                <p>
                                    We started in Bulawayo with a vision to make premium Egyptian cotton, silk, and linen
                                    accessible to our community. But we didn't stop there.
                                </p>
                                <p>
                                    Our revolutionary agent/runner program allows passionate individuals to become
                                    entrepreneurs, earning commissions while sharing products they believe in. It's not
                                    just about selling bedding—it's about building a community of success.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold-100 to-gold-300 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl md:text-8xl font-serif font-bold text-midnight mb-4">
                                        2.0
                                    </div>
                                    <p className="text-xl font-medium text-midnight">
                                        The Future of Bedding Retail
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-cream-100 dark:bg-midnight-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-midnight dark:text-cream mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className="glass p-8 rounded-2xl text-center hover:shadow-float transition-all duration-300"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-gold" />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-midnight dark:text-cream mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-midnight/70 dark:text-cream/70">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-midnight/70 dark:text-cream/70">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
