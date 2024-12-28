import s from "./CompanyList.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const CompanyList = ({ token }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/companies");
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching Companies:", error);
      }
    };

    fetchCompanies();
  }, [token]);

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
        <AnimatedHeading text=" Companies That Drive Us Forward" />
      </motion.h2>

      {/* Анімований список */}
      <motion.ul
        className={s.companyList}
        variants={containerVariants}
        initial="hidden" // Початковий стан
        whileInView="visible" // Запуск анімації, коли список у полі зору
        viewport={{ once: false }} // Анімація спрацьовує лише раз
      >
        {companies.map((company) => (
          <motion.li key={company.id} variants={itemVariants}>
            <img src={company.company_image} alt={company.title.rendered} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
