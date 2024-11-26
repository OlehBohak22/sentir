import { Layout } from "../Layout/Layout";
import { HomeReviewSwiper } from "../../components/HomeReviewSwiper/HomeReviewSwiper";
import s from "./HomeReviewSection.module.css";

export const HomeReviewSection = ({ reviews }) => {
  return (
    <section className={s.section}>
      <Layout>
        <HomeReviewSwiper reviews={reviews} />
      </Layout>
    </section>
  );
};
