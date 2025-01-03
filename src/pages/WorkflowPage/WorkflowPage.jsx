import { Layout } from "../../components/Layout/Layout";
import { Roadmap } from "../../components/Roadmap/Roadmap";
import s from "./WorkflowPage.module.css";
import { SeparateReviewBlock } from "../../components/SeparateReviewBlock/SeparateReviewBlock";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import { SectionNavigation } from "../../components/SectionNavigation/SectionNavigation";
import { FormSection } from "../../components/FormSection/FormSection";
import { motion } from "framer-motion"; // Імпортуємо motion
import { Helmet } from "react-helmet";
import { AnimatedHeading } from "../../components/AnimatedHeading/AnimatedHeading";

export const WorkflowPage = ({ token }) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/reviews");
        setReview(data.find((item) => item.case_select == "About"));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [token]);

  // Варіанти анімації
  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Workflow</title>
        <meta
          name="description"
          content="Discover our workflow: a step-by-step approach combining efficiency, transparency, and innovation to deliver outstanding IT solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <section className={s.heroSection}>
          <Layout>
            <motion.div
              className={s.titleContainer}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: false, amount: 0.3 }} // Анімація при скролі
            >
              <h1>
                <AnimatedHeading text="WorkFlow" />
              </h1>
              <p>Without process, there’s only chaos</p>
            </motion.div>
          </Layout>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Roadmap />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SeparateReviewBlock review={review} />
          </motion.div>
        </section>

        <section className={s.innovationSection}>
          <Layout className={s.container}>
            <h2>
              <AnimatedHeading
                text="Innovation & Empathy
              "
              />
            </h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: false, amount: 0.3 }}
            >
              Sentir's brand ethos focuses on innovation and empathy. Using
              design thinking and empathy mapping, we create products that
              resonate with users, ensuring solutions are functional, meaningful
              and impactful.
            </motion.p>
          </Layout>
        </section>

        <SectionNavigation token={token} />

        <FormSection />
      </main>
    </>
  );
};
