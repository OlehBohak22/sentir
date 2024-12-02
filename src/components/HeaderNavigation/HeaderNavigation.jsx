import { NavLink, useLocation } from "react-router-dom";
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
