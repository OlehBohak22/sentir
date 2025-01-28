import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Підключення Framer Motion
import s from "./ContactPage.module.css";
import { Layout } from "../../components/Layout/Layout";
import { getData } from "../../services/api";
import { MainForm, TestToast } from "../../components/Form/MainForm";
import { Helmet } from "react-helmet";

export const ContactPage = ({ token }) => {
  const [contactInfo, setContactInfo] = useState({});
  const [isVisible, setIsVisible] = useState(false); // Для керування видимістю

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

  // Анімаційні параметри
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with us: contact our team for inquiries, collaborations, or support. We're here to help!"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <section className={s.section}>
          <Layout className={s.container}>
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
                  <h4 className="mb-[1.2vw]">SOCIAL MEDIA</h4>
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

            <motion.div
              className="shrink-0"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <MainForm />
            </motion.div>
          </Layout>
        </section>

        <TestToast />
      </main>
    </>
  );
};
