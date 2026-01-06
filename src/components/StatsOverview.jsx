import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Clock } from 'lucide-react';
import { agentStats } from '../data/mockData';
import { staggerContainer, staggerItem } from '../utils/animations';

const StatsOverview = () => {
    const stats = [
        {
            title: "Total Revenue",
            value: `$${agentStats.totalRevenue.toFixed(2)}`,
            icon: DollarSign,
            trend: agentStats.trend,
            color: "text-midnight dark:text-cream"
        },
        {
            title: "My Commission",
            value: `$${agentStats.myCommission.toFixed(2)}`,
            icon: TrendingUp,
            trend: agentStats.trend,
            color: "text-gold",
            highlight: true
        },
        {
            title: "Pending Payout",
            value: `$${agentStats.pendingPayout.toFixed(2)}`,
            icon: Clock,
            trend: agentStats.trend,
            color: "text-midnight dark:text-cream"
        }
    ];

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={index}
                        variants={staggerItem}
                        whileHover={{ y: -5 }}
                        className={`glass p-6 rounded-2xl shadow-glass hover:shadow-float transition-all duration-300 ${stat.highlight ? 'ring-2 ring-gold' : ''
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl ${stat.highlight ? 'bg-gold/20' : 'bg-midnight/10 dark:bg-cream/10'
                                } flex items-center justify-center`}>
                                <Icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            {stat.trend === 'up' && (
                                <div className="flex items-center space-x-1 text-green-500">
                                    <TrendingUp className="w-4 h-4" />
                                    <span className="text-xs font-semibold">+12%</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="text-sm text-midnight/60 dark:text-cream/60 mb-1">
                                {stat.title}
                            </p>
                            <p className={`text-3xl font-bold ${stat.color}`}>
                                {stat.value}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default StatsOverview;
