import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./ContactPage.module.css";
import { Layout } from "../../components/Layout/Layout";
import { getData } from "../../services/api";
import { MainForm } from "../../components/Form/MainForm";
import { Helmet } from "react-helmet";

export const ContactPage = ({ token }) => {
  const [contactInfo, setContactInfo] = useState({});

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
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Це опис моєї сторінки." />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <section className={s.section}>
          <Layout className={s.container}>
            <div className="shrink-0">
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
            </div>

            <div className="shrink-0">
              <MainForm />
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
};
