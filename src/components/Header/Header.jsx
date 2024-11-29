import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

export const Header = () => {
  const location = useLocation();

  const headerStyle =
    location.pathname === "/portfolio"
      ? { color: "black" }
      : { color: "white" };

  return (
    <header>
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
