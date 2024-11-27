import { Layout } from "../Layout/Layout";
import s from "./HomeReviewSection.module.css";

export const HomeReviewSection = ({ children }) => {
  return (
    <section className={s.section}>
      <Layout>{children}</Layout>
    </section>
  );
};
