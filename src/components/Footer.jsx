import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: 'All Products', path: '/shop' },
            { name: 'Duvet Sets', path: '/shop?category=duvet' },
            { name: 'Sheet Sets', path: '/shop?category=sheets' },
            { name: 'Pillows', path: '/shop?category=pillows' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Contact', path: '/contact' },
            { name: 'Agent Program', path: '/dashboard' },
            { name: 'FAQ', path: '/faq' },
        ],
        support: [
            { name: 'Shipping Info', path: '/shipping' },
            { name: 'Returns Policy', path: '/returns' },
            { name: 'Size Guide', path: '/size-guide' },
            { name: 'Care Instructions', path: '/care' },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-midnight dark:bg-midnight-300 text-cream py-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-serif font-bold text-gradient-gold mb-4">
                            LinenAd 2.0
                        </h2>
                        <p className="text-cream/70 mb-6 max-w-md">
                            Bringing luxury bedding to every home in Bulawayo. Experience
                            the finest materials, exceptional quality, and unmatched comfort.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-cream/80">
                                <MapPin className="w-5 h-5 text-gold" />
                                <span>123 Fife Street, Bulawayo</span>
                            </div>
                            <div className="flex items-center space-x-3 text-cream/80">
                                <Phone className="w-5 h-5 text-gold" />
                                <span>+263 77 123 4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-cream/80">
                                <Mail className="w-5 h-5 text-gold" />
                                <span>info@linenad.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gold">Shop</h3>
                        <ul className="space-y-2">
                            {footerLinks.shop.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-cream/70 hover:text-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gold">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-cream/70 hover:text-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gold">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-cream/70 hover:text-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-cream/10 pt-8 mb-8">
                    <div className="max-w-md">
                        <h3 className="text-lg font-semibold mb-2 text-gold">Stay Connected</h3>
                        <p className="text-cream/70 text-sm mb-4">
                            Subscribe to our newsletter for exclusive deals and sleep tips
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 bg-midnight-100 border border-cream/10 rounded-l-lg text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-gold"
                            />
                            <button className="px-6 py-2 bg-gold hover:bg-gold-500 text-midnight font-semibold rounded-r-lg transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <p className="text-cream/60 text-sm">
                        © {currentYear} LinenAd 2.0. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        <span className="text-cream/60 text-sm mr-2">Follow us:</span>
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-midnight-100 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
                                >
                                    <Icon className="w-5 h-5 text-cream/70 group-hover:text-midnight transition-colors duration-300" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center space-x-4 text-sm">
                        <Link to="/privacy" className="text-cream/60 hover:text-gold transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <span className="text-cream/30">|</span>
                        <Link to="/terms" className="text-cream/60 hover:text-gold transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
