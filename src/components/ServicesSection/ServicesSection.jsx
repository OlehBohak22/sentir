import { services } from "../../services/fake-api";
import s from "./ServicesSection.module.css";
import { Layout } from "../Layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section className={s.section}>
      <Layout>
        <h2>SERVICES</h2>

        {/* Додаємо визначення градієнта в JSX */}
        <svg style={{ width: 0, height: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#66D2FD" />
              <stop offset="50%" stopColor="#ED50B9" />
              <stop offset="100%" stopColor="#f80864" />
            </linearGradient>
          </defs>
        </svg>

        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <Link>
                <div>
                  <svg className={s.serviceIcon}>
                    <use href={service.icon}></use>
                  </svg>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <img
                  className={s.arrowIcon}
                  src="/icons/arrow.svg"
                  alt="Arrow"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </section>
  );
};
