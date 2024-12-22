import s from "./ProfessionalsBlock.module.css";
import { professionals } from "../../services/fake-api";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { div } from "framer-motion/client";

export const ProfessionalsBlock = () => {
  // Контролери анімацій
  const titleControls = useAnimation();
  const listControls = useAnimation();

  // Intersection Observer для заголовка
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  if (titleInView) {
    titleControls.start({ opacity: 1, y: 0 });
  }

  // Intersection Observer для списку
  const [listRef, listInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  if (listInView) {
    listControls.start({ opacity: 1, y: 0 });
  }

  return (
    <div>
      <div className={s.container}>
        {/* Обертові кола */}

        <div className={s.rotatingCircles}>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={s.circle1}
            src="/icons/animated_circles/circle1.svg"
            alt="Circle"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className={s.circle2}
            src="/icons/animated_circles/circle2.svg"
            alt="Circle"
          />
        </div>

        <div>
          {/* Заголовок із анімацією */}
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: "50px" }}
            animate={titleControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Professionals
            <span>behind</span>
            your project
          </motion.h2>

          {/* Список із анімацією */}
          <motion.ul
            ref={listRef}
            initial={{ opacity: 0, y: "50px" }}
            animate={listControls}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {professionals.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: "20px" }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: item.id * 0.2,
                }}
              >
                <div>
                  <img src={item.image} alt="" />
                </div>
                <span>{item.qty}</span>
                <p>{item.title}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
