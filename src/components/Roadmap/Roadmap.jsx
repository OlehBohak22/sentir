import { Layout } from "../Layout/Layout";
import s from "./Roadmap.module.css";

export const Roadmap = () => {
  return (
    <Layout>
      <div className={s.titleContainer}>
        <p>This is how we make it disappear...</p>
        <h2>Roadmap</h2>
      </div>

      <div className={s.roadmapContainer}>
        <div className={`${s.item} ${s.intro}`}>
          <p>Intro</p>
          <span>1 day</span>
        </div>

        <div className={`${s.item} ${s.research}`}>
          <p>Research and Proposal</p>
          <span>2 days - 5 weeks</span>
        </div>

        <div className={`${s.item} ${s.design}`}>
          <p>Design</p>
          <span>2- 8 weeks</span>
        </div>

        <div className={`${s.item} ${s.delivery}`}>
          <p>Delivery and Feedback</p>
          <span>4+ weeks</span>
        </div>

        <div className={`${s.item} ${s.soft}`}>
          <p>Soft Launch</p>
          <span>2+ weeks</span>
        </div>

        <div className={`${s.item} ${s.lunch}`}>
          <p>Launch and support</p>
          <span>4+ weeks</span>
        </div>
      </div>
    </Layout>
  );
};
