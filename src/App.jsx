import { Route, Routes, useLocation } from "react-router-dom"; // Додаємо useLocation для моніторингу зміни маршруту
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

export default function App() {
  const [token, setToken] = useState();
  const location = useLocation(); // Хук для отримання поточного шляху

  // Обробка руху миші та позиціювання кастомного курсора
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

  // Додавання токену
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

  // Делегування подій для лінків і елементів з класом "case"
  useEffect(() => {
    const handleMouseEnter = (e) => {
      // Перевірка, чи існує target і чи має він клас "case"
      if (e.target && e.target.classList) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
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
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
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

  // Очищення класу cursor-case при зміні маршруту
  useEffect(() => {
    document.body.classList.remove("cursor-case");
  }, [location]);

  return (
    <>
      <div className="cursor"></div>

      <Header />

      <ScrollTop />

      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/about" element={<AboutPage token={token} />} />
        <Route path="/portfolio" element={<PortfilioPage token={token} />} />
        <Route path="/workflow" element={<WorkflowPage token={token} />} />
        <Route path="/services" element={<ServicesPage token={token} />} />
        <Route path="/cases/:id" element={<CasePage token={token} />} />
        <Route path="/contact" element={<ContactPage token={token} />} />
      </Routes>

      <Footer token={token} />
    </>
  );
}
