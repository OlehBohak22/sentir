import { Link, useLocation, matchPath } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

export const Header = () => {
  const location = useLocation();

  // Перевірка на динамічний шлях, використовуючи matchPath
  const isPortfolio = location.pathname === "/portfolio";
  const isCaseDetail = matchPath("/cases/:id", location.pathname);

  // Визначення стилю для хедера
  const headerStyle =
    isPortfolio || isCaseDetail ? { color: "black" } : { color: "white" };

  return (
    <header
      style={
        isPortfolio || isCaseDetail
          ? { backgroundColor: "white", position: "static" }
          : {}
      }
    >
      <Layout>
        <div className={s.headerContainer}>
          <Link to="/" className={s.logoContainer}>
            <SentirLogo />
            <span style={headerStyle}>Sentir</span>
          </Link>

          <HeaderNavigation />
        </div>
      </Layout>
    </header>
  );
};
