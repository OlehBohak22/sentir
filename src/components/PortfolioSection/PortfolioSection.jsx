import { Layout } from "../Layout/Layout";
import { motion, useInView } from "framer-motion";
import s from "./PortfolioSection.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    Aos.init();
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false }); // triggerOnce: false означає, що анімація повторюється

  // const childVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (i) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
  //   }),
  // };

  return (
    <div data-aos="fade-up" data-aos-duration="800" ref={ref} className="case">
      <Link to={`/cases/${item.slug}`}>
        <motion.div
          className={s.container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Анімація змінюється залежно від видимості
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className={s.imageContainer}>
            <img src={item.case_title_pictures} alt={item.case_title} />
          </div>

          <motion.div className={s.containerContent}>
            {/* Анімація заголовка */}
            <h3 data-aos="fade-up" data-aos-duration="800">
              {item.case_title}
            </h3>

            <div>
              {/* Анімація списку */}
              <ul data-aos="fade-up" data-aos-duration="800">
                {mors
                  .sort((a, b) => (a === "NDA" ? -1 : b === "NDA" ? 1 : 0))
                  .map((item, index) => (
                    <li className={item === "NDA" ? s.nda : ""} key={index}>
                      {item}
                    </li>
                  ))}
              </ul>

              {/* Анімація опису */}
              <p data-aos="fade-up" data-aos-duration="800">
                {item.case_short_description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};
