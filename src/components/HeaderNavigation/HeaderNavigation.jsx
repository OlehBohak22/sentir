import { Link, NavLink, useLocation } from "react-router-dom";
import s from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
  const location = useLocation();

  const headerStyle =
    location.pathname === "/portfolio"
      ? { color: "black" }
      : { color: "white" };

  return (
    <nav style={headerStyle} className={s.navContainer}>
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
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72292 6.15902L4.17999 3.29168C4.2196 3.24549 4.26872 3.20841 4.32401 3.18299C4.37929 3.15756 4.43942 3.1444 4.50026 3.1444C4.56111 3.1444 4.62124 3.15756 4.67652 3.18299C4.7318 3.20841 4.78093 3.24549 4.82054 3.29168L7.27761 6.15902C7.5121 6.43271 7.31769 6.85547 6.95733 6.85547H2.04249C1.68214 6.85547 1.48773 6.43271 1.72292 6.15902Z"
                fill="white"
              />
            </svg>
          </NavLink>
          <div className={s.backdropContent}>
            <Link to="/services#project">Project Kick-Off</Link>
            <Link to="/services#discovery">Discovery</Link>
            <Link to="/services#UXUI">UX/UI</Link>
            <Link to="/services#web">Web & Mobile Development</Link>
            <Link to="/services#due">Due Diligence</Link>
            <Link to="/services#staff">Staff Augmentation</Link>
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

      <div className={s.headerContactBtn}>Contact</div>
    </nav>
  );
};
