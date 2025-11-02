import React from 'react';
import { motion } from 'framer-motion';

// Multiple animation variants
const animationVariants = {
    // Slide from bottom (default)
    slideUp: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 }
    },

    // Fade and scale
    fadeScale: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.1 }
    },

    // Slide from right
    slideRight: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    },

    // Slide from left
    slideLeft: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
    },

    // Rotate and fade
    rotateFade: {
        initial: { opacity: 0, rotateX: 90 },
        animate: { opacity: 1, rotateX: 0 },
        exit: { opacity: 0, rotateX: -90 }
    },

    // Zoom in
    zoomIn: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 }
    },

    // Blur fade
    blurFade: {
        initial: { opacity: 0, filter: 'blur(10px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, filter: 'blur(10px)' }
    }
};

// Transition configurations
const transitionPresets = {
    smooth: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    },
    bouncy: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
    },
    quick: {
        duration: 0.3,
        ease: 'easeInOut'
    },
    slow: {
        duration: 1.2,
        ease: 'easeOut'
    },
    spring: {
        type: 'spring',
        stiffness: 100,
        damping: 15
    }
};

function PageAnimator({
    children,
    variant = 'slideUp',
    transition = 'smooth',
    customVariants = null,
    customTransition = null
}) {
    const MotionDiv = motion.div;

    // Use custom variants if provided, otherwise use preset
    const variants = customVariants || animationVariants[variant] || animationVariants.slideUp;

    // Use custom transition if provided, otherwise use preset
    const transitionConfig = customTransition || transitionPresets[transition] || transitionPresets.smooth;

    return (
        <MotionDiv
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionConfig}
            style={{
                width: '100%',
                minHeight: '100vh'
            }}
        >
            {children}
        </MotionDiv>
    );
}

export default PageAnimator;