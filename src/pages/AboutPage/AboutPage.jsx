import { AboutHeroSection } from "../../components/AboutHeroSection/AboutHeroSection";
import { AboutMissionSection } from "../../components/AboutMissionSection/AboutMissionSection";
import { AboutSwiperSection } from "../../components/AboutSwiperSection/AboutSwiperSection";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";
import { CompanyList } from "../../components/CompanyList/CompanyList";
import { ProfessionalsBlock } from "../../components/ProfessionalsBlock/ProfessionalsBlock";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import { SeparateReviewBlock } from "../../components/SeparateReviewBlock/SeparateReviewBlock";

export const AboutPage = ({ token }) => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/reviews");
        setReview(data.find((item) => item.case_select == "general"));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [token]);

  return (
    <main>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutSwiperSection />
      <HomeReviewSection>
        <ProfessionalsBlock />
        <SeparateReviewBlock review={review} className="mb=[2vw}" />
        <CompanyList />
      </HomeReviewSection>
    </main>
  );
};
