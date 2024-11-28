import s from "./AboutSwiperSection.module.css";
import { Layout } from "../../components/Layout/Layout";
import { slides } from "../../services/fake-api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";

export const AboutSwiperSection = () => {
  const [progress, setProgress] = useState(0);

  return (
    <section className={s.section}>
      <Layout>
        <h2>Our Values</h2>

        <div className={s.customPaginationContainer}>
          <div className="custom-pagination">
            <div
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #ff0080, #7928ca)",
                height: "4px", // Висота прогрес-бару
                transition: "width 0.3s ease", // Плавна анімація
              }}
            />
          </div>
        </div>

        <Swiper
          pagination={{
            el: ".custom-pagination", // Ваш кастомний елемент пагінації
            clickable: true,
            type: "progressbar", // Використовуємо progressbar для автоматичного оновлення
          }}
          onSlideChange={(swiper) => {
            const currentProgress =
              ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
            setProgress(currentProgress); // Оновлюємо прогрес
          }}
          spaceBetween={24}
          slidesPerView={3}
          modules={[Pagination]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={s.slide}>
                <img src={slide.image} alt="" />
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className={s.customSlide}>
              <p>And yes, we live by them.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Layout>
    </section>
  );
};
