import "./App.css";
import AlertSuccess from "./components/Alerts/AlertSuccess";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/ToDoList/TodoList";

function App() {
  return (
    <>
      <Sidebar />
      <TodoList />
      <AlertSuccess />
    </>
  );
}

export default App;
