import { Layout } from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import { PortfolioTitularSection } from "../../components/PortfolioTitularSection/PortfolioTitularSection";
import s from "./PortfilioPage.module.css";
import { Helmet } from "react-helmet";
import { AnimatedHeading } from "../../components/AnimatedHeading/AnimatedHeading";

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
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of an IT company: successful projects, innovative solutions, and cutting-edge technologies driving business success."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <section className={s.section}>
          <Layout>
            <h1>
              <AnimatedHeading text="Portfolio" />
            </h1>
          </Layout>

          {cases.map((portfolioCase, index) => (
            <PortfolioTitularSection
              key={portfolioCase.id}
              titulInfo={portfolioCase}
              className={index === cases.length - 1 ? `${s.noneBefore}` : ""}
            />
          ))}
        </section>
      </main>
    </>
  );
};
