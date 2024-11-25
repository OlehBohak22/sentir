import s from "./Layout.module.css";
import clsx from "clsx";

export const Layout = ({ children, className }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};
