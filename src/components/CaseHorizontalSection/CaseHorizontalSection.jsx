import s from "./CaseHorizontalSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Регістрація плагіна ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const CaseHorizontalSection = ({ cases }) => {
  useEffect(() => {
    // Використовуємо ScrollTrigger для горизонтального скролу
    gsap.to(`.${s.horizontalBlocks}`, {
      xPercent: -100, // рухаємо блоки на 100% вліво
      ease: "none", // без плавності
      scrollTrigger: {
        trigger: `.${s.scroller}`, // тригер: секція, яка буде активувати анімацію
        start: "top top", // анімація починається, коли верх секції досягне верху вікна
        end: "bottom top", // анімація закінчується, коли низ секції досягне верху вікна
        scrub: true, // анімація буде синхронізована з прокруткою
        markers: true, // вимикаємо маркери для дебагу
      },
    });
  }, []);

  return (
    <section className={s.scroller}>
      <Layout>
        <div className={s.container}>
          <div className={s.horizontalBlocks}>
            <div className={s.block}>
              <div className={s.blockDescContainer}>
                <h3>{cases["title-1"]}</h3>
                <ul>
                  {Object.values(cases["data-table-1"]).map((item, index) => (
                    <li key={index} className={s.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={cases.case_pictures_1} alt="" />
              </div>
            </div>

            <div className={s.block}>
              <div className={s.blockDescContainer}>
                <h3>{cases["title-2"]}</h3>
                <ul>
                  {Object.values(cases["data-table-2"]).map((item, index) => (
                    <li key={index} className={s.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src={cases.case_pictures_2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
