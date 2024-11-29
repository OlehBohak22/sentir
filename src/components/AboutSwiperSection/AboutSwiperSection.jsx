import s from "./AboutSwiperSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { slides } from "../../services/fake-api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSwiperSection = () => {
  const [progress, setProgress] = useState(0);

  // Анімаційні контролери
  const titleControls = useAnimation();
  const slidesControls = useAnimation();

  // Використання Intersection Observer для заголовка
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  if (titleInView) {
    titleControls.start({ opacity: 1, y: 0 });
  }

  // Використання Intersection Observer для слайдів
  const [slidesRef, slidesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  if (slidesInView) {
    slidesControls.start({ opacity: 1, y: 0 });
  }

  return (
    <section className={s.section}>
      <Layout>
        {/* Заголовок із анімацією */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: "50px" }}
          animate={titleControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Values
        </motion.h2>

        <div className={s.customPaginationContainer}>
          <div className="custom-pagination">
            <div
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #ff0080, #7928ca)",
                height: "4px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Слайди з анімацією */}
        <motion.div
          ref={slidesRef}
          initial={{ opacity: 0, y: "50px" }}
          animate={slidesControls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Swiper
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              type: "progressbar",
            }}
            onSlideChange={(swiper) => {
              const currentProgress =
                ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
              setProgress(currentProgress);
            }}
            spaceBetween={24}
            slidesPerView={3}
            modules={[Pagination]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <motion.div
                  className={s.slide}
                  initial={{ opacity: 0, y: "20px" }}
                  animate={slidesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: slide.id * 0.2,
                  }}
                >
                  <img src={slide.image} alt="" />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className={s.customSlide}>
                <p>And yes, we live by them.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </Layout>
    </section>
  );
};
