import { useState } from "react";
import s from "./AboutHeroSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { motion } from "framer-motion";

export const AboutHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`${s.section} ${isHovered ? s.noOverlay : ""}`}>
      <Layout className="relative z-10">
        <div className={s.content}>
          <div className={s.rotatingCircles}>
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
          </div>

          <h2 className={s.title}>SENTIR</h2>

          <p>making digital experiences feel human</p>

          <motion.div
            initial={{ opacity: 0, y: "5vw" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={s.heroHoverLink}
            onMouseEnter={() => setIsHovered(true)} // Знімаємо затемнення
            onMouseLeave={() => setIsHovered(false)} // Повертаємо затемнення
          >
            BECOME PARTNERS
          </motion.div>
        </div>
      </Layout>
    </section>
  );
};
