import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // Хук для відстеження зміни розміру екрану
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Оновлення значення при зміні ширини екрана
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      console.log("Lenis is not initialized on mobile");
      setReady(true); // Ставимо ready в true, щоб не блокувати рендер
      return; // Вимкнути Lenis на мобільних пристроях
    }

    console.log("Initializing Lenis on desktop...");

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    setReady(true);
    console.log("Lenis initialized!");

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        console.log("Lenis destroyed");
      }
    };
  }, [isDesktop]); // Слідкуємо за зміною ширини екрана

  // Якщо Lenis не ініціалізовано або ще не готово, не рендеримо дочірні компоненти
  if (!ready) {
    console.log("Lenis is not ready yet...");
    return null; // або можна повернути <div>Loading...</div> для кращого досвіду
  }

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
