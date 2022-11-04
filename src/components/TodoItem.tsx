import classes from "./TodoItem.module.css";
import closeIcon from "./../assets/images/icon-cross.svg";
import checkIcon from "./../assets/images/icon-check.svg";

const TodoItem = () => {
  return (
    <li className={classes.todoItem}>
      <input className={classes.checkbox} id="checkbox" type="checkbox" />
      <label htmlFor="checkbox" className={classes.taskCheckbox}>
        <span className={classes.customCheckbox}>
          <img
            className={classes.checkboxIcon}
            src={checkIcon}
            alt="check icon"
          />
        </span>
        <p className={classes.todoText}>practice react</p>
      </label>
      <img className={classes.icon} src={closeIcon} alt="close icon" />
    </li>
  );
};

export default TodoItem;
