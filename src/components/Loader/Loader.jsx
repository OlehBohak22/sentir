import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import s from "./Loader.module.css";

export const Loader = ({ fadeOutLoader }) => {
  const [progress, setProgress] = useState(0);
  const [hideContent, setHideContent] = useState(false); // для внутрішнього fade

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  // ⏳ коли fadeOutLoader активується — сховати контент через 0.5с
  useEffect(() => {
    if (fadeOutLoader) {
      setTimeout(() => setHideContent(true), 0.1);
    }
  }, [fadeOutLoader]);

  return (
    <motion.div
      className={s.overlay}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOutLoader ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      {/* Відсотки */}
      <motion.p
        className={s.percent}
        initial={{ opacity: 1 }}
        animate={{ opacity: hideContent ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};
