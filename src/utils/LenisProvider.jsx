import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
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

    return () => lenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {ready && children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
