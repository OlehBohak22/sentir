import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./HomeReviewSwiper.module.css";
import { useState } from "react";
import "./swiperPagination.css";
import { useMediaQuery } from "react-responsive";

export const HomeReviewSwiper = ({ reviews }) => {
  const [progress, setProgress] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0); // Активний індекс слайда
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div className={s.swiperContainer}>
      <Swiper
        speed={600} // Плавність
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          type: "progressbar",
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex; // ✅ справжній індекс, без урахування клонів
          const currentProgress =
            ((realIndex + 1) / swiper.slides.length) * 100;
          setProgress(currentProgress);
          setActiveIndex(realIndex);
        }}
      >
        {reviews
          .filter((review) => review.add_to_reviews == 1)
          .map((review) => (
            <SwiperSlide key={review.id}>
              {/* Використовуємо motion.div з унікальним key для кожного слайда */}
              <motion.div
                key={reviews[activeIndex]?.id} // ✅ Прив'язка до унікального review
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={s.swiperSlide}
              >
                <div className={s.reviewerInfo}>
                  <motion.img
                    initial="hidden"
                    animate="visible"
                    className={s.reviewerAvatar}
                    src={review.avatar}
                    alt={review.full_name}
                  />
                  <div>
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      className={s.reviewerFullname}
                    >
                      {review.full_name}
                    </motion.p>
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      className={s.reviewerDirect}
                    >
                      {review.direction}
                    </motion.p>

                    {isDesktop && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        className={s.reviewerCompany}
                      >
                        <img
                          src={review.company_icon}
                          alt={review.company_name}
                        />
                        <p>{review.company_name}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
                <motion.div initial="hidden" animate="visible">
                  <p
                    className={s.reviewContent}
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </motion.div>

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
                height: "4px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
