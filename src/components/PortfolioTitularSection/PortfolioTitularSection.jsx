import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";

export const PortfolioTitularSection = ({ titulInfo }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Триггер при 30% видимості
    triggerOnce: true,
  });

  // Анімація для контейнера
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Анімація для внутрішніх елементів
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
    }),
  };

  const mors = titulInfo.case_mors
    .split("|||")
    .filter((item) => item.trim() !== "");

  return (
    <Layout>
      <motion.div
        ref={ref}
        className={s.titularContainer}
        style={{ backgroundImage: `url(${titulInfo.case_title_pictures})` }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Анімація для стрілки */}
        <motion.div className={s.arrow} variants={childVariants} custom={0}>
          <img
            className={s.arrowImage}
            src="/icons/custom-arrow.png"
            alt="Cursor"
          />
        </motion.div>

        {/* Контент секції */}
        <motion.div className={s.titularContent}>
          {/* Анімація опису */}
          <motion.p variants={childVariants} custom={1}>
            {titulInfo.case_description}
          </motion.p>

          {/* Анімація списку */}
          <motion.ul>
            {mors.map((item, index) => (
              <motion.li
                key={item.id}
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
    </Layout>
  );
};
