import s from "./ProfessionalsBlock.module.css";
import { professionals } from "../../services/fake-api";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProfessionalsBlock = () => {
  // Контролери анімацій
  const listControls = useAnimation();

  useEffect(() => {
    Aos.init();
  }, []);

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
          <h2>
            <span data-aos="fade-right" data-aos-duration="800">
              Professionals
            </span>
            <span data-aos="fade-left" data-aos-duration="800">
              behind
            </span>
            <span data-aos="fade-right" data-aos-duration="800">
              your project
            </span>
          </h2>

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
