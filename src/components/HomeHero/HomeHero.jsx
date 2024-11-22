import { motion } from "framer-motion";
import { Layout } from "../Layout/Layout";
import s from "./HomeHero.module.css";

export const HomeHero = () => {
  return (
    <Layout>
      <section className={s.heroSection}>
        <h1 className={s.heroTitle}>
          <div className={s.rotatingCircles}>
            <img
              className={s.circle1}
              src="/icons/animated_circles/circle1.svg"
              alt="Circle 1"
            />
            <img
              className={s.circle2}
              src="/icons/animated_circles/circle2.svg"
              alt="Circle 2"
            />
          </div>

          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: зліва
            animate={{ opacity: 1, x: "-60%" }} // Кінцева позиція: звичайна
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BUILDING
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: справа
            animate={{ opacity: 1, x: "-25%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            PRODUCTS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: зверху
            animate={{ opacity: 1, x: "20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            THROUGH
          </motion.span>
          <br />

          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: знизу
            animate={{ opacity: 1, x: "65%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            EMPATHY
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, x: "-50%" }} // Початкова позиція: зліва
          animate={{ opacity: 1, x: "0" }} // Кінцева позиція: звичайна
          transition={{ duration: 1, ease: "easeOut" }}
          className={s.heroDesc}
        >
          From napkin sketches to full-scale digital solutions, we harness
          global expertise as your trusted Software Development Partner to turn
          your idea into a product that people love. Embrace our diverse,
          collaborative approach to building solutions that resonate with users
          and drive business success. Whether it’s custom web and mobile
          development, UX/UI design, or technical consulting, we deliver
          tailored, scalable results for startups and enterprises alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: "5vw" }} // Початкова позиція: зліва
          animate={{ opacity: 1, y: "0" }} // Кінцева позиція: звичайна
          transition={{ duration: 1, ease: "easeOut" }}
          className={s.heroHoverLink}
        >
          GET NO-COST DISCOVERY
        </motion.div>

        <motion.ul
          className={s.homeHeroItemList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Анімація спрацює лише один раз при вході у видиму область
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              free-of
              <br /> charge
              <br /> project kick-off
            </p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              personalized,
              <br /> boutique
              <br /> experience
            </p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              Accelerated
              <br /> MVP Launch for
              <br /> Startups
            </p>
          </motion.li>
        </motion.ul>
      </section>
    </Layout>
  );
};
