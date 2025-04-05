import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./HomeReviewSwiper.module.css";
import { useState, useRef, useEffect } from "react";
import "./swiperPagination.css";
import { useMediaQuery } from "react-responsive";

export const HomeReviewSwiper = ({ reviews }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const filteredReviews = reviews.filter((r) => r.add_to_reviews == 1);
  const totalSlides = filteredReviews.length;

  const [progress, setProgress] = useState(0);
  const [, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !totalSlides) return;

    // Навігація
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();

    // Примусовий "свайп" туди-назад
    setTimeout(() => {
      swiper.slideNext(0); // без анімації
      swiper.slidePrev(0); // повертає назад
    }, 1000);

    // Початковий прогрес
    const initialIndex = swiper.realIndex ?? 0;
    setActiveIndex(initialIndex);
    setProgress(((initialIndex + 1) / totalSlides) * 100);
  }, [totalSlides]);

  return (
    <div className={s.swiperContainer}>
      <Swiper
        loop={true}
        speed={600}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          type: "progressbar",
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex;
          setActiveIndex(index);
          setProgress(((index + 1) / totalSlides) * 100);
        }}
      >
        {filteredReviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <motion.div
              key={review.id}
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
          <div className="swiper-prev" ref={prevRef}>
            <img src="/icons/swiper-arrow-prev.svg" alt="Arrow" />
            <img src="/icons/swiper-colored-prev.svg" alt="Arrow" />
          </div>
          <div className="swiper-next" ref={nextRef}>
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
