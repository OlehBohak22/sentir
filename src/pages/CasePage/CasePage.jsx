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
  const { id } = useParams();
  const [cases, setCase] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      if (!token) return;
      try {
        const data = await getData(token, `wp-json/wp/v2/cases/${id}`);
        setCase(data);
      } catch (error) {
        console.error("Error fetching case:", error);
      }
    };

    fetchCase();
  }, [token, id]);

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
    return <div>Loading...</div>;
  }

  // Анімаційні параметри
  const fadeInUp = {
    hidden: { opacity: 0, y: -500 },
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
        <meta name="description" content="Це опис моєї сторінки." />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <CaseHero
            title={cases.title.rendered}
            bg={cases.case_title_pictures}
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CaseDetails details={cases} />
        </motion.div>

        {/* Background Section */}
        <motion.section
          className={s.attachmentSection}
          style={{
            backgroundImage: `url(${cases.case_second_pictures})`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.section>

        {/* Review Section */}
        <motion.div
          className="bg-black"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          {review ? (
            <SeparateReviewBlock review={review} />
          ) : (
            <motion.p>No reviews available for this case.</motion.p>
          )}
        </motion.div>

        {/* Horizontal Section */}

        <CaseHorizontalSection cases={cases} />

        {/* Form Section */}
        <div className="lg:mt-[5vw] mt-[10vw]">
          <FormSection />
        </div>
      </main>
    </>
  );
};
