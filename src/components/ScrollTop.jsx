import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутка при перезавантаженні сторінки
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      setTimeout(() => {
        if (window.scrollY !== 0 || window.scrollX !== 0) {
          console.warn(
            "Fallback triggered: Adjusting scroll position to top again."
          );

          document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });

          document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });
        }
      }, 400);
    };

    scrollToTop();
  }, [pathname]);

  return null;
};
