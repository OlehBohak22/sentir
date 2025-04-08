import { Layout } from "../Layout/Layout";
import s from "./ClientsTalk.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const ClientsTalk = ({ token }) => {
  const [logos, setLogos] = useState([]);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/feedback");
        setLogos(data);
      } catch (error) {
        console.error("Error fetching Services:", error);
      }
    };

    fetchServices();
  }, [token]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationActive(true); // Запускаємо анімацію через 2 секунди
    }, 2000);

    return () => clearTimeout(timeout); // Очищаємо таймаут при демонтажі компонента
  }, [logos]);

  return (
    <section className={s.section}>
      <Layout className={s.container}>
        <div className={s.titleContainer}>
          <h2 data-aos="fade-up">
            <AnimatedHeading text="CLIENTS TALK" />
          </h2>
          <p data-aos="fade-up">
            The majority of our engagements stem from referrals by previous
            clients, underscoring the consistent satisfaction they've
            experienced with our services.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className={`${s.logos} ${isAnimationActive ? s.animate : ""}`}
        >
          <div
            className={`${s.logosSlide} ${isAnimationActive ? s.animate : ""}`}
          >
            {logos.map((logo) => (
              <div key={logo.id}>
                <img src={logo["load-btn-image"]} alt="Client Logo" />
                {logo["nda-checkbox"] == 1 ? <span>NDA</span> : ""}
              </div>
            ))}
          </div>

          <div
            className={`${s.logosSlide} ${isAnimationActive ? s.animate : ""}`}
          >
            {logos.map((logo) => (
              <div key={logo.id}>
                <img src={logo["load-btn-image"]} alt="Client Logo" />
                {logo["nda-checkbox"] == 1 ? <span>NDA</span> : ""}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};
