import { Link, useLocation, matchPath } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { useState, useEffect } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false); // Закриття меню
  };

  // Додавання/видалення стилів для body
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%"; // Фіксація ширини для запобігання зміщенню сторінки
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Очищення стилів при демонтованні компонента
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menu]);

  // Перевірка на динамічний шлях
  const isPortfolio = location.pathname === "/portfolio";
  const isCaseDetail = matchPath("/cases/:id", location.pathname);

  // Визначення стилю для хедера
  const headerStyle =
    isPortfolio || isCaseDetail ? { color: "black" } : { color: "white" };

  return (
    <>
      {menu ? (
        <MobileMenu className="translate-y-[0]" closeOverlay={closeMenu} />
      ) : (
        <MobileMenu className="translate-y-[-100%]" closeOverlay={closeMenu} />
      )}

      <header
        style={
          isPortfolio || isCaseDetail
            ? { backgroundColor: "white", position: "relative", left: "0" }
            : {}
        }
      >
        <Layout>
          <div className={s.headerContainer}>
            <Link to="/" className={s.logoContainer}>
              <SentirLogo location={location.pathname} />
              <span style={headerStyle}>Sentir</span>
            </Link>

            <HeaderNavigation openMenu={openMenu} isOpen={menu} />
          </div>
        </Layout>
      </header>
    </>
  );
};
