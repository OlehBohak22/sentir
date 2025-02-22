import { useState, useEffect } from "react";
import s from "./Popup.module.css";
import { MainForm } from "../Form/MainForm";
import { getData } from "../../services/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AnimatedHeadingFaster } from "../AnimatedHeading/AnimatedHeading";

export const Popup = ({ onClose, token }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Для керування видимістю
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchCompanies = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/contact-info");
        setContactInfo(data);
        setIsVisible(true); // Показати після завантаження
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    fetchCompanies();
  }, [token]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    // Блокуємо скрол для всієї сторінки
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Відновлюємо скрол для сторінки при закритті
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Викликаємо onClose після завершення анімації
    }, 500); // Тривалість анімації закриття
  };

  return (
    <div
      className={`${s.popupOverlay} ${isClosing ? s.hide : ""}`}
      onClick={handleClose}
    >
      <div
        data-lenis-prevent
        className={`${s.popupContent} ${isClosing ? s.hide : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.popupClose} onClick={handleClose}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6499 9.01417L17.6646 1.99936C18.1211 1.54307 18.1211 0.805292 17.6646 0.349055C17.2083 -0.107237 16.4706 -0.107237 16.0143 0.349055L8.99946 7.3638L1.98488 0.349055C1.52837 -0.107237 0.790862 -0.107237 0.33457 0.349055C-0.12194 0.805347 -0.12194 1.54307 0.33457 1.99936L7.3491 9.01417L0.334625 16.0289C-0.121885 16.4852 -0.121885 17.223 0.334625 17.6792C0.44286 17.7878 0.571475 17.8739 0.713082 17.9325C0.854689 17.9912 1.0065 18.0213 1.15978 18.0212C1.4585 18.0212 1.75734 17.9068 1.98494 17.6792L8.99946 10.6645L16.0143 17.6792C16.1226 17.7878 16.2512 17.8738 16.3928 17.9325C16.5344 17.9912 16.6862 18.0213 16.8395 18.0212C17.1382 18.0212 17.437 17.9068 17.6646 17.6792C18.1211 17.2229 18.1211 16.4852 17.6646 16.0289L10.6499 9.01417Z"
              fill="white"
            />
          </svg>
        </button>

        {isDesktop && (
          <motion.div
            className="shrink-0"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className={s.contactInfo}>
              <h1>CONTACT</h1>

              <div>
                <h4>TALK TO US</h4>
                <a href={`mailto:${contactInfo?.talk_to_us_email || ""}`}>
                  {contactInfo?.talk_to_us_email || "Not available"}
                </a>
              </div>

              <div>
                <h4 className="mb-[5vw]">SOCIAL MEDIA</h4>
                <ul className={s.socialLinks} role="list">
                  {contactInfo?.social_media_images ? (
                    contactInfo.social_media_images.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: item.image }}
                            style={{
                              display: "inline-block",
                              width: "24px",
                              height: "24px",
                              fill: "black",
                            }}
                          />
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>No social media links available</li>
                  )}
                </ul>
              </div>

              <div className={s.dynamicWidth}>
                <h4>COME SEE US</h4>
                <Link>{contactInfo?.come_see_us || "Not available"}</Link>
              </div>

              <div>
                <h4>WORK WITH US</h4>
                <a href={`mailto:${contactInfo?.work_with_us_email || ""}`}>
                  {contactInfo?.work_with_us_email || "Not available"}
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {isMobile && (
          <h2 className={s.title}>
            <AnimatedHeadingFaster text={"DROP US A LINE"} />
          </h2>
        )}

        <MainForm closePopup={handleClose} />
      </div>
    </div>
  );
};
