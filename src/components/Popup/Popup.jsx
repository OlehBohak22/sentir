import { useState, useEffect } from "react";
import s from "./Popup.module.css";
import { MainForm } from "../Form/MainForm";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import Lenis from "@studio-freight/lenis"; // Імпортуємо Lenis, якщо не імпортовано

export const Popup = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Логіка для вимкнення скролу з Lenis
  useEffect(() => {
    const lenis = new Lenis();
    lenis.stop(); // Вимикаємо скрол під час відкриття попапу
    document.body.style.overflow = "hidden";

    // Включаємо скрол після закриття попапу
    return () => {
      lenis.start(); // Повертаємо скрол, коли попап закривається
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Викликаємо onClose після завершення анімації
    }, 500); // Затримка відповідає тривалості анімації закриття (500ms)
  };

  return (
    <div
      className={`${s.popupOverlay} ${isClosing ? s.hide : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${s.popupContent} ${isClosing ? s.hide : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.popupClose} onClick={handleClose}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6499 9.01417L17.6646 1.99936C18.1211 1.54307 18.1211 0.805292 17.6646 0.349055C17.2083 -0.107237 16.4706 -0.107237 16.0143 0.349055L8.99946 7.3638L1.98488 0.349055C1.52837 -0.107237 0.790862 -0.107237 0.33457 0.349055C-0.12194 0.805347 -0.12194 1.54307 0.33457 1.99936L7.3491 9.01417L0.334625 16.0289C-0.121885 16.4852 -0.121885 17.223 0.334625 17.6792C0.44286 17.7878 0.571475 17.8739 0.713082 17.9325C0.854689 17.9912 1.0065 18.0213 1.15978 18.0212C1.4585 18.0212 1.75734 17.9068 1.98494 17.6792L8.99946 10.6645L16.0143 17.6792C16.1226 17.7878 16.2512 17.8738 16.3928 17.9325C16.5344 17.9912 16.6862 18.0213 16.8395 18.0212C17.1382 18.0212 17.437 17.9068 17.6646 17.6792C18.1211 17.2229 18.1211 16.4852 17.6646 16.0289L10.6499 9.01417Z"
              fill="white"
            />
          </svg>
        </button>
        <h2 className={s.title}>
          <AnimatedHeading text="Drop us a line " />
        </h2>
        <MainForm closePopup={handleClose} />
      </div>
    </div>
  );
};
