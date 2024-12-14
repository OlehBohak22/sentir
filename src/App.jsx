import { Route, Routes } from "react-router-dom";
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
import { ScrollTop } from "./components/ScrollTop";

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    // Функція для отримання токена
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

  return (
    <>
      <Header />

      <ScrollTop />

      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/about" element={<AboutPage token={token} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfilioPage token={token} />} />
        <Route path="/workflow" element={<WorkflowPage token={token} />} />
        <Route path="/services" element={<ServicesPage token={token} />} />
        <Route path="/cases/:id" element={<CasePage token={token} />} />
      </Routes>

      <Footer token={token} />
    </>
  );
}
