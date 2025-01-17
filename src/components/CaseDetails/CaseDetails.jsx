import s from "./CaseDetails.module.css";
import { Layout } from "../../components/Layout/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AnimatedHeadingFaster } from "../AnimatedHeading/AnimatedHeading";

export const CaseDetails = ({ details }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={s.section}>
      <Layout className={s.container}>
        <div className={s.caseDesc}>
          <p>
            <AnimatedHeadingFaster
              text={
                <span
                  dangerouslySetInnerHTML={{
                    __html: details.case_description.replace(
                      /<br\s*\/?>/g,
                      "<br />"
                    ),
                  }}
                />
              }
            />
          </p>
        </div>

        <div className={s.caseDetails}>
          {details.text_hyperlink ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Website:</span>
              <a href={details.url_hyperlink} target="_blank">
                {details.text_hyperlink}
              </a>
            </div>
          ) : (
            ""
          )}

          {details.location ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Location:</span>
              <p>{details.location}</p>
            </div>
          ) : (
            ""
          )}

          {details.case_mors ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Service:</span>
              <p>
                {details.case_mors
                  .split("|||") // Розбиваємо рядок
                  .filter(Boolean) // Видаляємо порожні елементи, якщо вони є
                  .map(
                    (item, index) => (index === 0 ? item : `, ${item}`) // Додаємо кому лише після першого елемента
                  )}
              </p>
            </div>
          ) : (
            ""
          )}

          {details.timeline ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Timeline:</span>
              <p>{details.timeline}</p>
            </div>
          ) : (
            ""
          )}

          {details.industries ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Industries:</span>
              <p>{details.industries}</p>
            </div>
          ) : (
            ""
          )}

          {details.platforms ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>Platforms:</span>
              <p>{details.platforms}</p>
            </div>
          ) : (
            ""
          )}

          {details.mvp_in_numbers ? (
            <div data-aos="fade-up" className={s.detailsBlock}>
              <span>MVP in numbers:</span>
              <p>{details.mvp_in_numbers}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </section>
  );
};
