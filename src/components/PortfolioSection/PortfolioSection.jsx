import { Layout } from "../Layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import s from "./PortfolioSection.module.css";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

export const PortfolioSection = ({ restInfo }) => {
  return (
    <Layout className={s.portfolioList}>
      {restInfo.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </Layout>
  );
};

const PortfolioItem = ({ item }) => {
  const mors = item.case_mors.split("|||").filter((item) => item.trim() !== "");

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Налаштування анімації
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Початковий стан контейнера
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Початковий стан дочірніх елементів
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1, ease: "easeOut" }, // Послідовність
    }),
  };

  return (
    <div className="case">
      <Link to={`/cases/${item.id}`}>
        <motion.div
          ref={ref}
          className={s.container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className={s.imageContainer}>
            <img src={item.case_title_pictures} alt={item.case_title} />
          </div>

          <motion.div className={s.containerContent}>
            {/* Анімація заголовка */}
            <motion.h3 variants={childVariants} custom={0}>
              {item.case_title}
            </motion.h3>

            <div>
              {/* Анімація списку */}
              <motion.ul>
                {mors.map((item, index) => (
                  <li className={item == "NDA" ? s.nda : ""} key={index}>
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* Анімація опису */}
              <motion.p variants={childVariants}>
                {item.case_description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};
