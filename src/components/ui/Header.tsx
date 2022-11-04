import classes from "./Header.module.css";
import nightIcon from "./../../assets/images/icon-moon.svg";
import dayIcon from "./../../assets/images/icon-sun.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>todo</h1>
      <img
        className={classes.icon}
        src={nightIcon}
        alt="change night mode icon"
      />
    </header>
  );
};

export default Header;
