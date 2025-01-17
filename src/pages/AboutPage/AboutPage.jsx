import { AboutHeroSection } from "../../components/AboutHeroSection/AboutHeroSection";
import { AboutMissionSection } from "../../components/AboutMissionSection/AboutMissionSection";
import { AboutSwiperSection } from "../../components/AboutSwiperSection/AboutSwiperSection";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";
import { CompanyList } from "../../components/CompanyList/CompanyList";
import { ProfessionalsBlock } from "../../components/ProfessionalsBlock/ProfessionalsBlock";
import { useEffect, useState } from "react";
import { getData } from "../../services/api";
import { SeparateReviewBlock } from "../../components/SeparateReviewBlock/SeparateReviewBlock";
import { FormSection } from "../../components/FormSection/FormSection";
import { Helmet } from "react-helmet";

export const AboutPage = ({ token, openPopup }) => {
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
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about us: a dedicated IT company driven by innovation, expertise, and a passion for delivering exceptional solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <AboutHeroSection openPopup={openPopup} />
        <AboutMissionSection />
        <AboutSwiperSection />
        <HomeReviewSection>
          <ProfessionalsBlock />
          <div className="mb-[15vw]">
            <SeparateReviewBlock review={review} />
          </div>
          <CompanyList token={token} />
        </HomeReviewSection>
        <FormSection />
      </main>
    </>
  );
};
