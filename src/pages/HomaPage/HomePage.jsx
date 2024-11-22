import Header from "../../components/Header/Header";
import { HeroHeaderLayout } from "../../components/HeroHeaderSection/HeroHeaderLayout";
import { HomeHero } from "../../components/HomeHero/HomeHero";

export const HomePage = () => {
  return (
    <HeroHeaderLayout
      backgroundImage={"/src/assets/images/home-page/home-hero-bg.jpg"}
    >
      <Header />
      <HomeHero />
    </HeroHeaderLayout>
  );
};
