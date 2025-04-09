import s from "./AboutSwiperSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { slides } from "../../services/fake-api";
import { useMediaQuery } from "react-responsive";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.normalizeScroll(true);

export const AboutSwiperSection = () => {
  const containerRef = useRef();
  const scrollerRef = useRef();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const width = isDesktop ? 10.79 : 8.5;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(`.${s.slide}`);
      const panelWidth = panels[0].offsetWidth;
      const totalWidth = panelWidth * width;
      const viewportWidth = window.innerWidth;
      const scrollLength = totalWidth - viewportWidth;

      gsap.to(panels, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: scrollerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${scrollLength}`,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progressBar = document.getElementById("progress-bar");
            if (progressBar) {
              progressBar.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // ⏳ Імітація "Ctrl+S": ручне оновлення ScrollTrigger через 100ms
      setTimeout(() => {
        console.log("refresh");
        ScrollTrigger.refresh();
      }, 2000);
    }, scrollerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <div ref={containerRef}>
      <section className={s.scroller} ref={scrollerRef}>
        <Layout>
          <h2>
            <AnimatedHeading text="Our Values" />
          </h2>

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
              <h3>
                <AnimatedHeading text="And yes, we live by them. " />
              </h3>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};
