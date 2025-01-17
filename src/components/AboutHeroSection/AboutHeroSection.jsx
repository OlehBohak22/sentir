import { useState, useEffect, useRef } from "react";
import s from "./AboutHeroSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { motion } from "framer-motion";

export const AboutHeroSection = ({ openPopup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Запуск при 20% видимості секції
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const listObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsListVisible(true);
        }
      },
      { threshold: 0.2 } // Запуск при 20% видимості списку
    );

    if (listRef.current) {
      listObserver.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        listObserver.unobserve(listRef.current);
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: "5vw" },
    visible: { opacity: 1, y: "0" },
  };

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Поступова поява дочірніх елементів
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className={`${s.section}`}>
      <Layout className="relative z-10">
        <div className={s.content}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
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
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={s.title}
          >
            SENTIR
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            making digital experiences feel human
          </motion.p>

          <div onClick={() => openPopup()}>
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 1.5 }}
              className={s.heroHoverLink}
            >
              BECOME PARTNERS
            </motion.div>
          </div>
        </div>

        <motion.ul
          ref={listRef}
          initial="hidden"
          animate={isListVisible ? "visible" : "hidden"}
          variants={listVariants}
          className={s.heroList}
        >
          <motion.li variants={listItemVariants}>
            <span>+11</span>
            <p>Projects</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <span>+5</span>
            <p>Partners</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <span>2021</span>
            <p>Year founded</p>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <span>17</span>
            <p>Members</p>
          </motion.li>
        </motion.ul>
      </Layout>
    </section>
  );
};
