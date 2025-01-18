import { motion } from "framer-motion";

export const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
