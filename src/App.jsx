import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomaPage/HomePage";
import { Header } from "./components/Header/Header";
import { useEffect, useState } from "react";
import { getData, login } from "./services/api";

export default function App() {
  const [token, setToken] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Функція для отримання токена
    const fetchToken = async () => {
      try {
        const fetchedToken = await login(
          "admin_projection",
          "mkGp6Rpv5$On7BR&VU"
        );
        setToken(fetchedToken); // Зберігаємо токен у стані
        // console.log("Token:", fetchedToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []); // Цей useEffect спрацює один раз при завантаженні компонента

  useEffect(() => {
    // Якщо токен є, отримуємо пости
    const fetchPosts = async () => {
      if (!token) return; // Перевіряємо, чи є токен
      try {
        const fetchedPosts = await getData(token, "wp-json/wp/v2/posts"); // Отримуємо пости
        setPosts(fetchedPosts);
        // console.log("Posts:", fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]); // Цей useEffect спрацює тільки тоді, коли токен зміниться

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
