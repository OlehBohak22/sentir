import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const InertiaScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Зменшено тривалість для швидшої реакції
      easing: (t) => t, // Лінійне прискорення для миттєвої реакції
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
};
