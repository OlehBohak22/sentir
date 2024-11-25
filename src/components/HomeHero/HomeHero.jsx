import { motion } from "framer-motion";
import { Layout } from "../Layout/Layout";
import s from "./HomeHero.module.css";

export const HomeHero = () => {
  const HomeHeroLine = () => {
    return (
      <svg
        className={s.svg}
        viewBox="0 0 1443 526"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={s.path} // Додаємо клас для стилів
          d="M698.672 400.444C677.417 397.312 653.782 389.94 627.595 377.207C630.052 379.246 632.869 381.409 636.025 383.659M698.672 400.444C757.006 409.042 797.412 385.711 823.456 353.664M698.672 400.444C673.878 400.277 653.085 394.066 636.025 383.659M698.672 400.444C720.256 400.59 744.871 396.155 772.696 385.919C794.659 377.839 811.217 366.726 823.456 353.664M823.456 353.664C832.356 342.713 839.578 330.743 845.266 318.682M823.456 353.664C833.364 343.089 840.442 331.237 845.266 318.682M845.266 318.682C857.564 292.603 862.685 266.096 862.066 248.526C861.176 223.246 850.224 195.393 832.009 171.334M845.266 318.682C864.529 268.55 847.861 207.223 832.009 171.334M832.009 171.334C809.13 141.115 774.791 116.882 734.538 111.248M832.009 171.334C825.461 156.509 819.052 146.025 815.373 142.464C805.104 132.524 783.397 110.657 734.538 111.248M734.538 111.248C692.724 105.396 654.868 115.931 626.418 138.432M734.538 111.248C707.617 111.574 672.453 118.718 626.418 138.432M626.418 138.432C594.061 164.024 573.872 205.097 573.872 255.147C573.872 304.908 593.172 357.518 636.025 383.659M626.418 138.432C613.025 144.168 598.711 150.968 583.412 158.973C493.54 206.001 411.199 176.484 355.97 95.9363C290.441 0.367256 220.409 83.9293 141.08 95.9363C64.0204 107.6 39.158 -14.4618 1 3.88233M636.025 383.659C683.816 417.723 809.357 471.611 940.39 414.123C1074.95 355.088 1170.84 349.085 1241.64 414.123C1304.75 472.109 1347.58 513.181 1395.27 520.685C1433.43 526.689 1441.63 523.187 1440.96 520.685"
          strokeWidth="3"
        />
      </svg>
    );
  };

  return (
    <section className={s.heroSection}>
      <HomeHeroLine />
      <Layout>
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
            whileInView={{ opacity: 1, x: "-60%" }} // Кінцева позиція: звичайна
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // Повторна анімація при поверненні у видиму зону
          >
            BUILDING
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: справа
            whileInView={{ opacity: 1, x: "-25%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            PRODUCTS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: зверху
            whileInView={{ opacity: 1, x: "20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            THROUGH
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: "0" }} // Початкова позиція: знизу
            whileInView={{ opacity: 1, x: "65%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
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
            viewport={{ once: false }} // Анімація спрацює лише один раз при вході у видиму область
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
            viewport={{ once: false }}
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
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              Accelerated
              <br /> MVP Launch for
              <br /> Startups
            </p>
          </motion.li>
        </motion.ul>
      </Layout>
    </section>
  );
};
