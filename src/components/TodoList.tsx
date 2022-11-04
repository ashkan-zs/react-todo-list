import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <ul className={classes.todoList}>
      <TodoItem />
    </ul>
  );
};

export default TodoList;
