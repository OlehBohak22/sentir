import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();

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
      }, 700);
    };

    scrollToTop();
  }, [pathname]);

  return null;
};
