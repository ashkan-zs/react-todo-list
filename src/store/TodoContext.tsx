import React, { PropsWithChildren, useState } from "react";
import Todo from "../model/Todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
  toggleIsCompleted: (id: string, isChecked: boolean) => void;
  clearCompleted: () => void;
};

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
  toggleIsCompleted: (id: string, isChecked: boolean) => {},
  clearCompleted: () => {},
});

const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoItems((prevState) => prevState.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodoItems((prevState) => {
      const newTodoItems = prevState.filter((item) => item.id !== id);
      return newTodoItems;
    });
  };

  const isCompletedChangeHandler = (id: string, isChecked: boolean) => {
    setTodoItems((prevState) => {
      const indexOfItem = prevState.findIndex((item) => item.id === id);
      const newItems = prevState;
      newItems[indexOfItem].isCompleted = isChecked;
      return newItems;
    });
  };

  const clearCompletedHandler = () => {
    setTodoItems((prevState) => {
      const newTodoList = prevState.filter((item) => !item.isCompleted);
      return newTodoList;
    });
  };

  const contextValue: TodoContextType = {
    items: todoItems,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleIsCompleted: isCompletedChangeHandler,
    clearCompleted: clearCompletedHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
