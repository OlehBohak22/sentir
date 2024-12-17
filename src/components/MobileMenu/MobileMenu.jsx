import { useState } from "react";
import { Layout } from "../Layout/Layout";
import s from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

export const MobileMenu = ({ className, closeOverlay }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  const closeOverlayHandler = () => {
    closeOverlay(); // Викликаємо передану функцію для закриття меню
    setIsOverlayOpen(false); // Додатково можна закрити overlay
  };

  return (
    <div className={`${s.menuOverlay} ${className}`}>
      <Layout className={s.container}>
        <ul className={s.menuList}>
          <li>
            <Link to="/" onClick={closeOverlayHandler}>
              HOME
            </Link>
          </li>
          <li className={s.backdrop}>
            <Link onClick={toggleOverlay}>
              <p>SERVICES</p>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="M1.72292 6.15902L4.17999 3.29168C4.2196 3.24549 4.26872 3.20841 4.32401 3.18299C4.37929 3.15756 4.43942 3.1444 4.50026 3.1444C4.56111 3.1444 4.62124 3.15756 4.67652 3.18299C4.7318 3.20841 4.78093 3.24549 4.82054 3.29168L7.27761 6.15902C7.5121 6.43271 7.31769 6.85547 6.95733 6.85547H2.04249C1.68214 6.85547 1.48773 6.43271 1.72292 6.15902Z" />
              </svg>
            </Link>

            <ul
              className={`${s.overlay} ${isOverlayOpen ? s.overlayOpen : ""}`}
              onClick={closeOverlayHandler} // Додано виклик closeOverlay при кліку
            >
              <li>
                <Link to="/services#project" onClick={closeOverlayHandler}>
                  Project Kick-Off
                </Link>
              </li>
              <li>
                <Link to="/services#discovery" onClick={closeOverlayHandler}>
                  Discovery
                </Link>
              </li>
              <li>
                <Link to="/services#UXUI" onClick={closeOverlayHandler}>
                  UX/UI
                </Link>
              </li>
              <li>
                <Link to="/services#web" onClick={closeOverlayHandler}>
                  Web & Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services#due" onClick={closeOverlayHandler}>
                  Due Diligence
                </Link>
              </li>
              <li>
                <Link to="/services#staff" onClick={closeOverlayHandler}>
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeOverlayHandler}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/workflow" onClick={closeOverlayHandler}>
              Workflow
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeOverlayHandler}>
              About
            </Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
};
