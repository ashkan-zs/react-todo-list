import { useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("New todo added!: " + todoText);
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
