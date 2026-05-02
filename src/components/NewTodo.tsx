import { useContext, useState } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTodoText = todoText.trim();

    if (!trimmedTodoText) return;

    todoCtx.addTodo(trimmedTodoText);
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
          aria-label="New Todo"
          placeholder="Create a new todo..."
          value={todoText}
          maxLength={120}
          onChange={inputChangeHandler}
        />
      </div>
    </form>
  );
};

export default NewTodo;
