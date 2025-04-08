import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const Footer = ({ contactInfo }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const location = useLocation();

  // ref для футера
  const footerRef = useRef(null);
  // стан для збереження translateY
  const [translateY, setTranslateY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      if (isMobile) {
        // На мобайлі просто скидаємо анімацію
        setTranslateY(0);
        return;
      }

      // Отримуємо позицію футера відносно viewport
      const rect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Розрахунок visiblePart (можна налаштовувати)
      const visiblePart = windowHeight - rect.top / 2;
      const footerHeight = rect.height;
      let progress = visiblePart / footerHeight;
      if (progress > 1) progress = 1;
      if (progress < 0) progress = 0;
      // При progress=0 → -100%, progress=1 → 0%
      const translateValue = -100 + progress * 100;
      setTranslateY(translateValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleScrollTop = () => {
    if (location.pathname === "/") {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  };

  return (
    <footer
      ref={footerRef}
      className={location.pathname === "/portfolio" ? s.border : ""}
      style={{ transform: `translateY(${translateY}%)` }}
    >
      <Layout>
        <div className={s.footerContainer}>
          <Link onClick={handleScrollTop} to="/" className={s.logoContainer}>
            <img src="/icons/colored-logo.svg" alt="Logo" />
            <span>Sentir</span>
          </Link>

          {isMobile && <p className={s.mobAddText}>To feel through touch</p>}

          {isDesktop && (
            <div className={s.menuNav}>
              <ul>
                <p>MENU</p>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/workflow">Workflow</Link>
                </li>
              </ul>
            </div>
          )}

          <div className={s.serviceNav}>
            <ul>
              {isDesktop && <p>Services</p>}
              <li>
                <Link to="/services#project">Project Kick-Off</Link>
              </li>
              <li>
                <Link to="/services#discovery">Discovery</Link>
              </li>
              <li>
                <Link to="/services#UXUI">UX/UI Design</Link>
              </li>
              <li>
                <Link to="/services#web">Web & Mobile Development</Link>
              </li>
              <li>
                <Link to="/services#due">Due Diligence</Link>
              </li>
              <li>
                <Link to="/services#staff">Staff Augmentation</Link>
              </li>
            </ul>
          </div>

          <div className={s.socialContainer}>
            <div>
              <p>TALK TO US</p>
              {contactInfo.talk_to_us_email && (
                <a href={`mailto:${contactInfo.talk_to_us_email}`}>
                  {contactInfo.talk_to_us_email}
                </a>
              )}
            </div>

            <div className="w-[auto] lg:w-[20vw]">
              <p>COME SEE US</p>
              <Link>{contactInfo.come_see_us}</Link>
            </div>

            <div>
              <p>WORK WITH US</p>
              {contactInfo.work_with_us_email && (
                <a href={`mailto:${contactInfo.work_with_us_email}`}>
                  {contactInfo.work_with_us_email}
                </a>
              )}
            </div>

            {isMobile && (
              <div className={s.menuNav}>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/workflow">Workflow</Link>
                  </li>
                </ul>
              </div>
            )}

            <div>
              {isDesktop && <p>social media</p>}
              <ul className={s.socialLinks}>
                <li>
                  {/* SVG іконки */}
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#6843E7", stopOpacity: 1 }}
                        />
                        <stop
                          offset="50%"
                          style={{ stopColor: "#F8086E", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#6843E7", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <g clipPath="url(#clip0_3279_4646)">
                      <path
                        d="M3.86536 0.400391C2.00561 0.400391 0.500301 1.911 0.5 3.76973C0.5 5.63027 2.00531 7.14059 3.86566 7.14059C5.72089 7.14059 7.2283 5.63027 7.2283 3.76973C7.2283 1.9107 5.72059 0.400391 3.86536 0.400391ZM0.962755 9.69736H6.76585V28.4004H0.962755V9.69736ZM21.5391 9.2323C18.7162 9.2323 16.8234 10.7827 16.0486 12.2529H15.971V9.69736H10.405V28.4001H16.203V19.1477C16.203 16.7085 16.6666 14.3458 19.6857 14.3458C22.6614 14.3458 22.7011 17.1356 22.7011 19.3042V28.3998H28.5V18.1414C28.5 13.1059 27.4153 9.2323 21.5391 9.2323Z"
                        fill="#0B0B0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3279_4646">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(0.5 0.400391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5001_5407)">
                      <g clipPath="url(#clip1_5001_5407)">
                        <path
                          d="M27.9732 8.23208C27.9076 6.74433 27.667 5.72152 27.3224 4.83523C26.9669 3.89447 26.4199 3.0522 25.7033 2.35202C25.0031 1.64095 24.1553 1.08841 23.2254 0.738426C22.334 0.393784 21.3165 0.153198 19.8288 0.0876025C18.3299 0.0164522 17.8541 0 14.0525 0C10.251 0 9.77519 0.0164522 8.28188 0.0820473C6.79413 0.147642 5.77132 0.388443 4.88525 0.73287C3.94427 1.08841 3.10201 1.63539 2.40183 2.35202C1.69075 3.0522 1.13843 3.90002 0.78823 4.82989C0.443589 5.72152 0.203002 6.73877 0.137407 8.22652C0.0662569 9.72538 0.0498047 10.2012 0.0498047 14.0027C0.0498047 17.8043 0.0662569 18.2801 0.131852 19.7734C0.197447 21.2611 0.438247 22.284 0.782889 23.1702C1.13843 24.111 1.69075 24.9533 2.40183 25.6535C3.10201 26.3645 3.94983 26.9171 4.8797 27.267C5.77132 27.6117 6.78858 27.8523 8.27654 27.9179C9.76963 27.9837 10.2457 27.9999 14.0472 27.9999C17.8487 27.9999 18.3246 27.9837 19.8179 27.9179C21.3056 27.8523 22.3284 27.6117 23.2145 27.267C25.0962 26.5395 26.584 25.0518 27.3115 23.1702C27.6559 22.2786 27.8967 21.2611 27.9623 19.7734C28.0279 18.2801 28.0444 17.8043 28.0444 14.0027C28.0444 10.2012 28.0388 9.72538 27.9732 8.23208ZM25.4518 19.664C25.3915 21.0315 25.1618 21.7699 24.9704 22.2622C24.4999 23.482 23.5318 24.4501 22.312 24.9206C21.8197 25.112 21.0759 25.3417 19.7138 25.4018C18.237 25.4676 17.794 25.4838 14.0581 25.4838C10.3222 25.4838 9.87369 25.4676 8.40218 25.4018C7.03472 25.3417 6.2963 25.112 5.80401 24.9206C5.19699 24.6962 4.64445 24.3407 4.19597 23.8758C3.73104 23.4217 3.3755 22.8747 3.15115 22.2677C2.95971 21.7754 2.73002 21.0315 2.66998 19.6696C2.60417 18.1927 2.58793 17.7496 2.58793 14.0136C2.58793 10.2777 2.60417 9.82922 2.66998 8.35793C2.73002 6.99047 2.95971 6.25205 3.15115 5.75976C3.3755 5.15253 3.73104 4.6002 4.20153 4.15151C4.65535 3.68657 5.20233 3.33103 5.80957 3.1069C6.30185 2.91546 7.04583 2.68577 8.40773 2.62551C9.88458 2.55992 10.3277 2.54347 14.0634 2.54347C17.8049 2.54347 18.2479 2.55992 19.7194 2.62551C21.0868 2.68577 21.8252 2.91546 22.3175 3.1069C22.9245 3.33103 23.4771 3.68657 23.9256 4.15151C24.3905 4.60555 24.746 5.15253 24.9704 5.75976C25.1618 6.25205 25.3915 6.99581 25.4518 8.35793C25.5174 9.83478 25.5338 10.2777 25.5338 14.0136C25.5338 17.7496 25.5174 18.1871 25.4518 19.664Z"
                          fill="black"
                        />
                        <path
                          d="M14.0512 6.80957C10.0803 6.80957 6.8584 10.0312 6.8584 14.0024C6.8584 17.9736 10.0803 21.1952 14.0512 21.1952C18.0224 21.1952 21.244 17.9736 21.244 14.0024C21.244 10.0312 18.0224 6.80957 14.0512 6.80957ZM14.0512 18.6682C11.4751 18.6682 9.38541 16.5788 9.38541 14.0024C9.38541 11.426 11.4751 9.33658 14.0512 9.33658C16.6276 9.33658 18.717 11.426 18.717 14.0024C18.717 16.5788 16.6276 18.6682 14.0512 18.6682Z"
                          fill="black"
                        />
                        <path
                          d="M23.2082 6.52587C23.2082 7.45318 22.4563 8.20506 21.5288 8.20506C20.6015 8.20506 19.8496 7.45318 19.8496 6.52587C19.8496 5.59835 20.6015 4.84668 21.5288 4.84668C22.4563 4.84668 23.2082 5.59835 23.2082 6.52587Z"
                          fill="black"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5001_5407">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_5001_5407">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3279_4653)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.4205 4.46949C21.7883 1.8469 18.2878 0.401922 14.5585 0.400391C6.87408 0.400391 0.620012 6.62435 0.616935 14.2741C0.61588 16.7195 1.25775 19.1066 2.47782 21.2107L0.5 28.4004L7.89067 26.4709C9.92709 27.5765 12.2198 28.1591 14.5529 28.1598H14.5588C22.2424 28.1598 28.4971 21.9353 28.5 14.2852C28.5016 10.5777 27.0528 7.09195 24.4205 4.46949ZM14.5585 25.8165H14.5537C12.4745 25.8156 10.4354 25.2596 8.65597 24.2091L8.23307 23.959L3.84732 25.104L5.0179 20.8485L4.74227 20.4122C3.58233 18.5761 2.96978 16.4539 2.97084 14.2749C2.97326 7.91664 8.17157 2.74373 14.5632 2.74373C17.6583 2.74473 20.5677 3.9458 22.7554 6.1256C24.9431 8.3054 26.1472 11.2028 26.1462 14.2843C26.1435 20.6431 20.9455 25.8165 14.5585 25.8165ZM20.9146 17.1795C20.5663 17.0059 18.8536 16.1675 18.5342 16.0516C18.2151 15.9359 17.9826 15.8783 17.7506 16.2252C17.5183 16.5721 16.8508 17.3531 16.6475 17.5843C16.4442 17.8158 16.2412 17.8448 15.8928 17.6712C15.5444 17.4977 14.422 17.1315 13.0914 15.9504C12.0559 15.0311 11.3568 13.8959 11.1535 13.549C10.9505 13.2017 11.1517 13.0322 11.3063 12.8414C11.6834 12.3754 12.061 11.8868 12.1771 11.6556C12.2933 11.4241 12.2351 11.2216 12.1479 11.0482C12.061 10.8747 11.3644 9.16828 11.0741 8.47393C10.7912 7.79821 10.5042 7.88943 10.2902 7.87888C10.0873 7.86878 9.85495 7.86672 9.62262 7.86672C9.39042 7.86672 9.01297 7.95335 8.6936 8.30063C8.37436 8.64775 7.47458 9.48635 7.47458 11.1928C7.47458 12.8992 8.72279 14.5477 8.89692 14.779C9.071 15.0105 11.3534 18.5121 14.8477 20.0137C15.6788 20.3712 16.3276 20.5843 16.8337 20.7441C17.6682 21.008 18.4274 20.9707 19.0277 20.8815C19.6971 20.7819 21.0885 20.0427 21.3791 19.233C21.6693 18.4232 21.6693 17.7291 21.582 17.5843C21.4952 17.4398 21.2628 17.3531 20.9146 17.1795Z"
                        fill="#0B0B0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3279_4653">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(0.5 0.400391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3279_4657)">
                      <path
                        d="M16.9382 28.4004V15.6292H21.2232L21.8661 10.6506H16.9382V7.47245C16.9382 6.03147 17.3367 5.04946 19.4054 5.04946L22.0396 5.04838V0.595313C21.584 0.536114 20.0203 0.400391 18.2003 0.400391C14.3999 0.400391 11.798 2.72014 11.798 6.97937V10.6506H7.5V15.6292H11.798V28.4004H16.9382Z"
                        fill="#0B0B0B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3279_4657">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.footerBottomContainer}>
          {isDesktop && <p>All rights reserved 2024 © Sentir</p>}
          <Link to="/policy-page">Privacy Policy</Link>
        </div>
      </Layout>
    </footer>
  );
};
