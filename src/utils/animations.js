// Framer Motion animation variants for reusable animations

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
};

export const tapScale = {
    scale: 0.95,
    transition: { duration: 0.1 }
};

// Magnetic button effect (for use with whileHover)
export const magneticHover = {
    scale: 1.05,
    boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" }
};

// Quick View button slide up
export const slideUpButton = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

// Image cross-fade
export const imageCrossFade = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: "easeInOut" }
    }
};
