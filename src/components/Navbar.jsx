import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDark, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Agent Portal', path: '/dashboard' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass-strong shadow-glass"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold"
                        >
                            LinenAd 2.0
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-medium transition-colors duration-300 ${isActive(link.path)
                                    ? 'text-gold'
                                    : 'text-midnight dark:text-cream hover:text-gold'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full glass hover:bg-gold/20 transition-all duration-300"
                            aria-label="Toggle dark mode"
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Sun className="w-5 h-5 text-gold" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Moon className="w-5 h-5 text-midnight" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full glass"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-gold" />
                            ) : (
                                <Moon className="w-5 h-5 text-midnight" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg glass"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-midnight dark:text-cream" />
                            ) : (
                                <Menu className="w-6 h-6 text-midnight dark:text-cream" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-strong border-t border-white/20 dark:border-midnight-50/20"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 font-medium transition-colors duration-300 ${isActive(link.path)
                                        ? 'text-gold'
                                        : 'text-midnight dark:text-cream hover:text-gold'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
