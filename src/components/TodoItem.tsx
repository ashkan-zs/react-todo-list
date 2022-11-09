import classes from "./TodoItem.module.css";
import deleteIcon from "./../assets/images/icon-cross.svg";
import checkIcon from "./../assets/images/icon-check.svg";
import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const TodoItem: React.FC<{ text: string; id: string; isChecked: boolean }> = (
  props
) => {
  const todoCtx = useContext(TodoContext);

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    todoCtx.toggleIsCompleted(props.id, event.target.checked);
  };

  return (
    <li className={classes.todoItem}>
      <input
        className={classes.checkbox}
        id={`ck-${props.id}`}
        type="checkbox"
        defaultChecked={props.isChecked}
        onChange={checkboxChangeHandler}
      />
      <label htmlFor={`ck-${props.id}`} className={classes.taskCheckbox}>
        <span className={classes.customCheckbox}>
          <img
            className={classes.checkboxIcon}
            src={checkIcon}
            alt="check icon"
          />
        </span>
        <p className={classes.todoText}>{props.text}</p>
      </label>
      <img
        className={classes.deleteIcon}
        src={deleteIcon}
        alt="delete icon"
        onClick={todoCtx.removeTodo.bind(null, props.id)}
      />
    </li>
  );
};

export default TodoItem;
