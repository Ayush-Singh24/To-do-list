import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { Options, Priority, Status } from "./utils/constants";
import { nanoid } from "nanoid";
import useWindowsDimensions from "./utils/useWindowsDimensions";

function App() {
  const [tasks, setTasks] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState(Options.All);
  const [showNav, setShowNav] = useState(false);
  const { width, height } = useWindowsDimensions();

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

  const handleDelete = (id) => {
    const arr = tasks.filter((task) => {
      return id !== task.id;
    });
    setTasks(arr);
  };

  const changeOption = (option) => {
    setOption(option);
    if (width < 901) {
      setShowNav(false);
    }
  };

  const handleStatus = (changeEvent, id) => {
    const arr = [...tasks];
    const task = arr.find((element) => {
      return id === element.id;
    });
    task.status = changeEvent.target.checked ? Status.Completed : Status.Active;
    setTasks(arr);
  };

  const handleNav = (event) => {
    setShowNav(event.target.checked);
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
    if (width < 901) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [width]);

  return (
    <div className="container">
      <Header
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        showNav={showNav}
        setShowNav={setShowNav}
        handleNav={handleNav}
      />
      <div className="content">
        <SideNav
          changeOption={changeOption}
          option={option}
          showNav={showNav}
          width={width}
        />

        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          handleDelete={handleDelete}
          option={option}
          handleStatus={handleStatus}
        />
      </div>
    </div>
  );
}

export default App;
