import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";
import Layout from "./components/ui/Layout";
import TodoContextProvider from "./store/todo-context";

import classes from "./App.module.css";
import { useContext } from "react";
import { ThemeContext } from "./store/theme-context";

function App() {
  const theme = useContext(ThemeContext).theme;

  return (
    <TodoContextProvider>
      <main className={classes.main} data-theme={theme}>
        <Header />
        <Layout>
          <TodoList />
        </Layout>
      </main>
    </TodoContextProvider>
  );
}

export default App;
