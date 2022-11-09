import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";
import Layout from "./components/ui/Layout";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <Layout>
        <TodoList />
      </Layout>
    </TodoContextProvider>
  );
}

export default App;
