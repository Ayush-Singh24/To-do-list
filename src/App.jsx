import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    const arr = [...tasks];
    arr.push({ text: inputValue, status: "active" });
    setTasks(arr);
  };

  useEffect(() => {
    console.log(inputValue);
    console.log(tasks);
  }, [inputValue, tasks]);

  return (
    <div className="container">
      <Header
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="content">
        <SideNav />

        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
