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
import "./App.css";
import { PolicyPage } from "./pages/PolicyPage/PolicyPage";
import { Popup } from "./components/Popup/Popup";
import { ThanksPage } from "./pages/ThanksPage/ThanksPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ToastContainer } from "react-toastify";
import { getData } from "./services/api";
import { Loader } from "./components/Loader/Loader";
import { LenisProvider } from "./utils/LenisProvider";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [token, setToken] = useState();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false); // для анімації
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  const location = useLocation();

  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFadeOutLoader(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2500);
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/contact-info");
        setContactInfo(data);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    fetchCompanies();
  }, [token]);

  useEffect(() => {
    setShowFooter(false);

    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

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

  // useEffect(() => {
  //   const isDesktop = window.innerWidth > 1024;

  //   if (!isDesktop) return;

  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   setLenis(lenis);

  //   if (isPopupOpen) {
  //     lenis.stop();
  //   } else {
  //     lenis.start();
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //     lenis.destroy();
  //   };
  // }, [isPopupOpen]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1); // можна змінити на 200-300 при потребі
    }
  }, [location.pathname]);

  return (
    <>
      <ToastContainer />

      {loading && (
        <div
          className={`fixed inset-0 z-[9999999999999999999] transition-opacity duration-1000 bg-white ${
            fadeOutLoader ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loader fadeOutLoader={fadeOutLoader} />
        </div>
      )}

      <div className="cursor"></div>
      <LenisProvider>
        <Header />

        {isPopupOpen && (
          <Popup onClose={closePopup} contactInfo={contactInfo} />
        )}

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
                  <ContactPage contactInfo={contactInfo} />
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

            <Route
              path="/thanks-page"
              element={
                <PageWrapper>
                  <ThanksPage />
                </PageWrapper>
              }
            />

            <Route
              path="*"
              element={
                <PageWrapper>
                  <ErrorPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>

        <div className="footer">
          {showFooter && <Footer contactInfo={contactInfo} />}
        </div>
      </LenisProvider>
    </>
  );
}
