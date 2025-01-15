import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";
import { getData } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export const Footer = ({ token }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    Aos.init();

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

  return (
    <motion.footer
      className={s.footer}
      initial={{ y: 100, opacity: 0 }} // Початкова позиція футера
      whileInView={{ y: 0, opacity: 1 }} // Кінцева позиція при скролі
      viewport={{ once: false }} // Анімація виконується лише один раз
      transition={{ duration: 1 }} // Тривалість анімації
    >
      <Layout>
        <div className={s.footerContainer}>
          <Link data-aos="fade-up" to="/" className={s.logoContainer}>
            <img src="/icons/colored-logo.svg" alt="Logo" />
            <span>Sentir</span>
          </Link>

          {isMobile && (
            <p data-aos="fade-up" className={s.mobAddText}>
              To feel through touch
            </p>
          )}

          {isDesktop && (
            <div className={s.menuNav}>
              <ul data-aos="fade-up">
                <p data-aos="fade-up">MENU</p>
                <li data-aos="fade-up">
                  <Link to="/about">About Us</Link>
                </li>
                <li data-aos="fade-up">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li data-aos="fade-up">
                  <Link to="/workflow">Workflow</Link>
                </li>
              </ul>
            </div>
          )}

          <div className={s.serviceNav}>
            <ul data-aos="fade-up">
              {isDesktop && <p data-aos="fade-up">Services</p>}
              <li data-aos="fade-up">
                <Link to="/services#project">Project Kick-Off</Link>
              </li>
              <li data-aos="fade-up">
                <Link to="/services#discovery">Discovery</Link>
              </li>
              <li data-aos="fade-up">
                <Link to="/services#UXUI">UX/UI Design</Link>
              </li>
              <li data-aos="fade-up">
                <Link to="/services#web">Web & Mobile Development</Link>
              </li>
              <li data-aos="fade-up">
                <Link to="/services#due">Due Diligence</Link>
              </li>
              <li data-aos="fade-up">
                <Link to="/services#staff">Staff Augmentation</Link>
              </li>
            </ul>
          </div>

          <div className={s.socialContainer}>
            <div data-aos="fade-up">
              <p>TALK TO US</p>
              <a href={`mailto:${contactInfo.talk_to_us_email}`}>
                {contactInfo.talk_to_us_email}
              </a>
            </div>

            <div data-aos="fade-up" className="w-[auto] lg:w-[20vw]">
              <p>COME SEE US</p>
              <Link>{contactInfo.come_see_us}</Link>
            </div>

            <div data-aos="fade-up">
              <p>WORK WITH US</p>
              <a href={`mailto:${contactInfo.work_with_us_email}`}>
                {contactInfo.work_with_us_email}
              </a>
            </div>

            {isMobile && (
              <div data-aos="fade-up" className={s.menuNav}>
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

            <div data-aos="fade-up">
              {isDesktop && <p>social media</p>}
              <ul className={s.socialLinks}>
                {contactInfo.social_media_images &&
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
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={s.footerBottomContainer}>
          {isDesktop && <p>All rights reserved 2024 © Sentir</p>}
          <Link to="/policy-page">Privacy Policy</Link>
        </div>
      </Layout>
    </motion.footer>
  );
};
