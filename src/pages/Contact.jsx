import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["123 Fife Street", "Bulawayo, Zimbabwe"]
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+263 77 123 4567", "+263 71 987 6543"]
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["info@linenad.com", "support@linenad.com"]
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Fri: 8AM - 6PM", "Sat: 9AM - 4PM"]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                            Get In Touch
                        </h1>
                        <p className="text-xl text-midnight/70 dark:text-cream/70 max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-midnight dark:text-cream mb-4">
                                Contact Information
                            </h2>
                            <p className="text-midnight/70 dark:text-cream/70 mb-8">
                                Reach out to us through any of these channels. We're here to help!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={staggerItem}
                                        className="flex items-start space-x-4 glass p-6 rounded-xl"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-midnight dark:text-cream mb-2">
                                                {info.title}
                                            </h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-midnight/70 dark:text-cream/70">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            variants={staggerItem}
                            className="aspect-video rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center"
                        >
                            <div className="text-center p-8">
                                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                                <p className="text-midnight font-medium">
                                    Map integration coming soon
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-strong p-8 rounded-2xl">
                            <h2 className="text-2xl font-serif font-bold text-midnight dark:text-cream mb-6">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-midnight dark:text-cream mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-midnight-100 border border-midnight/10 dark:border-cream/10 rounded-lg text-midnight dark:text-cream focus:outline-none focus:ring-2 focus:ring-gold"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-midnight dark:text-cream mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-midnight-100 border border-midnight/10 dark:border-cream/10 rounded-lg text-midnight dark:text-cream focus:outline-none focus:ring-2 focus:ring-gold"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-midnight dark:text-cream mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-midnight-100 border border-midnight/10 dark:border-cream/10 rounded-lg text-midnight dark:text-cream focus:outline-none focus:ring-2 focus:ring-gold"
                                        placeholder="+263 77 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-midnight dark:text-cream mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white dark:bg-midnight-100 border border-midnight/10 dark:border-cream/10 rounded-lg text-midnight dark:text-cream focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${submitted
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gold hover:bg-gold-500 text-midnight'
                                        }`}
                                    disabled={submitted}
                                >
                                    {submitted ? (
                                        <>
                                            <span>✓ Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
