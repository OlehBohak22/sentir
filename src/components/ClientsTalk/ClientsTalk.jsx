import { Layout } from "../Layout/Layout";
import s from "./ClientsTalk.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

export const ClientsTalk = ({ token }) => {
  const [logos, setLogos] = useState([]);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      if (!token) return;
      try {
        // Імітація затримки перед запитом
        setTimeout(async () => {
          const data = await getData(token, "wp-json/wp/v2/feedback");
          setLogos(data); // Встановлюємо дані після затримки

          // Імітація затримки перед активацією анімації
          setTimeout(() => {
            // Запускаємо анімацію через декілька секунд після завантаження
            setIsAnimationActive(true);
          }, 2000); // Затримка перед анімацією (2 секунди)
        }, 2000); // 2 секунди затримки для запиту
      } catch (error) {
        console.error("Error fetching Services:", error);
      }
    };

    fetchServices();
  }, [token]);

  return (
    <section className={s.section}>
      <Layout className={s.container}>
        <div className={s.titleContainer}>
          <h2>CLIENTS TALK</h2>
          <p>
            The majority of our engagements stem from referrals by previous
            clients, underscoring the consistent satisfaction they've
            experienced with our services.
          </p>
        </div>

        <div className={`${s.logos} ${isAnimationActive ? s.animate : ""}`}>
          <div className={s.logosSlide}>
            {logos.map((logo) => (
              <div key={logo.id}>
                <img src={logo["load-btn-image"]} />
                {logo["nda-checkbox"] == 1 ? <span>NDA</span> : ""}
              </div>
            ))}
          </div>

          <div className={s.logosSlide}>
            {logos.map((logo) => (
              <div key={logo.id}>
                <img src={logo["load-btn-image"]} />
                {logo["nda-checkbox"] == 1 ? <span>NDA</span> : ""}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};
