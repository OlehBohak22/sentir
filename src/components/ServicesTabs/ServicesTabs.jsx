import { useEffect, useState, useRef } from "react";
import s from "./ServicesTabs.module.css";
import { getData } from "../../services/api";
import { Layout } from "../Layout/Layout";
import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export const ServicesTabs = ({ token }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [services, setServices] = useState([]);
  const activeService = services.find((tab) => tab.id === activeTab);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/services");
        setServices(data);

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

          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          setActiveTab(data[0]?.id);
        }
      } catch (error) {
        console.error("Error fetching Services:", error);
      }
    };

    fetchServices();
  }, [token, location.hash]);

  const tabContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <section ref={sectionRef} className={s.section}>
      {isMobile && (
        <motion.div
          className={s.sidebar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
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
            viewport={{ once: false, amount: 0.3 }}
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

        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeTab} // Ключ для анімації при зміні табу
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={s.content}
            >
              <div className={s.contentTitleContainer}>
                <h3>{activeService.service_title}</h3>

                <div className={s.serviceOptionContainer}>
                  {activeService.service_timeframe && (
                    <div>
                      <span>Timeframe:</span>
                      <p>{activeService.service_timeframe}</p>
                    </div>
                  )}

                  {activeService.service_team && (
                    <div>
                      <span>Team:</span>
                      <p>{activeService.service_team}</p>
                    </div>
                  )}

                  {activeService.service_outcomes && (
                    <div>
                      <span>Outcomes:</span>
                      <p>{activeService.service_outcomes}</p>
                    </div>
                  )}
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
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </section>
  );
};
