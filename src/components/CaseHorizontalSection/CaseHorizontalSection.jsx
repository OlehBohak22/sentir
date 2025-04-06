import s from "./CaseHorizontalSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
gsap.registerPlugin(ScrollTrigger);

export const CaseHorizontalSection = ({ cases }) => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(`.${s.block}`);
    const panelWidth = scrollerRef.current.offsetWidth;
    const gap = 0.02 * window.innerWidth;
    const totalScrollWidth =
      panels.length * panelWidth + (panels.length - 1) * gap;
    const header = document.querySelector("header");

    gsap.to(panels, {
      x: -(panelWidth + gap) * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollerRef.current,
        pin: true,
        scrub: 1,
        snap: (progress) => {
          const total = panels.length - 1;
          const snapIndex = progress * total;
          const floored = Math.floor(snapIndex);
          const diff = snapIndex - floored;

          return diff > 0.3 ? (floored + 1) / total : floored / total;
        },
        start: "top -50",
        end: `+=${totalScrollWidth - panelWidth}`,
        markers: false,

        onEnter: () => gsap.to(header, { y: "-100%", duration: 0.3 }),
        onLeave: () => gsap.to(header, { y: "0%", duration: 0.3 }),
        onEnterBack: () => gsap.to(header, { y: "-100%", duration: 0.3 }),
        onLeaveBack: () => gsap.to(header, { y: "0%", duration: 0.3 }),

        onUpdate: (self) => {
          const progressBar = document.getElementById("progress-bar");
          if (progressBar) {
            progressBar.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <section className={s.scroller} ref={scrollerRef}>
        <Layout>
          {cases["title-1"] !== "" && (
            <div className={s.progressBarWrapper}>
              <div className={s.progressBar} id="progress-bar"></div>
            </div>
          )}
          <div className={s.horizontalBlocks}>
            {/* Блок 1 */}
            {cases["title-1"] && cases.case_pictures_1 && (
              <div className={s.block}>
                <div className={s.blockDesc}>
                  <h3>
                    <AnimatedHeading text={cases["title-1"]} />
                  </h3>
                  {cases["data-table-1"] && (
                    <ul>
                      {Object.values(cases["data-table-1"]).map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>

                <div className={s.image}>
                  <img src={cases.case_pictures_1} alt={cases["title-1"]} />
                </div>
              </div>
            )}

            {/* Блок 2 */}
            {cases["title-2"] && cases.case_pictures_2 && (
              <div className={s.block}>
                <div className={s.blockDesc}>
                  <h3>
                    <AnimatedHeading text={cases["title-2"]} />
                  </h3>
                  {cases["data-table-2"] && (
                    <ul>
                      {Object.values(cases["data-table-2"]).map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>

                <div className={s.image}>
                  <img src={cases.case_pictures_2} alt={cases["title-2"]} />
                </div>
              </div>
            )}

            {/* Блок 3 */}
            {cases["title-3"] && cases.case_pictures_3 && (
              <div className={s.block}>
                <div className={s.blockDesc}>
                  <h3>
                    <AnimatedHeading text={cases["title-3"]} />
                  </h3>

                  <div>
                    <div className={s.lastCaseList}>
                      {cases.table_data.map((item) => (
                        <div key={item}>
                          <h4>
                            <AnimatedHeading text={item.title} />
                          </h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>

                    {cases["technology-stack-text"] && (
                      <div className={s.techStack}>
                        <p>
                          <AnimatedHeading text="Technology Stack" />
                        </p>
                        <div className={s.iconList}>
                          {Array.isArray(cases["technology-stack-text"]) &&
                            cases["technology-stack-text"].map(
                              (icon, index) => (
                                <img key={index} src={icon} alt="icon" />
                              )
                            )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={s.image}>
                  <img src={cases.case_pictures_3} alt={cases["title-3"]} />
                </div>
              </div>
            )}
          </div>
        </Layout>
      </section>
    </div>
  );
};
