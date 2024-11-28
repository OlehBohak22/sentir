import s from "./AboutHeroSection.module.css";
import { Layout } from "../../components/Layout/Layout";

export const AboutHeroSection = () => {
  return (
    <section className={s.section}>
      <Layout>
        <div className={s.rotatingCircles}>
          <img
            className={s.circle1}
            src="/icons/animated_circles/circle1.svg"
            alt="Circle 1"
          />
          <img
            className={s.circle2}
            src="/icons/animated_circles/circle2.svg"
            alt="Circle 2"
          />
        </div>
      </Layout>
    </section>
  );
};
