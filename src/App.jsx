import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomaPage/HomePage";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
