import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomaPage/HomePage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, useEffect } from "react";
import { getToken } from "./services/api";

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
      <SpeedInsights />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage token={token} />} />
        <Route path="/about" element={<AboutPage token={token} />} />
      </Routes>

      <Footer />
    </>
  );
}
