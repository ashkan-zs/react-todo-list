import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

import classes from "./TodoFooter.module.css";

const TodoFooter: React.FC<{
  count: number;
  onFilterAll: () => void;
  onFilterActive: () => void;
  onFilterCompleted: () => void;
}> = (props) => {
  const todoCtx = useContext(TodoContext);

  return (
    <li className={classes.todoFooter}>
      <span className={classes.todoFooter__status}>
        {props.count} {props.count > 1 ? "items" : "item"} left
      </span>
      <ul className={classes.todoFooter__filter}>
        <li>
          <button className={classes.active} onClick={props.onFilterAll}>
            All
          </button>
        </li>
        <li>
          <button onClick={props.onFilterActive}>Active</button>
        </li>
        <li>
          <button onClick={props.onFilterCompleted}>Completed</button>
        </li>
      </ul>
      <button
        className={classes.todoFooter__clear}
        onClick={todoCtx.clearCompleted}
      >
        Clear Completed
      </button>
    </li>
  );
};

export default TodoFooter;
