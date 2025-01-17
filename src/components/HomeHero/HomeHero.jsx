import { motion } from "framer-motion";
import { Layout } from "../Layout/Layout";
import s from "./HomeHero.module.css";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Стилі для Swiper
import "swiper/css/pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomeHero = ({ openPopup }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const items = [
    "a free-of<br />charge<br />project kick-off",
    "personalized,<br />boutique<br />experience",
    "Accelerated<br />MVP Launch for<br />Startups",
  ];

  const handleOpen = () => {
    openPopup();
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const HomeHeroLine = () => {
    let svgContent;

    if (isDesktop) {
      svgContent = (
        <svg
          className={s.svg}
          viewBox="0 0 1443 526"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={s.path}
            d="M698.672 400.444C677.417 397.312 653.782 389.94 627.595 377.207C630.052 379.246 632.869 381.409 636.025 383.659M698.672 400.444C757.006 409.042 797.412 385.711 823.456 353.664M698.672 400.444C673.878 400.277 653.085 394.066 636.025 383.659M698.672 400.444C720.256 400.59 744.871 396.155 772.696 385.919C794.659 377.839 811.217 366.726 823.456 353.664M823.456 353.664C832.356 342.713 839.578 330.743 845.266 318.682M823.456 353.664C833.364 343.089 840.442 331.237 845.266 318.682M845.266 318.682C857.564 292.603 862.685 266.096 862.066 248.526C861.176 223.246 850.224 195.393 832.009 171.334M845.266 318.682C864.529 268.55 847.861 207.223 832.009 171.334M832.009 171.334C809.13 141.115 774.791 116.882 734.538 111.248M832.009 171.334C825.461 156.509 819.052 146.025 815.373 142.464C805.104 132.524 783.397 110.657 734.538 111.248M734.538 111.248C692.724 105.396 654.868 115.931 626.418 138.432M734.538 111.248C707.617 111.574 672.453 118.718 626.418 138.432M626.418 138.432C594.061 164.024 573.872 205.097 573.872 255.147C573.872 304.908 593.172 357.518 636.025 383.659M626.418 138.432C613.025 144.168 598.711 150.968 583.412 158.973C493.54 206.001 411.199 176.484 355.97 95.9363C290.441 0.367256 220.409 83.9293 141.08 95.9363C64.0204 107.6 39.158 -14.4618 1 3.88233M636.025 383.659C683.816 417.723 809.357 471.611 940.39 414.123C1074.95 355.088 1170.84 349.085 1241.64 414.123C1304.75 472.109 1347.58 513.181 1395.27 520.685C1433.43 526.689 1441.63 523.187 1440.96 520.685"
            strokeWidth="3"
          />
        </svg>
      );
    } else if (isMobile) {
      svgContent = (
        <svg
          className={s.svg}
          viewBox="0 0 672 617"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4001_7307)">
            <path
              d="M292.201 373.462C281.419 366.954 270.31 357.615 259.035 344.798C259.902 346.457 260.935 348.265 262.132 350.196M292.201 373.462C321.794 391.324 348.925 387.862 370.265 376.434M292.201 373.462C278.834 367.755 268.998 359.687 262.132 350.196M292.201 373.462C303.838 378.43 318.152 381.607 335.514 382.376C349.22 382.983 360.689 380.725 370.265 376.434M370.265 376.434C377.558 372.529 384.174 367.694 389.981 362.461M370.265 376.434C378.018 372.961 384.529 368.156 389.981 362.461M389.981 362.461C402.538 351.146 411.311 337.974 414.956 328.334C420.201 314.464 420.589 296.925 416.19 279.791M389.981 362.461C411.752 339.719 416.632 302.786 416.19 279.791M416.19 279.791C410.665 258.269 397.588 237.389 377.1 225.225M416.19 279.791C416.008 270.292 414.917 263.172 413.735 260.413C410.434 252.712 403.651 235.972 377.1 225.225M377.1 225.225C355.818 212.59 332.964 209.71 312.485 215.432M377.1 225.225C362.471 219.303 341.841 215.201 312.485 215.432M312.485 215.432C289.193 221.94 268.974 239.573 257.637 266.634C246.366 293.539 244.883 326.355 262.132 350.196M312.485 215.432C303.944 215.499 294.665 215.933 284.58 216.796C225.336 221.866 187.502 187.255 175.886 131.195C162.104 64.68 105.311 93.9964 59.7007 82.5193C15.3945 71.3704 29.6007 -0.257047 4.81445 1.01779M262.132 350.196C280.255 379.439 335.925 437.012 419.794 435.61C505.918 434.171 559.127 452.647 582.671 503.847C603.662 549.496 617.511 581.402 641.6 596.264C660.872 608.153 666.099 608.117 666.304 606.613"
              strokeWidth="1.75862"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              x="0.769531"
              y="0.12207"
              width="670.406"
              height="616.062"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4001_7307"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4001_7307"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    }

    return <div>{svgContent}</div>;
  };

  return (
    <section className={s.heroSection}>
      <HomeHeroLine />
      <Layout>
        <h1 className={s.heroTitle}>
          <div className={s.rotatingCircles}>
            <img
              className={s.circle1}
              src="/icons/animated_circles/circle1.svg"
              alt="Circle 1"
            />
            <img
              className={s.circle2}
              src="/icons/animated_circles/circle2.svg"
              alt="Circle 2"
            />
          </div>

          {isDesktop && (
            <>
              <motion.span
                initial={{ opacity: 0, x: "0" }} // Початкова позиція: зліва
                whileInView={{ opacity: 1, x: "-60%" }} // Кінцева позиція: звичайна
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} // Повторна анімація при поверненні у видиму зону
              >
                BUILDING
              </motion.span>

              <br />
              <motion.span
                initial={{ opacity: 0, x: "0" }} // Початкова позиція: справа
                whileInView={{ opacity: 1, x: "-25%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                PRODUCTS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: "0" }} // Початкова позиція: зверху
                whileInView={{ opacity: 1, x: "20%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                THROUGH
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: "0" }} // Початкова позиція: знизу
                whileInView={{ opacity: 1, x: "65%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                EMPATHY
              </motion.span>
            </>
          )}

          {isMobile && (
            <>
              <motion.span
                initial={{ opacity: 0, x: "--50%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                BUILDING
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: "-50%" }}
                whileInView={{ opacity: 1, x: "-18%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-[10vw]"
              >
                PRODUCTS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: "50%" }}
                whileInView={{ opacity: 1, x: "20%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                THROUGH
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: "50%" }}
                whileInView={{ opacity: 1, x: "0" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                EMPATHY
              </motion.span>
            </>
          )}
        </h1>
        <p data-aos="fade-up" className={s.heroDesc}>
          From napkin sketches to full-scale digital solutions, we harness
          global expertise to turn your idea into a product that people love.
          Embrace our diverse, collaborative approach to making products that
          resonate with users and drive business success.
        </p>

        <div onClick={handleOpen} data-aos="fade-up">
          <div className={s.heroHoverLink}>GET NO-COST DISCOVERY</div>
        </div>

        <div>
          {isDesktop && (
            <motion.ul
              className={s.homeHeroItemList}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {items.map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.3 }}
                >
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </motion.li>
              ))}
            </motion.ul>
          )}

          {isMobile && (
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              initialSlide={1}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{
                clickable: true,
                type: "bullets",
                bulletClass: s.customBullet,
                bulletActiveClass: s.customBulletActive,
              }}
              className={s.swiper}
            >
              {items.map((text, index) => (
                <SwiperSlide key={index}>
                  <div className={s.swiperSlideContent}>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </Layout>
    </section>
  );
};
