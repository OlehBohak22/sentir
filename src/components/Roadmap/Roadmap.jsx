import { Layout } from "../Layout/Layout";
import s from "./Roadmap.module.css";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const Roadmap = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(`.${s.roadmapContainer}`);
      const scrollbar = document.querySelector(`.${s.scrollbar}`);

      if (container && scrollbar) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollProgress = (container.scrollLeft / maxScroll) * 100;
        scrollbar.style.width = `${scrollProgress}%`;
      }
    };

    const container = document.querySelector(`.${s.roadmapContainer}`);
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Layout className={s.roadmapLayout}>
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

      {isMobile && (
        <div className={s.scroller}>
          <div className={s.scrollbarContainer}>
            <div className={s.scrollbar}></div>
          </div>

          <img src="/icons/scroll.svg" alt="Scroller" />
        </div>
      )}
    </Layout>
  );
};
