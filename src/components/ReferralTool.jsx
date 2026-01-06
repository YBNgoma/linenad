import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { referralData } from '../data/mockData';

const ReferralTool = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(referralData.referralLink);
        setCopied(true);

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FAFAF9', '#0F172A']
        });

        // Reset button after 3 seconds
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl shadow-glass mb-8"
        >
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                    <h2 className="text-2xl font-serif font-bold text-midnight dark:text-cream">
                        Your Referral Link
                    </h2>
                    <p className="text-sm text-midnight/60 dark:text-cream/60">
                        Share this link to earn 10% commission on every sale
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                {/* Referral Link Input */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        value={referralData.referralLink}
                        readOnly
                        className="flex-1 px-4 py-3 bg-cream-200 dark:bg-midnight-200 border border-midnight/10 dark:border-cream/10 rounded-lg text-midnight dark:text-cream font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <motion.button
                        onClick={handleCopy}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${copied
                                ? 'bg-green-500 text-white'
                                : 'bg-gold hover:bg-gold-500 text-midnight'
                            }`}
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5" />
                                <span>COPIED!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5" />
                                <span>COPY LINK</span>
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-cream-200 dark:bg-midnight-200 rounded-lg">
                        <p className="text-sm text-midnight/60 dark:text-cream/60 mb-1">
                            Total Referrals
                        </p>
                        <p className="text-2xl font-bold text-midnight dark:text-cream">
                            {referralData.totalReferrals}
                        </p>
                    </div>
                    <div className="p-4 bg-cream-200 dark:bg-midnight-200 rounded-lg">
                        <p className="text-sm text-midnight/60 dark:text-cream/60 mb-1">
                            Active Referrals
                        </p>
                        <p className="text-2xl font-bold text-gold">
                            {referralData.activeReferrals}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ReferralTool;
