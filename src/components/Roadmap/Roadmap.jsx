import { Layout } from "../Layout/Layout";
import s from "./Roadmap.module.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Roadmap = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Зберігаємо стан "анімація запущена"
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Запускаємо анімацію лише раз
    }
  }, [inView, hasAnimated]);

  const columnAnimation = {
    hidden: { opacity: 0, y: 500 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5, duration: 0.6 },
    }),
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(`.${s.roadmapContainer}`);
      const scrollbar = document.querySelector(`.${s.scrollbar}`);

      if (container && scrollbar) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollProgress = (container.scrollLeft / maxScroll) * 100;
        scrollbar.style.width = `${scrollProgress}%`;
      }
    };

    const container = document.querySelector(`.${s.roadmapContainer}`);
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Layout className={s.roadmapLayout}>
      <div ref={sectionRef} className={s.titleContainer}>
        <p>This is how we make it disappear...</p>
        <h2>Roadmap</h2>
      </div>

      <div className={s.roadmapContainer}>
        <motion.div
          className={s.columnContainer}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          {[
            "1 Week",
            "2 Week",
            "3 Week",
            "4 Week",
            "5 Week",
            "6 Week",
            "7 Week",
            "8 Week",
            "9 Week",
            "10 Week",
          ].map((label, i) => (
            <motion.div
              key={i}
              className={s.roadmapColumn}
              custom={i}
              variants={columnAnimation}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={s.itemsContainer}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
        >
          {[
            { className: s.intro, text: "Intro", duration: "1 day" },
            {
              className: s.research,
              text: "Research and Proposal",
              duration: "2 days - 5 weeks",
            },
            { className: s.design, text: "Design", duration: "2-8 weeks" },
            {
              className: s.delivery,
              text: "Delivery and Feedback",
              duration: "4+ weeks",
            },
            { className: s.soft, text: "Soft Launch", duration: "2+ weeks" },
            {
              className: s.lunch,
              text: "Launch and support",
              duration: "4+ weeks",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`${s.item} ${item.className}`}
              custom={i}
              variants={itemAnimation}
            >
              <p>{item.text}</p>
              <span>{item.duration}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isMobile && (
        <div className={s.scroller}>
          <div className={s.scrollbarContainer}>
            <div className={s.scrollbar}></div>
          </div>

          <img src="/icons/scroll.svg" alt="Scroller" />
        </div>
      )}
    </Layout>
  );
};
