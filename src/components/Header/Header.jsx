import { Link, useLocation, matchPath } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  const closeMenu = () => {
    setMenu(false); // Функція для закриття меню
  };

  // Перевірка на динамічний шлях, використовуючи matchPath
  const isPortfolio = location.pathname === "/portfolio";
  const isCaseDetail = matchPath("/cases/:id", location.pathname);

  // Визначення стилю для хедера
  const headerStyle =
    isPortfolio || isCaseDetail ? { color: "black" } : { color: "white" };

  return (
    <>
      {menu ? (
        <MobileMenu className="translate-y-[0]" closeOverlay={closeMenu} /> // Передаємо closeOverlay
      ) : (
        <MobileMenu className="translate-y-[-100%]" closeOverlay={closeMenu} />
      )}

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

            <HeaderNavigation openMenu={openMenu} isOpen={menu} />
          </div>
        </Layout>
      </header>
    </>
  );
};
