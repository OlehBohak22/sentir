import { PageWrapper } from "./components/PageWrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomePage } from "./pages/HomaPage/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { useState, useEffect } from "react";
import { getToken } from "./services/api";
import { PortfilioPage } from "./pages/PortfilioPage/PortfilioPage";
import { WorkflowPage } from "./pages/WorkflowPage/WorkflowPage";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage";
import { CasePage } from "./pages/CasePage/CasePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { ScrollTop } from "./components/ScrollTop";
import "./App.css";
import { PolicyPage } from "./pages/PolicyPage/PolicyPage";
// import { InertiaScroll } from "./components/InertiaScroll";
import Lenis from "@studio-freight/lenis";
import { Popup } from "./components/Popup/Popup";

export default function App() {
  const [token, setToken] = useState();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const location = useLocation();

  // Додавання кастомного курсору
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const updateCursorPosition = (e) => {
      window.requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      // Перевірка, чи існує target і чи має він клас "case"
      if (e.target && e.target.classList) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "INPUT" ||
          e.target.tagName === "LABEL" ||
          e.target.classList.contains("case")
        ) {
          document.body.classList.add("cursor-hover");

          if (e.target.classList.contains("case")) {
            document.body.classList.add("cursor-case");
          }
        }
      }
    };

    const handleMouseLeave = (e) => {
      // Перевірка, чи існує target і чи має він клас "case"
      if (e.target && e.target.classList) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "LABEL" ||
          e.target.tagName === "INPUT"
        ) {
          document.body.classList.remove("cursor-hover");
        }

        if (e.target.classList.contains("case")) {
          document.body.classList.remove("cursor-case");
        }
      }
    };

    // Додаємо події на весь документ для лінків і елементів з класом "case"
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.remove("cursor-case");
    }, 1000); // Затримка у 300 мс (можна змінити за потреби)

    return () => clearTimeout(timeout); // Очищення таймера при розмонтуванні або зміні маршруту
  }, [location]);

  // Отримання токена
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const fetchedToken = await getToken(
          "admin_projection",
          "mkGp6Rpv5$On7BR&VU"
        );
        setToken(fetchedToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    // Ініціалізація Lenis
    const lenis = new Lenis();

    // Функція raf для постійного оновлення скролу
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Початкова анімація
    requestAnimationFrame(raf);

    // Перевіряємо, чи відкрито попап, і виконуємо необхідні дії
    if (isPopupOpen) {
      lenis.stop(); // Зупиняємо скрол при відкритому попапі
      document.body.style.overflow = "hidden"; // Блокуємо стандартний скрол
    } else {
      lenis.start(); // Відновлюємо скрол після закриття попапу
      document.body.style.overflow = ""; // Відновлюємо стандартний скрол
    }

    // Очистка після розмонтування або зміни isPopupOpen
    return () => {
      document.body.style.overflow = ""; // Скидаємо overflow на default при розмонтуванні
      lenis.destroy(); // Очищаємо ресурси Lenis
    };
  }, [isPopupOpen]); // useEffect буде викликатись при зміні isPopupOpen

  return (
    <>
      <div className="cursor"></div>
      <Header />

      {isPopupOpen && <Popup onClose={closePopup} />}

      <ScrollTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage token={token} openPopup={openPopup} />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutPage token={token} openPopup={openPopup} />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <PortfilioPage token={token} />
              </PageWrapper>
            }
          />
          <Route
            path="/workflow"
            element={
              <PageWrapper>
                <WorkflowPage token={token} openPopup={openPopup} />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <ServicesPage token={token} openPopup={openPopup} />
              </PageWrapper>
            }
          />
          <Route
            path="/cases/:slug"
            element={
              <PageWrapper>
                <CasePage token={token} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage token={token} />
              </PageWrapper>
            }
          />

          <Route
            path="/policy-page"
            element={
              <PageWrapper>
                <PolicyPage token={token} />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer token={token} />
      {/* </InertiaScroll> */}
    </>
  );
}
