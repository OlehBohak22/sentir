import s from "./Layout.module.css";

export const Layout = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
