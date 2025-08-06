
import React from 'react';
import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
};

function PageAnimator({ children }) {
    const MotionDiv = motion.div;
    return (
        <MotionDiv
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </MotionDiv>
    );
}

export default PageAnimator;
