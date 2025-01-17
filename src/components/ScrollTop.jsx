import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // Спочатку встановимо скрол для document.documentElement
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      // Для перестраховки — також встановимо для document.body
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      // Перевіримо, чи відбувся скрол (на випадок, якщо горизонтальний контейнер має власний скрол)
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
      }, 300);
    };

    scrollToTop();
  }, [pathname]);

  return null;
};
