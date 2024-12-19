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
              <motion.div
                className={s.swiperSlide}
                initial="hidden"
                whileInView="visible"
                variants={slideVariants}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <div className={s.reviewerInfo}>
                  <img
                    className={s.reviewerAvatar}
                    src={review.avatar}
                    alt={review.full_name}
                  />
                  <div>
                    <p className={s.reviewerFullname}>{review.full_name}</p>
                    <p className={s.reviewerDirect}>{review.direction}</p>

                    {isDesktop && (
                      <div className={s.reviewerCompany}>
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
                  <div className={s.reviewerCompany}>
                    <img src={review.company_icon} alt={review.company_name} />
                    <p>{review.company_name}</p>
                  </div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={s.swiperOptions}>
        <div className={s.swiperNav}>
          <div className="swiper-prev">
            <img src="/icons/swiper-arrow-prev.svg" alt="" />
          </div>
          <div className="swiper-next">
            <img src="/icons/swiper-arrow-next.svg" alt="" />
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
