import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Перша прокрутка
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

    // Друга прокрутка з невеликою затримкою
    setTimeout(() => {
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
    }, 50); // Затримка 50 мс, можна налаштувати
  }, [pathname]);

  return null;
};
