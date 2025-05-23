import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";
import { Link } from "react-router-dom";
import "./PortfolioCursor.css";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import { useMediaQuery } from "react-responsive";

export const PortfolioTitularSection = ({ titulInfo, className }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const mors = titulInfo.case_mors
    .split("|||")
    .filter((item) => item.trim() !== "");

  return (
    <Layout className={className}>
      <div data-aos="fade-up" data-aos-duration="800" className="case">
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

              <p data-aos="fade-up" data-aos-duration="800">
                {titulInfo.case_short_description}
              </p>

              {/* Анімація списку */}
              <ul data-aos="fade-up" data-aos-duration="800">
                {mors
                  .sort((a, b) => (a === "NDA" ? -1 : b === "NDA" ? 1 : 0)) // Сортуємо, щоб "NDA" завжди було першим
                  .map((item, index) => (
                    <li key={index} className={item === "NDA" ? s.nda : ""}>
                      {item}
                    </li>
                  ))}
              </ul>

              {/* Анімація заголовку */}
              <h3 data-aos="fade-up" data-aos-duration="800">
                <AnimatedHeading text={titulInfo.case_title}></AnimatedHeading>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};
