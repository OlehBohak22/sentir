import s from "./ServicesPage.module.css";
import { Layout } from "../../components/Layout/Layout";

export const ServicesPage = () => {
  return (
    <main>
      <section className={s.heroSection}>
        <Layout>
          <div className={s.titleContainer}>
            <h1>OUR SERVICES</h1>
            <p>Harmonizing innovation and empathy</p>
          </div>

          <p className={s.gradientText}>
            We partner with everyone from innovative startups to established
            enterprises, crafting products that people love.
          </p>
        </Layout>
      </section>
    </main>
  );
};
