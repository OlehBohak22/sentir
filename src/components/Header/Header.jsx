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
    setMenu(false);
  };

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
  const isPolicy = location.pathname === "/policy-page";
  const isCaseDetail = matchPath("/cases/:id", location.pathname);

  const headerStyle =
    isPortfolio || isPolicy || isCaseDetail
      ? { color: "black" }
      : { color: "white" };

  return (
    <>
      {menu ? (
        <MobileMenu className="translate-y-[0]" closeOverlay={closeMenu} />
      ) : (
        <MobileMenu className="translate-y-[-100%]" closeOverlay={closeMenu} />
      )}

      <header
        style={
          isPortfolio || isCaseDetail || isPolicy
            ? { backgroundColor: "white", position: "relative", left: "0" }
            : {}
        }
      >
        <Layout>
          <div className={s.headerContainer}>
            <Link to="/" onClick={closeMenu} className={s.logoContainer}>
              <SentirLogo location={location.pathname} />
              <span style={headerStyle}>Sentir</span>
            </Link>

            <HeaderNavigation
              closeMenu={closeMenu}
              openMenu={openMenu}
              isOpen={menu}
            />
          </div>
        </Layout>
      </header>
    </>
  );
};
