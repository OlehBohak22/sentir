import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import s from "./PortfilioPage.module.css";

export const PortfilioPage = ({ token }) => {
  const [cases, setCases] = useState([]);

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
  }, [token, cases]);

  return (
    <main>
      <section className={s.section}>
        <Layout>
          <h1>Portfolio</h1>
        </Layout>

        {cases.map((portfolioCase) => (
          <PortfolioTitularSection
            key={portfolioCase.id}
            titulInfo={portfolioCase}
          />
        ))}
      </section>
    </main>
  );
};
