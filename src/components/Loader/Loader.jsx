import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import s from "./Loader.module.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Пульсуюче коло */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
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
      <p className="text-gray-700 lg:text-7xl text-3xl font-medium z-10">
        {progress}%
      </p>
    </div>
  );
};

export default Loader;
