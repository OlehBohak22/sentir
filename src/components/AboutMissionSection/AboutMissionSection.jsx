import s from "./AboutMissionSection.module.css";
import { Layout } from "../Layout/Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AnimatedHeadingFaster } from "../AnimatedHeading/AnimatedHeading";

export const AboutMissionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Анімація спрацьовує тільки один раз
    threshold: 0.2, // Активується, коли 20% секції видно на екрані
  });

  return (
    <section className={s.section}>
      <Layout className={s.container}>
        <motion.p
          ref={ref}
          className={s.rightText}
          initial={{ opacity: 0, y: 50 }} // Початкові значення
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Анімація тексту
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Founded in 2021 as an independent entity from a larger conglomerate.
        </motion.p>

        <motion.div
          className={s.reviewContent}
          initial={{ opacity: 0, y: 50 }} // Початкові значення
          animate={{
            opacity: inView ? 1 : 0, // Плавне з'явлення
            y: inView ? 0 : 50, // Переміщення контенту
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img className={s.quotes} src="/icons/quotes.svg" alt="Quotes" />
          <p className={s.contentText}>
            <AnimatedHeadingFaster
              text="Our mission is to create a company that values personal achievement,
            meaningful actions, and making a positive impact on the lives of our
            customers, their clients, our team, and our families. We strive to
            blend profitability with fun, freedom, and flexibility, while
            actively supporting the growth and success of all businesses we are
            involved with."
            ></AnimatedHeadingFaster>
          </p>

          <motion.div
            className={s.sentirContaienr}
            initial={{ opacity: 0, y: 0.8 }} // Початкові значення
            animate={{
              opacity: inView ? 1 : 0, // Плавне з'явлення
              y: inView ? 1 : 0.8, // Збільшення розміру
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <img src="/icons/colored-logo.svg" alt="Sentir Logo" />
            </div>
            <span>Sentir Mission</span>
          </motion.div>
        </motion.div>
      </Layout>
    </section>
  );
};
