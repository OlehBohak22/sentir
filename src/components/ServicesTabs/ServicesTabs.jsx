import { useEffect, useState, useRef } from "react";
import s from "./ServicesTabs.module.css";
import { getData } from "../../services/api";
import { Layout } from "../Layout/Layout";
import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { useLocation } from "react-router-dom";

export const ServicesTabs = ({ token }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [services, setServices] = useState([]);
  const activeService = services.find((tab) => tab.id === activeTab);

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

  return (
    <section ref={sectionRef} className={s.section}>
      <Layout className={s.container}>
        {/* Список табів */}
        <div className={s.sidebar}>
          {services.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${s.tab} ${tab.id === activeTab ? s.activeTab : ""}`}
            >
              {tab.title.rendered}
            </div>
          ))}
        </div>

        {/* Контент активного табу */}
        <div className={s.content}>
          {activeService ? (
            <>
              <div className={s.contentTitleContainer}>
                <h3>{activeService.title.rendered}</h3>

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
                <DiscussBtn>Discuss a project</DiscussBtn>
              </div>
            </>
          ) : (
            <p>Loading content...</p>
          )}
        </div>
      </Layout>
    </section>
  );
};
