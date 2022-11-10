import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";
import NewTodo from "../NewTodo";

import classes from "./Header.module.css";
import nightIcon from "./../../assets/images/icon-moon.svg";
import dayIcon from "./../../assets/images/icon-sun.svg";

const Header = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>todo</h1>
          <img
            className={classes.icon}
            src={themeCtx.theme === "light" ? nightIcon : dayIcon}
            alt="change night mode icon"
            onClick={themeCtx.toggleThemeMode}
          />
        </div>
        <NewTodo />
      </div>
    </header>
  );
};

export default Header;
