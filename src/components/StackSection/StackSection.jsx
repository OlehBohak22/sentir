import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import s from "./StackSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { stackIcons } from "../../services/fake-api";
import {
  AnimatedHeading,
  AnimatedHeadingFaster,
} from "../AnimatedHeading/AnimatedHeading";

export const StackSection = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer для повторної активації анімації
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlayAnimation(entry.isIntersecting); // Активуємо анімацію при видимості секції
      },
      { threshold: 0.3 } // 30% секції має бути видимим
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

  // Анімації для заголовка та опису

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Анімації для іконок
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={sectionRef} className={s.section}>
      <Layout className={s.container}>
        {/* Заголовок та опис */}
        <div className={s.titleContainer}>
          <h2>
            <AnimatedHeading text="Technology Stack" />
          </h2>
          <p>
            <AnimatedHeadingFaster
              text=" We are committed to working with a diverse range of projects and
            technology stacks that reflect current demands and industry
            standards. Our expertise includes .NET, Java, Python, JavaScript,
            C++, PHP, and much more."
            />
          </p>
        </div>

        {/* Іконки технологій */}
        <ul className={s.stackList}>
          {stackIcons.map((icon, index) => (
            <motion.li
              key={icon.id}
              className={s.stackItem}
              initial="hidden"
              animate={playAnimation ? "visible" : "hidden"}
              variants={iconVariants}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1, // Затримка для кожного елемента
              }}
            >
              <svg className={s.icon}>
                <use href={icon.icon}></use>
              </svg>
            </motion.li>
          ))}
        </ul>
      </Layout>
    </section>
  );
};
