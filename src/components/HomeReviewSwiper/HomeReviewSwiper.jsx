import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./HomeReviewSwiper.module.css"; // Ваш файл стилів
import { useState } from "react";
import "./swiperPagination.css";
import { useMediaQuery } from "react-responsive";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatedHeadingFaster } from "../AnimatedHeading/AnimatedHeading";

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const HomeReviewSwiper = ({ reviews }) => {
  const [progress, setProgress] = useState(0); // Початковий прогрес
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className={s.swiperContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
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
      >
        {reviews
          .filter((review) => review.add_to_reviews == 1)
          .map((review) => (
            <SwiperSlide key={review.id}>
              <div className={s.swiperSlide}>
                <div className={s.reviewerInfo}>
                  <img
                    className={s.reviewerAvatar}
                    data-aos="fade-up"
                    src={review.avatar}
                    alt={review.full_name}
                  />
                  <div>
                    <p data-aos="fade-up" className={s.reviewerFullname}>
                      {review.full_name}
                    </p>
                    <p data-aos="fade-up" className={s.reviewerDirect}>
                      {review.direction}
                    </p>

                    {isDesktop && (
                      <div data-aos="fade-up" className={s.reviewerCompany}>
                        <img
                          src={review.company_icon}
                          alt={review.company_name}
                        />
                        <p>{review.company_name}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <p className={s.reviewContent}>{review.review}</p>
                </div>

                {isMobile && (
                  <div data-aos="fade-up" className={s.reviewerCompany}>
                    <img src={review.company_icon} alt={review.company_name} />
                    <p>{review.company_name}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={s.swiperOptions}>
        <div className={s.swiperNav}>
          <div className="swiper-prev">
            <img src="/icons/swiper-arrow-prev.svg" alt="Arrow" />
            <img src="/icons/swiper-colored-prev.svg" alt="Arrow" />
          </div>
          <div className="swiper-next">
            <img src="/icons/swiper-arrow-next.svg" alt="Arrow" />
            <img src="/icons/swiper-colored-next.svg" alt="Arrow" />
          </div>
        </div>

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
      </div>
    </div>
  );
};
