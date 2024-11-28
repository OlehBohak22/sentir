import { AboutHeroSection } from "../../components/AboutHeroSection/AboutHeroSection";
import { AboutMissionSection } from "../../components/AboutMissionSection/AboutMissionSection";
import { AboutSwiperSection } from "../../components/AboutSwiperSection/AboutSwiperSection";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";
import { CompanyList } from "../../components/CompanyList/CompanyList";
import { ProfessionalsBlock } from "../../components/ProfessionalsBlock/ProfessionalsBlock";

export const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutSwiperSection />
      <HomeReviewSection>
        <ProfessionalsBlock />
        <CompanyList />
      </HomeReviewSection>
    </main>
  );
};
