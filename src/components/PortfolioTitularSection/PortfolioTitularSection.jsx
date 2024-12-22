import { useInView } from "react-intersection-observer";
import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./PortfolioCursor.css";

export const PortfolioTitularSection = ({ titulInfo }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Поява при 10% у полі зору
    triggerOnce: true, // Запуск лише один раз
  });

  // Анімація для контейнера
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Анімація для внутрішніх елементів
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const mors = titulInfo.case_mors
    .split("|||")
    .filter((item) => item.trim() !== "");

  return (
    <Layout>
      <motion.div className="case" ref={ref}>
        <Link to={`/cases/${titulInfo.id}`}>
          <motion.div
            className={s.titularContainer}
            style={{ backgroundImage: `url(${titulInfo.case_title_pictures})` }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Анімація при появі
            variants={containerVariants}
          >
            {/* Контент секції */}
            <motion.div className={s.titularContent}>
              {/* Анімація опису */}
              <motion.p variants={childVariants} custom={1}>
                {titulInfo.case_description}
              </motion.p>

              {/* Анімація списку */}
              <motion.ul>
                {mors
                  .sort((a, b) => (a === "NDA" ? -1 : b === "NDA" ? 1 : 0)) // Сортуємо, щоб "NDA" завжди було першим
                  .map((item, index) => (
                    <motion.li
                      className={item === "NDA" ? s.nda : ""}
                      key={index}
                      variants={childVariants}
                      custom={index + 2}
                    >
                      {item}
                    </motion.li>
                  ))}
              </motion.ul>

              {/* Анімація заголовку */}
              <motion.h3 variants={childVariants} custom={mors.length + 2}>
                {titulInfo.case_title}
              </motion.h3>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </Layout>
  );
};
