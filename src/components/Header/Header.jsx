import { Link, useLocation, matchPath } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { SentirLogo } from "../../components/SentirLogo/SentirLogo";
import s from "./Header.module.css";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { useState, useEffect, useRef } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTop = useRef(0); // Використовуємо useRef для збереження попереднього значення scroll

  const openMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menu]);

  const isPortfolio = location.pathname === "/portfolio";
  const isHome = location.pathname === "/";
  const isPolicy = location.pathname === "/policy-page";
  const isCaseDetail = matchPath("/cases/:id", location.pathname);

  const handleScrollTop = () => {
    isHome &&
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
  };

  const headerStyle =
    isPortfolio || isPolicy || isCaseDetail
      ? { color: "black" }
      : { color: "white" };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200); // Після 100px додаємо бекграунд

      if (scrollTop > lastScrollTop.current) {
        setShowHeader(false); // Скрол вниз - ховаємо хедер
      } else {
        setShowHeader(true); // Скрол вгору - показуємо хедер
      }
      lastScrollTop.current = scrollTop; // Оновлюємо значення scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {menu ? (
        <MobileMenu className="translate-y-[0]" closeOverlay={closeMenu} />
      ) : (
        <MobileMenu className="translate-y-[-100%]" closeOverlay={closeMenu} />
      )}

      <header
        className={`${s.headerContainer} ${showHeader ? s.show : s.hide} ${
          isScrolled ? s.scrolled : ""
        }`}
        style={
          isPortfolio || isPolicy || isCaseDetail
            ? { backgroundColor: "white", width: "100%", left: "0" }
            : {}
        }
      >
        <Layout className={s.container}>
          <div className={s.headerContainer}>
            <Link
              to="/"
              onClick={closeMenu && handleScrollTop}
              className={s.logoContainer}
            >
              <SentirLogo
                isScrolled={isScrolled}
                location={location.pathname}
              />
              <span style={headerStyle}>Sentir</span>
            </Link>

            <HeaderNavigation
              closeMenu={closeMenu}
              openMenu={openMenu}
              scrollTop={handleScrollTop}
              isOpen={menu}
              isScrolled={isScrolled}
            />
          </div>
        </Layout>
      </header>
    </>
  );
};
