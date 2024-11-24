import { HomeHero } from "../../components/HomeHero/HomeHero";
import { PortfolioSection } from "../../components/PortfolioSection/PortfolioSection";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import { projects } from "../../services/fake-api";
import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <HomeHero className={s.homeHero} />

      <ServicesSection />

      <section className={s.portfolioSection}>
        <PortfolioTitularSection titulInfo={projects[0]} />

        <PortfolioSection restInfo={projects.slice(1)} />
      </section>
    </>
  );
};
