import React, { PropsWithChildren, useEffect, useState } from "react";
import Todo from "../model/Todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
  toggleIsCompleted: (id: string, isCompleted: boolean) => void;
  clearCompleted: () => void;
};

export const TodoContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (id: string) => {},
  toggleIsCompleted: (id: string, isCompleted: boolean) => {},
  clearCompleted: () => {},
});

const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("todoLists");
    if (savedItems !== null) {
      setTodoItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    if (todoItems.length > 0) {
      localStorage.setItem("todoLists", JSON.stringify(todoItems));
    } else {
      localStorage.removeItem("todoLists");
    }
  }, [todoItems]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodoItems((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (id: string) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompleted = (id: string, isCompleted: boolean) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted } : todo,
      ),
    );
  };

  const clearCompletedHandler = () => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  const contextValue: TodoContextType = {
    items: todoItems,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleIsCompleted: toggleTodoCompleted,
    clearCompleted: clearCompletedHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
