import { Layout } from "../Layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import s from "./PortfolioSection.module.css";

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
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
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
    <motion.div
      ref={ref}
      className={s.container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div>
        <img src={item.image} alt={item.name} />
      </div>

      <motion.div className={s.containerContent}>
        {/* Анімація заголовка */}
        <motion.h3 variants={childVariants} custom={0}>
          {item.name}
        </motion.h3>

        <div>
          {/* Анімація списку */}
          <motion.ul>
            {item.features.map((feature, index) => (
              <motion.li
                key={feature.id}
                variants={childVariants}
                custom={index + 1}
              >
                {feature.name}
              </motion.li>
            ))}
          </motion.ul>

          {/* Анімація опису */}
          <motion.p variants={childVariants} custom={item.features.length + 1}>
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
