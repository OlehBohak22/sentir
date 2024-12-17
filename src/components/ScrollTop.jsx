import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: 0 }); // Прокрутка до верху сторінки
  }, [pathname]);

  return null;
};
