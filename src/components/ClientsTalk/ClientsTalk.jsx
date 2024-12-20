import { Layout } from "../Layout/Layout";
import s from "./ClientsTalk.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";

export const ClientsTalk = ({ token }) => {
  const [logos, setLogos] = useState([]);

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
    const logos = document.querySelectorAll(".logosSlide");

    // Затримка через requestAnimationFrame
    requestAnimationFrame(() => {
      logos.forEach((logo) => {
        logo.style.animation = "none"; // Скидаємо анімацію
        logo.offsetHeight; // Примусово змушуємо перерахувати елемент
        logo.style.animation = "10s slide infinite linear"; // Відновлюємо анімацію
      });
    });
  }, []);

  useEffect(() => {
    const logos = document.querySelectorAll(".logosSlide");

    logos.forEach((logo) => {
      logo.style.animation = "none"; // Скидаємо анімацію
      logo.offsetHeight; // Примусово змушуємо перерахувати елемент
      logo.style.animation = "10s slide infinite linear"; // Відновлюємо анімацію
    });
  }, []);

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

        <div className={s.logos}>
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
