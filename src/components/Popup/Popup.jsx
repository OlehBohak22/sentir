import s from "./Popup.module.css";
import { MainForm } from "../Form/MainForm";

export const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={s.popupOverlay} onClick={onClose}>
      <div className={s.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.popupClose} onClick={onClose}>
          &times;
        </button>
        <MainForm />
      </div>
    </div>
  );
};
