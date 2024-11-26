import { ApproachSection } from "../../components/ApproachSection/ApproachSection";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { PortfolioSection } from "../../components/PortfolioSection/PortfolioSection";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import { projects } from "../../services/fake-api";
import s from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { getData, login } from "../../services/api";
import { HomeReviewSection } from "../../components/HomeReviewSection/HomeReviewSection";

export const HomePage = () => {
  const [token, setToken] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Функція для отримання токена
    const fetchToken = async () => {
      try {
        const fetchedToken = await login(
          "admin_projection",
          "mkGp6Rpv5$On7BR&VU"
        );
        setToken(fetchedToken); // Зберігаємо токен у стані
        console.log("Token:", fetchedToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []); // Цей useEffect спрацює один раз при завантаженні компонента

  useEffect(() => {
    // Якщо токен є, отримуємо пости
    const fetchPosts = async () => {
      if (!token) return; // Перевіряємо, чи є токен
      try {
        const fetchedPosts = await getData(token, "wp-json/wp/v2/cases"); // Отримуємо пости
        setPosts(fetchedPosts);
        console.log("Posts:", fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]); // Цей useEffect спрацює тільки тоді, коли токен зміниться

  return (
    <>
      <HomeHero className={s.homeHero} />

      <ServicesSection />

      <section className={s.portfolioSection}>
        <PortfolioTitularSection titulInfo={projects[0]} />

        <PortfolioSection restInfo={projects.slice(1)} />
      </section>

      <ApproachSection />

      <HomeReviewSection reviews={posts} />
    </>
  );
};
