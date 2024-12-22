import { ApproachSection } from "../../components/ApproachSection/ApproachSection";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { PortfolioSection } from "../../components/PortfolioSection/PortfolioSection";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import s from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";
import { HomeReviewSwiper } from "../../components/HomeReviewSwiper/HomeReviewSwiper";
import { CompanyList } from "../../components/CompanyList/CompanyList";
import { FormSection } from "../../components/FormSection/FormSection";
import { Helmet } from "react-helmet";

export const HomePage = ({ token }) => {
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

  return (
    <>
      <Helmet>
        <title>Sentir</title>
        <meta name="description" content="Це опис моєї сторінки." />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <HomeHero className={s.homeHero} />

        <ServicesSection />

        <section className={s.portfolioSection}>
          {cases.length > 0 && (
            <PortfolioTitularSection titulInfo={titularCase} />
          )}

          <PortfolioSection restInfo={cases} />
        </section>

        <ApproachSection />

        <HomeReviewSection>
          <div className="mb-[23vw]">
            <HomeReviewSwiper reviews={reviews} />
          </div>
          <CompanyList token={token} />
        </HomeReviewSection>

        <FormSection />
      </main>
    </>
  );
};
