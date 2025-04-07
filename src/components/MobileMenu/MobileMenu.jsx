import { useState } from "react";
import { Layout } from "../Layout/Layout";
import s from "./MobileMenu.module.css";
import { Link, useNavigate } from "react-router-dom"; // Change here

export const MobileMenu = ({ className, closeOverlay }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate(); // Change here

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  const closeOverlayHandler = () => {
    closeOverlay(); // Викликаємо передану функцію для закриття меню
    setIsOverlayOpen(false); // Додатково можна закрити overlay
  };

  const handleServiceClick = (e) => {
    e.preventDefault(); // Скасовуємо стандартну поведінку лінка

    if (clickCount === 0) {
      setClickCount(1); // Перший клік: відкриваємо оверлей
      toggleOverlay(); // Відкриваємо оверлей
    } else {
      setClickCount(0); // Другий клік: переходимо на сторінку
      closeOverlayHandler(); // Закриваємо оверлей
      navigate("/services"); // Перехід на сторінку "/services" (заміна history.push на navigate)
    }
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
          <li
            className={`${s.backdrop} ${isOverlayOpen ? s.backdropOpen : ""}`}
          >
            <Link
              to="/services"
              onClick={handleServiceClick} // Замість стандартного onClick викликаємо handleServiceClick
            >
              <p
                style={{
                  background: isOverlayOpen
                    ? "radial-gradient(115.99% 115.99% at 0% 100%, #66D2FD 0%, #91DDFF 25%, #ED50B9 50%, #F8086E 75%, #FF5546 94.01%)"
                    : "none",
                  WebkitBackgroundClip: isOverlayOpen ? "text" : "initial",
                  WebkitTextFillColor: isOverlayOpen
                    ? "transparent"
                    : "#ffffff",
                }}
              >
                SERVICES
              </p>
              <svg
                style={{
                  transform: isOverlayOpen ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s ease",
                }}
                width="9"
                height="10"
                viewBox="0 0 9 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="svgGradient"
                    cx="0%"
                    cy="100%"
                    r="115.99%"
                    fx="0%"
                    fy="100%"
                  >
                    <stop offset="0%" stopColor="#66D2FD" />
                    <stop offset="25%" stopColor="#91DDFF" />
                    <stop offset="50%" stopColor="#ED50B9" />
                    <stop offset="75%" stopColor="#F8086E" />
                    <stop offset="94.01%" stopColor="#FF5546" />
                  </radialGradient>
                </defs>
                <path
                  d="M1.72292 6.15902L4.17999 3.29168C4.2196 3.24549 4.26872 3.20841 4.32401 3.18299C4.37929 3.15756 4.43942 3.1444 4.50026 3.1444C4.56111 3.1444 4.62124 3.15756 4.67652 3.18299C4.7318 3.20841 4.78093 3.24549 4.82054 3.29168L7.27761 6.15902C7.5121 6.43271 7.31769 6.85547 6.95733 6.85547H2.04249C1.68214 6.85547 1.48773 6.43271 1.72292 6.15902Z"
                  fill={isOverlayOpen ? "url(#svgGradient)" : "#ffffff"}
                />
              </svg>
            </Link>

            <ul
              className={`${s.overlay} ${isOverlayOpen ? s.overlayOpen : ""}`}
              onClick={closeOverlayHandler}
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
