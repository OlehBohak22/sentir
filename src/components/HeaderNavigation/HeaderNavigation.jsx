import { Link, NavLink, useLocation } from "react-router-dom";
import s from "./HeaderNavigation.module.css";
import { useMediaQuery } from "react-responsive";

export const HeaderNavigation = ({ openMenu, isOpen }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const location = useLocation();

  const handleOpen = () => {
    openMenu();
  };

  // Задаємо колір для активних елементів
  const headerStyle =
    location.pathname === "/portfolio" || location.pathname.startsWith("/cases")
      ? { color: "black", fill: "black", backgroundColor: "transparent" }
      : { color: "white", fill: "white", backgroundColor: "transparent" };

  return (
    <nav style={headerStyle} className={s.navContainer}>
      {isDesktop && (
        <ul className={s.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className={s.backdrop}>
            <NavLink className={s.serviceLink} to="/services">
              Services
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.72292 6.15902L4.17999 3.29168C4.2196 3.24549 4.26872 3.20841 4.32401 3.18299C4.37929 3.15756 4.43942 3.1444 4.50026 3.1444C4.56111 3.1444 4.62124 3.15756 4.67652 3.18299C4.7318 3.20841 4.78093 3.24549 4.82054 3.29168L7.27761 6.15902C7.5121 6.43271 7.31769 6.85547 6.95733 6.85547H2.04249C1.68214 6.85547 1.48773 6.43271 1.72292 6.15902Z" />
              </svg>
            </NavLink>
            <div className={s.backdropContent}>
              <Link
                to="/services#project"
                className={location.hash === "#project" ? s.activeLink : ""}
                style={
                  location.hash === "#project"
                    ? { color: headerStyle.color }
                    : {}
                }
              >
                Project Kick-Off
              </Link>
              <Link
                to="/services#discovery"
                className={location.hash === "#discovery" ? s.activeLink : ""}
                style={
                  location.hash === "#discovery"
                    ? { color: headerStyle.color }
                    : {}
                }
              >
                Discovery
              </Link>
              <Link
                to="/services#UXUI"
                className={location.hash === "#UXUI" ? s.activeLink : ""}
                style={
                  location.hash === "#UXUI" ? { color: headerStyle.color } : {}
                }
              >
                UX/UI
              </Link>
              <Link
                to="/services#web"
                className={location.hash === "#web" ? s.activeLink : ""}
                style={
                  location.hash === "#web" ? { color: headerStyle.color } : {}
                }
              >
                Web & Mobile <br /> Development
              </Link>
              <Link
                to="/services#due"
                className={location.hash === "#due" ? s.activeLink : ""}
                style={
                  location.hash === "#due" ? { color: headerStyle.color } : {}
                }
              >
                Due Diligence
              </Link>
              <Link
                to="/services#staff"
                className={location.hash === "#staff" ? s.activeLink : ""}
                style={
                  location.hash === "#staff" ? { color: headerStyle.color } : {}
                }
              >
                Staff Augmentation
              </Link>
            </div>
          </li>

          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/workflow">Workflow</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      )}

      <Link to="/contact" className={s.headerContactBtn}>
        Contact
      </Link>

      {isMobile && (
        <button
          onClick={handleOpen}
          className={`${s.burger} ${isOpen ? s.opened : ""}`}
          type="button"
        >
          <div
            style={{
              backgroundColor:
                location.pathname === "/portfolio" ||
                location.pathname.startsWith("/cases")
                  ? "black"
                  : "white",
            }}
            className={s.navBurgerLine}
          ></div>
          <div
            style={{
              backgroundColor:
                location.pathname === "/portfolio" ||
                location.pathname.startsWith("/cases")
                  ? "black"
                  : "white",
            }}
            className={s.navBurgerLine}
          ></div>
        </button>
      )}
    </nav>
  );
};
