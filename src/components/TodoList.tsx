import { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";
import { TodoContext } from "../store/TodoContext";
import TodoFooter from "./TodoFooter";

const TodoList = () => {
  const todoItems = useContext(TodoContext).items;
  const [filteredItems, setFilteredItems] = useState(todoItems);

  useEffect(() => {
    setFilteredItems(todoItems);
  }, [todoItems]);

  const filterAllHandler = () => {
    setFilteredItems(todoItems);
  };

  const filterActiveHandler = () => {
    const filteredList = todoItems.filter((item) => !item.isCompleted);
    setFilteredItems(filteredList);
  };

  const filterCompletedHandler = () => {
    const filteredList = todoItems.filter((item) => item.isCompleted);
    setFilteredItems(filteredList);
  };

  return (
    <>
      {filteredItems.length > 0 && (
        <ul className={classes.todoList}>
          {filteredItems.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              id={item.id}
              isChecked={item.isCompleted}
            />
          ))}
          <TodoFooter
            count={filteredItems.length}
            onFilterAll={filterAllHandler}
            onFilterActive={filterActiveHandler}
            onFilterCompleted={filterCompletedHandler}
          />
        </ul>
      )}
    </>
  );
};

export default TodoList;
