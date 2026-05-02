import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";
import { TodoContext } from "../store/todo-context";
import TodoFooter, { FilterType } from "./TodoFooter";

const TodoList: React.FC = () => {
  const todoItems = useContext(TodoContext).items;
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filteredItems = useMemo(() => {
    if (activeFilter === "ACTIVE") {
      return todoItems.filter((item) => !item.isCompleted);
    }

    if (activeFilter === "COMPLETED") {
      return todoItems.filter((item) => item.isCompleted);
    }

    return todoItems;
  }, [activeFilter, todoItems]);

  const activeCount = useMemo(
    () => todoItems.filter((item) => !item.isCompleted).length,
    [todoItems],
  );

  return (
    <ul className={classes.todoList}>
      {filteredItems.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          isChecked={item.isCompleted}
        />
      ))}
      {filteredItems.length === 0 && (
        <li className={classes.notfound}>
          <p>No items found.</p>
        </li>
      )}
      <TodoFooter
        count={activeCount}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    </ul>
  );
};

export default TodoList;
