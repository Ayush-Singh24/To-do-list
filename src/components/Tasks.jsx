import { Options, Priority, Status } from "../utils/constants";

export default function Tasks({
  tasks,
  setTasks,
  handleDelete,
  option,
  handleStatus,
}) {
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
          return option === Options.All ||
            (option === Options.High &&
              task.priority === Priority.High &&
              task.status === Status.Active) ||
            (option === Options.Medium &&
              task.priority === Priority.Medium &&
              task.status === Status.Active) ||
            (option === Options.Low &&
              task.priority === Priority.Low &&
              task.status === Status.Active) ||
            (option === Options.No &&
              task.priority === Priority.NoPriority &&
              task.status === Status.Active) ||
            (option === Options.Completed &&
              task.status === Status.Completed) ? (
            <div className="task" key={task.id}>
              <span className="task__text">{task.text}</span>
              <div className="task__priority">
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
                    return (
                      <option key={value} value={value} className={text}>
                        {text}
                      </option>
                    );
                  })}
                </select>
                <span className="task__priority-arrow">
                  <img
                    src="/assets/down-arrow.svg"
                    alt="no priority"
                    className="side-nav__img"
                  />
                </span>
              </div>
              <label htmlFor={`check-${task.id}`} className="task__checkbox">
                <img
                  src={
                    task.status === Status.Completed
                      ? "/assets/checked-icon.svg"
                      : "/assets/not-checked-icon.svg"
                  }
                  alt="checkbox"
                  className="task__checkbox-img"
                />
              </label>
              <input
                type="checkbox"
                name={`check-${task.id}`}
                id={`check-${task.id}`}
                checked={task.status === Status.Completed ? true : false}
                className="task__checkbox-input"
                onChange={(changeEvent) => handleStatus(changeEvent, task.id)}
              />
              <button
                className="task__delete"
                onClick={() => handleDelete(task.id)}
              >
                <img
                  src="/assets/delete-icon.svg"
                  alt="delete"
                  className="task__delete-img"
                />
              </button>
            </div>
          ) : (
            <></>
          );
        })}
    </main>
  );
}
