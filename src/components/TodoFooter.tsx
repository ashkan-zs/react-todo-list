import { useContext } from "react";
import { TodoContext } from "../store/todo-context";

import classes from "./TodoFooter.module.css";

export type FilterType = "ALL" | "ACTIVE" | "COMPLETED";

const filters: FilterType[] = ["ALL", "ACTIVE", "COMPLETED"];

const filterLabels: Record<FilterType, string> = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

const TodoFooter: React.FC<{
  count: number;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}> = ({ count, activeFilter, onFilterChange }) => {
  const todoCtx = useContext(TodoContext);

  return (
    <li className={classes.todoFooter}>
      <span className={classes.todoFooter__status}>
        {count} {count > 1 ? "items" : "item"} left
      </span>
      <ul className={classes.todoFooter__filter}>
        {filters.map((filter) => (
          <li key={filter}>
            <button
              className={activeFilter === filter ? classes.active : ""}
              onClick={() => onFilterChange(filter)}
            >
              {filterLabels[filter]}
            </button>
          </li>
        ))}
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
