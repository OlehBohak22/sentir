import { Layout } from "../Layout/Layout";
import s from "./HomeReviewSection.module.css";
import { AnimateProLine } from "../../components/AninmateSvgLine/AninmateSvgLine";

export const HomeReviewSection = ({ children }) => {
  return (
    <section className={`${s.section} relative `}>
      <div className="absolute top-[3vw] w-[100%] h-[auto] z-[-0] pointer-events-none">
        <AnimateProLine />
      </div>
      <Layout>{children}</Layout>
    </section>
  );
};
