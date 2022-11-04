import classes from "./Header.module.css";
import nightIcon from "./../../assets/images/icon-moon.svg";
import dayIcon from "./../../assets/images/icon-sun.svg";
import NewTodo from "../NewTodo";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>todo</h1>
          <img
            className={classes.icon}
            src={nightIcon}
            alt="change night mode icon"
          />
        </div>
        <NewTodo />
      </div>
    </header>
  );
};

export default Header;
