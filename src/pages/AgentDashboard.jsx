import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import StatsOverview from '../components/StatsOverview';
import ReferralTool from '../components/ReferralTool';
import Leaderboard from '../components/Leaderboard';
import { fadeInUp } from '../utils/animations';

const AgentDashboard = () => {
    return (
        <div className="flex min-h-screen pt-20">
            <Sidebar />

            <main className="flex-1 bg-cream dark:bg-midnight-200 p-4 lg:p-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="max-w-7xl mx-auto"
                >
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-midnight dark:text-cream mb-2">
                            Agent Portal
                        </h1>
                        <p className="text-midnight/70 dark:text-cream/70">
                            Track your performance, share your link, and climb the leaderboard
                        </p>
                    </div>

                    {/* Stats Overview */}
                    <StatsOverview />

                    {/* Referral Tool */}
                    <div id="referrals">
                        <ReferralTool />
                    </div>

                    {/* Leaderboard */}
                    <div id="leaderboard">
                        <Leaderboard />
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default AgentDashboard;
