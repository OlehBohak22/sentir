import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";
import { Link } from "react-router-dom";
import "./PortfolioCursor.css";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const PortfolioTitularSection = ({ titulInfo }) => {
  const mors = titulInfo.case_mors
    .split("|||")
    .filter((item) => item.trim() !== "");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      <div data-aos="fade-up" className="case">
        <Link to={`/cases/${titulInfo.slug}`}>
          <div
            className={s.titularContainer}
            style={{ backgroundImage: `url(${titulInfo.case_title_pictures})` }}
          >
            {/* Контент секції */}
            <div className={s.titularContent}>
              {/* Анімація опису */}
              <p data-aos="fade-up">{titulInfo.case_description}</p>

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
