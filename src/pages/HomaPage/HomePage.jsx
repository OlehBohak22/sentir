import { useEffect, useState, memo } from "react";
import { ApproachSection } from "../../components/ApproachSection/ApproachSection";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { PortfolioSection } from "../../components/PortfolioSection/PortfolioSection";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import s from "./HomePage.module.css";
import { getData } from "../../services/api";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";
import { HomeReviewSwiper } from "../../components/HomeReviewSwiper/HomeReviewSwiper";
import { CompanyList } from "../../components/CompanyList/CompanyList";
import { FormSection } from "../../components/FormSection/FormSection";
import { Helmet } from "react-helmet";

// Меморизація компонентів
const MemoizedPortfolioTitularSection = memo(PortfolioTitularSection);
const MemoizedPortfolioSection = memo(PortfolioSection);
const MemoizedHomeReviewSwiper = memo(HomeReviewSwiper);
const MemoizedCompanyList = memo(CompanyList);

export const HomePage = ({ token, openPopup }) => {
  const [cases, setCases] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/cases");
        setCases(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/reviews");
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [token]);

  const titularCase = Array.isArray(cases)
    ? cases.find((item) => item.main_case === "on")
    : [];

  const restCases = Array.isArray(cases)
    ? cases.filter((item) => item.main_case === "off")
    : [];

  return (
    <>
      <Helmet>
        <title>Sentir</title>
        <meta
          name="description"
          content="Leading IT solutions for your business: innovative technologies, expert team, and tailored services to drive your success."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <HomeHero openPopup={openPopup} className={s.homeHero} />

        <ServicesSection />

        <section className={s.portfolioSection}>
          {cases.length > 0 && (
            <MemoizedPortfolioTitularSection titulInfo={titularCase} />
          )}

          <MemoizedPortfolioSection restInfo={restCases} />
        </section>

        <ApproachSection openPopup={openPopup} />

        <HomeReviewSection>
          <div className="mb-[23vw] ">
            <MemoizedHomeReviewSwiper reviews={reviews} />
          </div>
          <MemoizedCompanyList token={token} />
        </HomeReviewSection>

        <FormSection />
      </main>
    </>
  );
};
