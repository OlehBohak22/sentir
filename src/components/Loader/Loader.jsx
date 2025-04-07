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
      setTimeout(() => setHideContent(true), 1);
    }
  }, [fadeOutLoader]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOutLoader ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      {/* Кола */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: hideContent ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={s.rotatingCircles}
      >
        <img
          className={s.circle1}
          src="/icons/animated_circles/circle1.svg"
          alt="Circle 1"
        />
        <img
          className={s.circle2}
          src="/icons/animated_circles/circle2.svg"
          alt="Circle 2"
        />
      </motion.div>

      {/* Відсотки */}
      <motion.p
        className="text-black-700 lg:text-7xl text-3xl font-medium z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: hideContent ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};
