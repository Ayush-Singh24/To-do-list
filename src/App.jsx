import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { Priority, Status } from "./utils/constants";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    if (!tasks) {
      setTasks([
        {
          id: nanoid(),
          text: inputValue,
          status: Status.Active,
          priority: Priority.NoPriority,
        },
      ]);
      setInputValue("");
      return;
    }
    const arr = [...tasks];
    arr.push({
      id: nanoid(),
      text: inputValue,
      status: Status.Active,
      priority: Priority.NoPriority,
    });
    setTasks(arr);
    setInputValue("");
  };

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks && !tasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

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

        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
