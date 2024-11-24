import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

export const Header = () => {
  return (
    <header>
      <Layout>
        <div className={s.headerContainer}>
          <Link to="/" className={s.logoContainer}>
            <SentirLogo />
            <span>Sentir</span>
          </Link>

          <HeaderNavigation />
        </div>
      </Layout>
    </header>
  );
};
