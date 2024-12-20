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
        <CaseHero title={cases.title.rendered} bg={cases.case_title_pictures} />
        <CaseDetails details={cases} />

        <section
          className={s.attachmentSection}
          style={{
            backgroundImage: `url(${cases.case_second_pictures})`,
          }}
        ></section>

        <div className="bg-black">
          {review ? (
            <SeparateReviewBlock review={review} />
          ) : (
            <p>No reviews available for this case.</p>
          )}
        </div>

        <CaseHorizontalSection cases={cases} />
        <div className="mt-[5vw]">
          <FormSection />
        </div>
      </main>
    </>
  );
};
