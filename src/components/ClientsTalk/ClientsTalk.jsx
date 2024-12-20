import { Layout } from "../Layout/Layout";
import s from "./ClientsTalk.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

export const ClientsTalk = ({ token }) => {
  const [logos, setLogos] = useState([]);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  // Функція для активації анімації
  const activateAnimation = () => {
    setIsAnimationActive(true);
  };

  useEffect(() => {
    const fetchServices = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/feedback");
        setLogos(data); // Отримуємо дані
      } catch (error) {
        console.error("Error fetching Services:", error);
      }
    };

    fetchServices();
  }, [token]);

  // Використовуємо Visibility API для активації анімації при поверненні на сторінку
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && logos.length > 0) {
        activateAnimation(); // Запускаємо анімацію, коли сторінка стає видимою
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Очищення події після компонента
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [logos]);

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
