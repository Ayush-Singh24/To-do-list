import { Priority } from "../utils/constants";

export default function Tasks({ tasks, setTasks }) {
  const priorities = [
    { value: Priority.NoPriority, text: "No Priority" },
    { value: Priority.High, text: "High" },
    { value: Priority.Medium, text: "Medium" },
    { value: Priority.Low, text: "Low" },
  ];

  return (
    <main className="task-container">
      {tasks &&
        tasks.map((task) => {
          return (
            <div className="task">
              <span className="task__text">{task.text}</span>
              <form className="task__priority">
                <label htmlFor="priority" className="task__priority-text">
                  Set Priority
                </label>
                <select
                  name="priority"
                  id="priority"
                  className="task__priority-dropdown"
                  value={task.priority}
                  onChange={(event) => {
                    const arr = [...tasks];
                    arr.find((currentObj) => {
                      return currentObj.id === task.id;
                    }).priority = event.target.value;
                    setTasks(arr);
                  }}
                >
                  {priorities.map(({ value, text }) => {
                    return <option value={value}>{text}</option>;
                  })}
                </select>
              </form>
            </div>
          );
        })}
    </main>
  );
}
