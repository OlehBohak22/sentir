import { useParams } from "react-router-dom";
import s from "./CasePage.module.css";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import { CaseHero } from "../../components/CaseHero/CaseHero";
import { CaseDetails } from "../../components/CaseDetails/CaseDetails";
import { SeparateReviewBlock } from "../../components/SeparateReviewBlock/SeparateReviewBlock";
import { FormSection } from "../../components/FormSection/FormSection";
import { CaseHorizontalSection } from "../../components/CaseHorizontalSection/CaseHorizontalSection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export const CasePage = ({ token }) => {
  const { slug } = useParams();
  const [cases, setCase] = useState(null);
  const [review, setReview] = useState(null);
  const [isInitialRendered, setIsInitialRendered] = useState(false);
  const [isRestRendered, setIsRestRendered] = useState(false);

  useEffect(() => {
    // Відображення основних компонентів
    setIsInitialRendered(true);

    // Затримка для рендерингу решти контенту
    const timer = setTimeout(() => {
      setIsRestRendered(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const fetchCase = async () => {
      if (!token) return;
      try {
        const data = await getData(token, `wp-json/wp/v2/cases?slug=${slug}`);
        if (data && data.length > 0) {
          setCase(data[0]);
        } else {
          console.error("No case found for the provided slug.");
        }
      } catch (error) {
        console.error("Error fetching case:", error);
      }
    };

    fetchCase();
  }, [token, slug]);

  useEffect(() => {
    if (!cases || !cases.case_title) return;

    const fetchReviews = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/reviews");
        const matchingReview = data.find(
          (item) => item.case_select === cases.case_title
        );
        setReview(matchingReview);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [token, cases]);

  if (!cases) {
    return <div className="main-content"></div>;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>{cases.title.rendered}</title>
        <meta name="description" content={cases.case_description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <motion.main
        className={s.page}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Основний контент */}
        {isInitialRendered && (
          <>
            {cases.title.rendered && cases.case_title_pictures && (
              <div>
                <CaseHero
                  title={cases.title.rendered}
                  bg={cases.case_title_pictures}
                />
              </div>
            )}

            {cases && (
              <div>
                <CaseDetails details={cases} />
              </div>
            )}
          </>
        )}

        {/* Контент з затримкою */}
        {isRestRendered && (
          <>
            {cases.case_second_pictures && (
              <section
                className={s.attachmentSection}
                style={{
                  backgroundImage: `url(${cases.case_second_pictures})`,
                }}
              ></section>
            )}

            {review && (
              <div className="bg-black">
                <SeparateReviewBlock review={review} />
              </div>
            )}

            {cases && Object.keys(cases).length > 0 && (
              <CaseHorizontalSection cases={cases} />
            )}

            <div className="lg:mt-[5vw] mt-[10vw]">
              <FormSection />
            </div>
          </>
        )}
      </motion.main>
    </>
  );
};
