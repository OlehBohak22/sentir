import s from "./CaseHero.module.css";
import { Layout } from "../../components/Layout/Layout";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const CaseHero = ({ bg, title }) => {
  // Перевірка на наявність правильного URL для фону
  const backgroundStyle = bg ? { backgroundImage: `url(${bg})` } : {};

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section style={backgroundStyle} className={s.section}>
      <Layout>
        <div className={s.titleContainer}>
          <p data-aos="fade-right">
            <AnimatedHeading text="Case Study" />
          </p>
          <h1 className="black">
            <AnimatedHeading text={title} />
          </h1>
        </div>
      </Layout>
    </section>
  );
};
