import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";
import { getData } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";

export const Footer = ({ token }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const location = useLocation();
  const [contactInfo, setContactInfo] = useState({});

  // ref для футера
  const footerRef = useRef(null);
  // стан для збереження translateY
  const [translateY, setTranslateY] = useState(100);

  // Отримання даних контактів
  useEffect(() => {
    const fetchCompanies = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/contact-info");
        setContactInfo(data);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    fetchCompanies();
  }, [token]);

  useEffect(() => {
    Aos.init();

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
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3279_4650)">
                      <path
                        d="M21.2375 7.66289H21.2498M8.375 2.15039H20.625C24.0077 2.15039 26.75 4.89265 26.75 8.27539V20.5254C26.75 23.9081 24.0077 26.6504 20.625 26.6504H8.375C4.99226 26.6504 2.25 23.9081 2.25 20.5254V8.27539C2.25 4.89265 4.99226 2.15039 8.375 2.15039ZM19.4 13.6286C19.5512 14.6481 19.377 15.6894 18.9024 16.6042C18.4277 17.519 17.6766 18.2609 16.756 18.7242C15.8354 19.1876 14.7921 19.3489 13.7745 19.1852C12.757 19.0214 11.817 18.541 11.0882 17.8122C10.3594 17.0834 9.87897 16.1434 9.71523 15.1259C9.55149 14.1083 9.71278 13.065 10.1762 12.1444C10.6395 11.2238 11.3814 10.4727 12.2962 9.99804C13.211 9.52335 14.2523 9.34921 15.2718 9.50039C16.3117 9.6546 17.2744 10.1392 18.0178 10.8826C18.7612 11.6259 19.2458 12.5887 19.4 13.6286Z"
                        stroke="#0B0B0B"
                        fill="none"
                        strokeWidth="2.43332"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3279_4650">
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
