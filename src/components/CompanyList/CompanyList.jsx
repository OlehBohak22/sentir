import { companyes } from "../../services/fake-api";
import s from "./CompanyList.module.css";
import { motion } from "framer-motion";

export const CompanyList = () => {
  // Варіанти для контейнера (список)
  const containerVariants = {
    hidden: { opacity: 0 }, // Початковий стан (все приховано)
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Затримка між анімацією дочірніх елементів
      },
    },
  };

  // Варіанти для елементів списку
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Початковий стан (приховано + зміщення вниз)
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Кінцевий стан
  };

  return (
    <div className={s.companyContainer}>
      <motion.h2
        variants={itemVariants}
        initial="hidden" // Початковий стан
        whileInView="visible" // Запуск анімації, коли список у полі зору
        viewport={{ once: false }} // Анімація спрацьовує лише раз
      >
        Companies That Drive Us Forward
      </motion.h2>

      {/* Анімований список */}
      <motion.ul
        className={s.companyList}
        variants={containerVariants}
        initial="hidden" // Початковий стан
        whileInView="visible" // Запуск анімації, коли список у полі зору
        viewport={{ once: false }} // Анімація спрацьовує лише раз
      >
        {companyes.map((company) => (
          <motion.li key={company.id} variants={itemVariants}>
            <img src={company.logo} alt={company.name} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
