import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручуємо вгору при зміні маршруту
    const scrollToTop = () => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // Можна змінити на "smooth" для анімації
      });

      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // Можна змінити на "smooth" для анімації
      });
    };

    // Викликаємо прокрутку на зміну маршруту
    scrollToTop();

    // Можна також додати затримку, якщо прокручування не працює гладко:
    // setTimeout(scrollToTop, 50); // Затримка 50 мс, за потребою можна налаштувати
  }, [pathname]);

  return null; // Цей компонент не рендерить нічого
};
