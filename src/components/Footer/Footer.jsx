import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";
import { getData } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // додано для анімацій

export const Footer = ({ token }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [contactInfo, setContactInfo] = useState([]);

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

  return (
    <footer className={s.footer}>
      <Layout>
        <div className={s.footerContainer}>
          <motion.div
            className={s.logoContainer}
            initial={{ x: -200, opacity: 0 }} // Початкова позиція ліворуч
            whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
            transition={{ duration: 0.8 }}
          >
            <img src="/icons/colored-logo.svg" alt="Logo" />
            <span>Sentir</span>
          </motion.div>

          {isMobile && (
            <motion.p
              className={s.mobAddText}
              initial={{ x: 200, opacity: 0 }} // Початкова позиція праворуч
              whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
              transition={{ duration: 0.8 }}
            >
              To feel through touch
            </motion.p>
          )}

          {isDesktop && (
            <motion.div
              className={s.menuNav}
              initial={{ x: -200, opacity: 0 }} // Початкова позиція ліворуч
              whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          )}

          <motion.div
            className={s.serviceNav}
            initial={{ x: 200, opacity: 0 }} // Початкова позиція праворуч
            whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
            transition={{ duration: 1 }}
          >
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
          </motion.div>

          <motion.div
            className={s.socialContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }} // Початкова позиція ліворуч
              whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
              transition={{ duration: 1 }}
            >
              <p>TALK TO US</p>
              <a href={`mailto:${contactInfo.talk_to_us_email}`}>
                {contactInfo.talk_to_us_email}
              </a>
            </motion.div>

            <motion.div
              className="w-[auto] lg:w-[20vw]"
              initial={{ x: 200, opacity: 0 }} // Початкова позиція праворуч
              whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
              transition={{ duration: 1 }}
            >
              <p>COME SEE US</p>
              <Link>{contactInfo.come_see_us}</Link>
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }} // Початкова позиція ліворуч
              whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
              transition={{ duration: 1 }}
            >
              <p>WORK WITH US</p>
              <a href={`mailto:${contactInfo.work_with_us_email}`}>
                {contactInfo.work_with_us_email}
              </a>
            </motion.div>

            {isMobile && (
              <motion.div
                className={s.menuNav}
                initial={{ x: -200, opacity: 0 }} // Початкова позиція ліворуч
                whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
                transition={{ duration: 1 }}
              >
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
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {isDesktop && <p>social media</p>}
              <ul className={s.socialLinks}>
                {contactInfo.social_media_images &&
                  Object.values(contactInfo.social_media_images).map(
                    (item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: 200, opacity: 0 }} // Початкова позиція праворуч
                        whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={item.image} alt={item.name} />
                        </a>
                      </motion.li>
                    )
                  )}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={s.footerBottomContainer}
          initial={{ x: 200, opacity: 0 }} // Початкова позиція праворуч
          whileInView={{ x: 0, opacity: 1 }} // Фінішна позиція
          transition={{ duration: 1 }}
        >
          {isDesktop && <p>All rights reserved 2024 © Sentir</p>}
          <a href="">Privacy Policy</a>
        </motion.div>
      </Layout>
    </footer>
  );
};
