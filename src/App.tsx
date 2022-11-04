import TodoList from "./components/TodoList";
import Header from "./components/ui/Header";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <TodoList />
      </Layout>
    </>
  );
}

export default App;
