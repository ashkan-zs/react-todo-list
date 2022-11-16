import { useContext, useState } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (todoText.trim() === "") return;
    todoCtx.addTodo(todoText);
    setTodoText("");
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.input}>
        <span className={classes.circle}></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={todoText}
          onChange={inputChangeHandler}
        />
      </div>
    </form>
  );
};

export default NewTodo;
