export default function Tasks({ tasks }) {
  const priorities = [
    { value: "", text: "No Priority" },
    { value: "high", text: "High" },
    { value: "medium", text: "Medium" },
    { value: "low", text: "Low" },
  ];

  return (
    <main className="task-container">
      {tasks.map((task) => {
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
