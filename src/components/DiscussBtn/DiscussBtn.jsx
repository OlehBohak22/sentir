import s from "./DiscussBtn.module.css";

export const DiscussBtn = ({ className, children }) => {
  return (
    <button className={`${s.discussBtn}  ${className || ""}`}>
      {children}
    </button>
  );
};
