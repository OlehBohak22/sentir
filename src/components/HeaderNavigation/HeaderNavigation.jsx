import { NavLink } from "react-router-dom";
import s from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
  return (
    <nav className={s.navContainer}>
      <ul className={s.navList}>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Portfolio</NavLink>
        </li>
        <li>
          <NavLink>Workflow</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
      </ul>

      <div className={s.headerContactBtn}>Contact</div>
    </nav>
  );
};
