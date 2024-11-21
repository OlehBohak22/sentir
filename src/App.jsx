import { useEffect, useState } from "react";
import { getData, login } from "./services/api";
import s from "./App.module.css";

export default function App() {
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleFetchPosts = async () => {
    try {
      const data = await getData(token, "wp-json/wp/v2/services");
      setPosts(data);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await login("admin_projection", "mkGp6Rpv5$On7BR&VU");
        setToken(token);
      } catch (error) {
        console.error("Failed to fetch token:", error);
      }
    };

    fetchToken();
  }, []);

  if (!token) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Token: {token}</p>
      <button onClick={handleFetchPosts}></button>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{post.service_description}</p>
          <img className={s.icon} src={post.service_icon} alt="" />
        </div>
      ))}
    </>
  );
}
