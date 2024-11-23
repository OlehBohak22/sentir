import Header from "../../components/Header/Header";
import { HeroHeaderLayout } from "../../components/HeroHeaderSection/HeroHeaderLayout";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import { projects } from "../../services/fake-api";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <HeroHeaderLayout
        backgroundImage={"/images/sections-bg/home-hero-bg.jpg"} // виправлено шлях до зображення
      >
        <Header />

        <HomeHero />
      </HeroHeaderLayout>

      <ServicesSection />

      <section className={s.portfolioSection}>
        <PortfolioTitularSection titulInfo={projects[0]} />
      </section>
    </>
  );
};
