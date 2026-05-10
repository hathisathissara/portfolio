import React from 'react';
import { motion } from 'framer-motion';

// Multiple animation variants
const animationVariants = {
    // New Cyber-Aurora Default
    slideUp: {
        initial: { opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -40, scale: 0.98, filter: 'blur(10px)' }
    },
    cyberReveal: {
        initial: { opacity: 0, scale: 1.05, filter: 'blur(20px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, scale: 0.95, filter: 'blur(20px)' }
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
    // Zoom in
    zoomIn: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 }
    }
};

// Transition configurations
const transitionPresets = {
    smooth: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom snappy spring-like easing
    },
    cyber: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
    },
    bouncy: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
    },
    quick: {
        duration: 0.4,
        ease: 'easeInOut'
    },
    spring: {
        type: 'spring',
        stiffness: 100,
        damping: 20
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
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            {children}
        </MotionDiv>
    );
}

export default PageAnimator;