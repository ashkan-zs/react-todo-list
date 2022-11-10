import { useContext, useState } from "react";
import { TodoContext } from "../store/todo-context";

import classes from "./TodoFooter.module.css";

const TodoFooter: React.FC<{
  count: number;
  onFilterAll: () => void;
  onFilterActive: () => void;
  onFilterCompleted: () => void;
}> = (props) => {
  const todoCtx = useContext(TodoContext);

  const [activeFilter, setActiveFilter] = useState([true, false, false]);

  const filterAllHandler = () => {
    setActiveFilter([true, false, false]);
    props.onFilterAll();
  };

  const filterActiveHandler = () => {
    setActiveFilter([false, true, false]);
    props.onFilterActive();
  };

  const filterCompleteHandler = () => {
    setActiveFilter([false, false, true]);
    props.onFilterCompleted();
  };

  return (
    <li className={classes.todoFooter}>
      <span className={classes.todoFooter__status}>
        {props.count} {props.count > 1 ? "items" : "item"} left
      </span>
      <ul className={classes.todoFooter__filter}>
        <li>
          <button
            className={activeFilter[0] ? classes.active : ""}
            onClick={filterAllHandler}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeFilter[1] ? classes.active : ""}
            onClick={filterActiveHandler}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={activeFilter[2] ? classes.active : ""}
            onClick={filterCompleteHandler}
          >
            Completed
          </button>
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
