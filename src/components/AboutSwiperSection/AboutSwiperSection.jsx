import s from "./AboutSwiperSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { slides } from "../../services/fake-api";

gsap.registerPlugin(ScrollTrigger);

export const AboutSwiperSection = () => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(`.${s.slide}`);
    const panelWidth = panels[0].offsetWidth; // Ширина одного слайда

    // Налаштування горизонтального скролу
    gsap.to(panels, {
      x: -panelWidth * (panels.length - 1), // Горизонтальне переміщення
      ease: "none",
      scrollTrigger: {
        trigger: scrollerRef.current,
        pin: true,
        scrub: 0.5, // Плавна прокрутка
        start: "top top",
        end: `top -2000`, // Збалансувати ширину
        onUpdate: (self) => {
          const progressBar = document.getElementById("progress-bar");
          if (progressBar) {
            progressBar.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <section className={s.scroller} ref={scrollerRef}>
        <Layout>
          <h2>Our Values</h2>

          <div className={s.progressBarWrapper}>
            <div className={s.progressBar} id="progress-bar"></div>
          </div>
          <div className={s.slides}>
            {slides.map((slide, index) => (
              <div className={s.slide} key={index}>
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
            <div className={`${s.slide} ${s.gradient}`}>
              <h3>And yes, we live by them.</h3>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};
