import { useState } from "react";
import s from "./AboutHeroSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { motion } from "framer-motion";

export const AboutHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: "5vw" },
    visible: { opacity: 1, y: "0" },
  };

  return (
    <section className={`${s.section} ${isHovered ? s.hovered : ""}`}>
      <Layout className="relative z-10">
        <div className={s.content}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={s.rotatingCircles}
          >
            <img
              className={s.circle1}
              src="/icons/animated_circles/circle1.svg"
              alt="Circle"
            />
            <img
              className={s.circle2}
              src="/icons/animated_circles/circle2.svg"
              alt="Circle"
            />
          </motion.div>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={s.title}
          >
            SENTIR
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            making digital experiences feel human
          </motion.p>

          <a href="#form">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className={s.heroHoverLink}
              onMouseEnter={() => setIsHovered(true)} // Знімаємо затемнення
              onMouseLeave={() => setIsHovered(false)} // Повертаємо затемнення
            >
              BECOME PARTNERS
            </motion.div>
          </a>
        </div>
      </Layout>
    </section>
  );
};
