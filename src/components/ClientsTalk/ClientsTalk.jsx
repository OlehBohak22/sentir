import { Layout } from "../Layout/Layout";
import s from "./ClientsTalk.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

export const ClientsTalk = ({ token }) => {
  const [logos, setLogos] = useState([]);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  // Функція для імітації запиту і затримки
  const simulateRequestAndAnimation = () => {
    // Затримка перед запитом
    setTimeout(async () => {
      const data = await getData(token, "wp-json/wp/v2/feedback");
      setLogos(data); // Встановлюємо отримані дані

      // Запуск анімації з затримкою після отримання даних
      setTimeout(() => {
        setIsAnimationActive(true); // Активуємо анімацію

        // Затримка для зупинки анімації та її повторного запуску
        setTimeout(() => {
          setIsAnimationActive(false); // Зупиняємо анімацію

          setTimeout(() => {
            setIsAnimationActive(true); // Знову активуємо анімацію
          }, 2000); // Затримка перед повторним запуском анімації
        }, 2000); // Затримка для зупинки анімації
      }, 2000); // Затримка перед запуском анімації
    }, 2000); // 2 секунди затримки для імітації запиту
  };

  useEffect(() => {
    if (!token) return;

    simulateRequestAndAnimation(); // Імітація запиту і запуск анімації
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
