import s from "./CaseHorizontalSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const CaseHorizontalSection = ({ cases }) => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(`.${s.block}`);
    const panelWidth = scrollerRef.current.offsetWidth; // Ширина контейнера
    const gap = 0.02 * window.innerWidth; // 10vw у пікселях
    const totalScrollWidth =
      panels.length * panelWidth + (panels.length - 1) * gap; // Загальна довжина прокрутки

    // Додаємо горизонтальний скрол
    gsap.to(panels, {
      x: -(panelWidth + gap) * (panels.length - 1), // Рух блоків із врахуванням gap
      ease: "none",
      scrollTrigger: {
        trigger: scrollerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: "top -50",
        end: `+=${totalScrollWidth - panelWidth}`,
        markers: false,
        onUpdate: (self) => {
          const progressBar = document.getElementById("progress-bar");
          if (progressBar) {
            progressBar.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    // Рефреш тригерів після оновлення
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
        <div className={s.progressBarWrapper}>
          <div className={s.progressBar} id="progress-bar"></div>
        </div>
        <Layout>
          <div className={s.horizontalBlocks}>
            <div className={s.block}>
              <div className={s.blockDesc}>
                <h3>{cases["title-1"]}</h3>
                <ul>
                  {Object.values(cases["data-table-1"]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={s.image}>
                <img src={cases.case_pictures_1} alt={cases["title-1"]} />
              </div>
            </div>

            <div className={s.block}>
              <div className={s.blockDesc}>
                <h3>{cases["title-2"]}</h3>
                <ul>
                  {Object.values(cases["data-table-2"]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={s.image}>
                <img src={cases.case_pictures_1} alt={cases["title-2"]} />
              </div>
            </div>
            <div className={s.block}>
              <div className={s.blockDesc}>
                <h3>{cases["title-3"]}</h3>

                <div>
                  <div className={s.lastCaseList}>
                    <div>
                      <h4> {cases.input1}</h4>
                      <p>{cases.input2}</p>
                    </div>
                    <div>
                      <h4> {cases.input3}</h4>
                      <p>{cases.input4}</p>
                    </div>
                    <div>
                      <h4> {cases.input5}</h4>
                      <p>{cases.input6}</p>
                    </div>
                    <div>
                      <h4> {cases.input7}</h4>
                      <p>{cases.input8}</p>
                    </div>
                  </div>

                  <div className={s.techStack}>
                    <p>Technology Stack</p>
                    <div className={s.iconList}>
                      {cases["technology-stack-text"].map((icon, index) => (
                        <img key={index} src={icon} alt="icon" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.image}>
                <img src={cases.case_pictures_1} alt="" />
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};
