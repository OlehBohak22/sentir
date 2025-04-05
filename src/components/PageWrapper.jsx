import { motion } from "framer-motion";
import { useLenis } from "../utils/LenisProvider";

export const PageWrapper = ({ children }) => {
  const lenis = useLenis();

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
      onAnimationComplete={() => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      }}
    >
      {children}
    </motion.div>
  );
};
