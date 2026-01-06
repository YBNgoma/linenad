import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Trophy, Medal, Award } from 'lucide-react';
import { leaderboard } from '../data/mockData';
import { staggerContainer, staggerItem } from '../utils/animations';

const Leaderboard = () => {
    const getRankIcon = (rank) => {
        switch (rank) {
            case 1:
                return <Trophy className="w-6 h-6 text-gold" />;
            case 2:
                return <Medal className="w-6 h-6 text-gray-400" />;
            case 3:
                return <Award className="w-6 h-6 text-amber-600" />;
            default:
                return <span className="text-lg font-bold text-midnight/50 dark:text-cream/50">#{rank}</span>;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 rounded-2xl shadow-glass"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-midnight dark:text-cream">
                    Top Agents Leaderboard
                </h2>
                <div className="text-sm text-midnight/60 dark:text-cream/60">
                    This Month
                </div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3"
            >
                {leaderboard.map((agent) => (
                    <motion.div
                        key={agent.agentId}
                        variants={staggerItem}
                        whileHover={{ x: 5 }}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${agent.isCurrentUser
                                ? 'bg-gold/20 ring-2 ring-gold'
                                : 'bg-cream-200 dark:bg-midnight-200 hover:bg-cream-300 dark:hover:bg-midnight-100'
                            }`}
                    >
                        {/* Left Side: Rank, Avatar, Name */}
                        <div className="flex items-center space-x-4">
                            {/* Rank Icon */}
                            <div className="w-10 flex items-center justify-center">
                                {getRankIcon(agent.rank)}
                            </div>

                            {/* Avatar */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${agent.isCurrentUser
                                    ? 'bg-gold text-midnight'
                                    : 'bg-midnight/10 dark:bg-cream/10 text-midnight dark:text-cream'
                                }`}>
                                {agent.avatar}
                            </div>

                            {/* Name & ID */}
                            <div>
                                <p className={`font-semibold ${agent.isCurrentUser ? 'text-gold' : 'text-midnight dark:text-cream'
                                    }`}>
                                    {agent.name}
                                    {agent.isCurrentUser && (
                                        <span className="ml-2 text-xs bg-gold text-midnight px-2 py-0.5 rounded-full">
                                            You
                                        </span>
                                    )}
                                </p>
                                <p className="text-xs text-midnight/50 dark:text-cream/50">
                                    {agent.agentId}
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Revenue & Trend */}
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="font-bold text-midnight dark:text-cream">
                                    ${agent.revenue.toFixed(2)}
                                </p>
                                <p className="text-xs text-midnight/60 dark:text-cream/60">
                                    ${agent.commission.toFixed(2)} earned
                                </p>
                            </div>

                            {/* Trend Indicator */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${agent.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                                }`}>
                                {agent.trend === 'up' ? (
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                ) : (
                                    <TrendingDown className="w-4 h-4 text-red-600" />
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer Note */}
            <div className="mt-6 pt-6 border-t border-midnight/10 dark:border-cream/10">
                <p className="text-sm text-center text-midnight/60 dark:text-cream/60">
                    Rankings update daily at midnight. Keep sharing to climb the leaderboard! 🚀
                </p>
            </div>
        </motion.div>
    );
};

export default Leaderboard;
