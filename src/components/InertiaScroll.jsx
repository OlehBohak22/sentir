import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const InertiaScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t) => t,
      smooth: true,
    });

    lenis.start(); // Ініціалізує скрол одразу

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
