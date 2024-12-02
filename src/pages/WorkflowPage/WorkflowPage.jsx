import { Layout } from "../../components/Layout/Layout";
import { Roadmap } from "../../components/Roadmap/Roadmap";
import s from "./WorkflowPage.module.css";
import { SeparateReviewBlock } from "../../components/SeparateReviewBlock/SeparateReviewBlock";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";

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

  return (
    <main>
      <section className={s.heroSection}>
        <Layout>
          <div className={s.titleContainer}>
            <h1>WorkFlow</h1>
            <p>Without process, there’s only chaos</p>
          </div>
        </Layout>

        <Roadmap />

        <SeparateReviewBlock review={review} />
      </section>
    </main>
  );
};
