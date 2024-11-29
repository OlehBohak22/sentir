import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomaPage/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { useState, useEffect } from "react";
import { getToken } from "./services/api";
import { PortfilioPage } from "./pages/PortfilioPage/PortfilioPage";

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

      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
<<<<<<< HEAD
        <Route path="/about" element={<AboutPage token={token} />} />
=======
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfilioPage token={token} />} />
>>>>>>> 275df85c8ea82968f251fd4fe17aca2ad16f7707
      </Routes>

      <Footer />
    </>
  );
}
