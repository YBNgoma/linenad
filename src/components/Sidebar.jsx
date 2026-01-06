import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Share2,
    Trophy,
    Settings,
    LogOut,
    Menu,
    X,
    User
} from 'lucide-react';
import { referralData } from '../data/mockData';

const Sidebar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Share2, label: 'Referrals', path: '/dashboard#referrals' },
        { icon: Trophy, label: 'Leaderboard', path: '/dashboard#leaderboard' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    const SidebarContent = () => (
        <div className="h-full flex flex-col">
            {/* Agent Profile */}
            <div className="p-6 border-b border-cream/10">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                        <User className="w-6 h-6 text-midnight" />
                    </div>
                    <div>
                        <p className="font-semibold text-cream">{referralData.agentName}</p>
                        <p className="text-xs text-cream/60">{referralData.agentId}</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                                    ? 'bg-gold text-midnight'
                                    : 'text-cream hover:bg-midnight-50/50'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-cream/10">
                <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-cream hover:bg-red-500/20 transition-all duration-300 w-full">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-24 left-4 z-50 p-3 bg-midnight text-cream rounded-lg shadow-lg"
            >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 bg-midnight h-screen sticky top-0 shadow-2xl">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        />

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="lg:hidden fixed top-0 left-0 w-64 h-screen bg-midnight z-50 shadow-2xl"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
