import { motion } from 'framer-motion';

const pageVariants = {
  start: {
    opacity: 0,
    y: 20, // Optional: Add a slight upward movement during initial transition
  },
  finish: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Adjust the duration for faster transitions
      ease: 'easeInOut', // Use easeInOut for a smoother effect
    },
  },
  exit: {
    opacity: 0,
    y: -20, // Optional: Add a slight downward movement during exit transition
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};
const pageTransition = {
  duration: 0.5,
  ease: 'easeInOut',
};
const withAnimation = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <motion.div
        variants={pageVariants}
        initial="start"
        animate="finish"
        exit="exit"
        transition={pageTransition}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
  return NewComponent;
};
export default withAnimation;
