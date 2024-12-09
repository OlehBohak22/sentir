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

        <ul className={s.logosList}>
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo["load-btn-image"]} alt="" />
            </li>
          ))}
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo["load-btn-image"]} alt="" />
            </li>
          ))}
        </ul>
      </Layout>
    </section>
  );
};
