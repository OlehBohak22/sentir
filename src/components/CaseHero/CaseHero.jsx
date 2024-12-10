import s from "./CaseHero.module.css";
import { Layout } from "../../components/Layout/Layout";

export const CaseHero = ({ bg, title }) => {
  // Перевірка на наявність правильного URL для фону
  const backgroundStyle = bg ? { backgroundImage: `url(${bg})` } : {};

  return (
    <section style={backgroundStyle} className={s.section}>
      <Layout>
        <div className={s.titleContainer}>
          <p>Case study</p>
          <h1>{title}</h1>
        </div>
      </Layout>
    </section>
  );
};
