import Header from "../../components/Header/Header";
import { HeroHeaderLayout } from "../../components/HeroHeaderSection/HeroHeaderLayout";
import { HomeHero } from "../../components/HomeHero/HomeHero";

export const HomePage = () => {
  return (
    <HeroHeaderLayout
      backgroundImage={"/images/sections-bg/home-hero-bg.jpg"} // виправлено шлях до зображення
    >
      <Header />
      <HomeHero />
    </HeroHeaderLayout>
  );
};
