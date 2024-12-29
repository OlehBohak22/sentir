import { motion } from "framer-motion";
import { services } from "../../services/fake-api";
import s from "./ServicesSection.module.css";
import { Layout } from "../Layout/Layout";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const ServicesSection = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  // Анімація для елементів списку
  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Затримка для кожного елемента
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className={s.section}>
      <Layout>
        <h2>
          <AnimatedHeading text="SERVICES" />
        </h2>
        {/* <h2>SERVICES</h2> */}

        {/* Градієнт */}
        <svg style={{ width: 0, height: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#66D2FD" />
              <stop offset="50%" stopColor="#ED50B9" />
              <stop offset="100%" stopColor="#f80864" />
            </linearGradient>
          </defs>
        </svg>

        <ul>
          {services.map((service, index) => (
            <motion.li
              key={service.id}
              custom={index} // Передаємо індекс для затримки
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Запуск анімації, коли елемент у полі зору
              variants={listItemVariants}
            >
              <Link to={service.link}>
                <div>
                  <svg className={s.serviceIcon}>
                    <use href={service.icon}></use>
                  </svg>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                {isDesktop && (
                  <img
                    className={s.arrowIcon}
                    src="/icons/arrow.svg"
                    alt="Arrow"
                  />
                )}

                {isMobile && (
                  <img
                    className={s.arrowIcon}
                    src="/icons/arrow-gradient.svg"
                    alt="Arrow"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </Layout>
    </section>
  );
};
