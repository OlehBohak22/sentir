import { useEffect, useState, useRef } from "react";
import s from "./ServicesTabs.module.css";
import { getData } from "../../services/api";
import { Layout } from "../Layout/Layout";
import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { motion } from "framer-motion"; // Імпортуємо motion

export const ServicesTabs = ({ token }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [services, setServices] = useState([]);
  const activeService = services.find((tab) => tab.id === activeTab);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const location = useLocation();
  const sectionRef = useRef(null); // Ссилка на секцію

  useEffect(() => {
    const fetchServices = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/services");
        setServices(data);

        // Встановлюємо активний таб на основі хеша
        if (location.hash) {
          switch (location.hash) {
            case "#project":
              setActiveTab(data[2]?.id);
              break;
            case "#discovery":
              setActiveTab(data[5]?.id);
              break;
            case "#UXUI":
              setActiveTab(data[4]?.id);
              break;
            case "#web":
              setActiveTab(data[3]?.id);
              break;
            case "#due":
              setActiveTab(data[1]?.id);
              break;
            default:
              setActiveTab(data[0]?.id);
              break;
          }

          // Прокручуємо до секції, якщо є хеш
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Якщо немає хеша, встановлюємо перший таб активним
          setActiveTab(data[0]?.id);
        }
      } catch (error) {
        console.error("Error fetching Services:", error);
      }
    };

    fetchServices();
  }, [token, location.hash]);

  // Варіанти анімації
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className={s.section}>
      {isMobile && (
        <motion.div
          className={s.sidebar}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false, amount: 0.3 }} // Анімація при скролі
        >
          {services.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${s.tab} ${tab.id === activeTab ? s.activeTab : ""}`}
            >
              {tab.service_title}
            </div>
          ))}
        </motion.div>
      )}

      <Layout className={s.container}>
        {isDesktop && (
          <motion.div
            className={s.sidebar}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: false, amount: 0.3 }} // Анімація при скролі
          >
            {services.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${s.tab} ${
                  tab.id === activeTab ? s.activeTab : ""
                }`}
              >
                {tab.service_title}
              </div>
            ))}
          </motion.div>
        )}

        {/* Контент активного табу */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false, amount: 0.3 }} // Анімація при скролі
          className={s.content}
        >
          {activeService ? (
            <>
              <div className={s.contentTitleContainer}>
                <h3>{activeService.service_title}</h3>

                <div className={s.serviceOptionContainer}>
                  <div>
                    <span>Timeframe:</span>
                    <p>{activeService.service_timeframe || "N/A"}</p>
                  </div>
                  <div>
                    <span>Team:</span>
                    <p>{activeService.service_team || "N/A"}</p>
                  </div>
                  <div>
                    <span>Outcomes:</span>
                    <p>{activeService.service_outcomes || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className={s.desc}>
                  {activeService.service_description ||
                    "No description available"}
                </p>

                <a href="#form">
                  <DiscussBtn className={clsx(isMobile && "m-0")}>
                    {activeService.service_trigerbtn}
                  </DiscussBtn>
                </a>
              </div>
            </>
          ) : (
            <p>Loading content...</p>
          )}
        </motion.div>
      </Layout>
    </section>
  );
};
