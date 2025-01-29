import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";
import { Link } from "react-router-dom";
import "./PortfolioCursor.css";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const PortfolioTitularSection = ({ titulInfo, className }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const mors = titulInfo.case_mors
    .split("|||")
    .filter((item) => item.trim() !== "");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout className={className}>
      <div data-aos="fade-up" className="case">
        <Link to={`/cases/${titulInfo.slug}`}>
          <div
            className={s.titularContainer}
            style={{ backgroundImage: `url(${titulInfo.case_title_pictures})` }}
          >
            {/* Контент секції */}
            <div className={s.titularContent}>
              {/* Анімація опису */}

              {isMobile && (
                <div className={s.mobileArrow}>
                  <img src="/icons/custom-arrow.png" alt="Click" />
                </div>
              )}

              <p
                dangerouslySetInnerHTML={{
                  __html:
                    titulInfo.case_description
                      .replace(/<br\s*\/?>/g, "<br />")
                      .slice(0, 150) +
                    (titulInfo.case_description.length > 150 ? "..." : ""),
                }}
                data-aos="fade-up"
              >
                {/* {titulInfo.case_description} */}
              </p>

              {/* Анімація списку */}
              <ul data-aos="fade-up">
                {mors
                  .sort((a, b) => (a === "NDA" ? -1 : b === "NDA" ? 1 : 0)) // Сортуємо, щоб "NDA" завжди було першим
                  .map((item, index) => (
                    <li key={index} className={item === "NDA" ? s.nda : ""}>
                      {item}
                    </li>
                  ))}
              </ul>

              {/* Анімація заголовку */}
              <h3>
                <AnimatedHeading text={titulInfo.case_title}></AnimatedHeading>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};
