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
          &times;
        </button>
        <h2 className={s.title}>
          <AnimatedHeading text="Drop us a line " />
        </h2>
        <MainForm />
      </div>
    </div>
  );
};
