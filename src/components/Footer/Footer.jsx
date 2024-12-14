import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";
import { getData } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

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
          <div className={s.logoContainer}>
            <img src="/icons/colored-logo.svg" alt="Logo" />
            <span>Sentir</span>
          </div>

          {isMobile && <p className={s.mobAddText}>To feel through touch</p>}

          {isDesktop && (
            <div className={s.menuNav}>
              <ul>
                <h4>MENU</h4>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link>Portfolio</Link>
                </li>
                <li>
                  <Link>Workflow</Link>
                </li>
              </ul>
            </div>
          )}

          <div className={s.serviceNav}>
            <ul>
              {isDesktop && <h4>Services</h4>}
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
              <h4>TALK TO US</h4>
              <a href={`mailto:${contactInfo.talk_to_us_email}`}>
                {contactInfo.talk_to_us_email}
              </a>
            </div>

            <div className="w-[auto] lg:w-[20vw]    ">
              <h4>COME SEE US</h4>
              <Link>{contactInfo.come_see_us}</Link>
            </div>

            <div>
              <h4>WORK WITH US</h4>
              <a href={`mailto:${contactInfo.work_with_us_email}`}>
                {contactInfo.work_with_us_email}
              </a>
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
              {isDesktop && <h4>COME SEE US</h4>}
              <ul className={s.socialLinks}>
                {contactInfo.social_media_images &&
                  Object.values(contactInfo.social_media_images).map(
                    (item, index) => (
                      <li key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={item.image} alt={item.name} />
                        </a>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>

        <div className={s.footerBottomContainer}>
          {isDesktop && <p>All rights reserved 2024 © Sentir</p>}
          <a href="">Privacy Policy</a>
        </div>
      </Layout>
    </footer>
  );
};
