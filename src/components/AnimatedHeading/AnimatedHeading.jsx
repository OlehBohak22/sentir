import { motion } from "framer-motion";
import "./AnimatedHeading.css";

export const AnimatedHeading = ({ text }) => {
  // Розбиваємо текст на масив символів
  const letters = text.split("");

  // Варіанти анімації
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Затримка між анімацією кожної літери
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.h1
      className="animated-heading"
      variants={container} // Анімація контейнера
      initial="hidden"
      whileInView="visible" // Запуск анімації, коли заголовок у зоні видимості
      viewport={{ once: false }} // Анімація виконується лише один раз
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="letter"
          variants={child} // Анімація кожної літери
        >
          {letter === " " ? "\u00A0" : letter} {/* Пробіл для форматування */}
        </motion.span>
      ))}
    </motion.h1>
  );
};
