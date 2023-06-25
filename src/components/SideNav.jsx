import { Options } from "../utils/constants";

export default function SideNav({ changeOption, option }) {
  return (
    <nav className="side-nav">
      <div className={option === Options.All ? "active" : ""}>
        <img
          src="/assets/all-task-icon.svg"
          alt="all-task"
          className="side-nav__img"
        />
        <p className="side-nav__type" onClick={() => changeOption(Options.All)}>
          All tasks
        </p>
      </div>
      <div className={option === Options.High ? "active" : ""}>
        <img
          src="/assets/high-priority-icon.svg"
          alt="high priority"
          className="side-nav__img"
        />
        <p
          className="side-nav__type"
          onClick={() => changeOption(Options.High)}
        >
          High Priority
        </p>
      </div>
      <div className={option === Options.Medium ? "active" : ""}>
        <img
          src="/assets/medium-priority-icon.svg"
          alt="medium priority"
          className="side-nav__img"
        />
        <p
          className="side-nav__type"
          onClick={() => changeOption(Options.Medium)}
        >
          Medium Priority
        </p>
      </div>
      <div className={option === Options.Low ? "active" : ""}>
        <div>
          <img
            src="/assets/low-priority-icon.svg"
            alt="low priority"
            className="side-nav__img"
          />
        </div>
        <p className="side-nav__type" onClick={() => changeOption(Options.Low)}>
          Low Priority
        </p>
      </div>
      <div className={option === Options.No ? "active" : ""}>
        <div>
          <img
            src="/assets/no-priority-icon.svg"
            alt="no priority"
            className="side-nav__img"
          />
        </div>
        <p className="side-nav__type" onClick={() => changeOption(Options.No)}>
          No Priority
        </p>
      </div>
      <div className={option === Options.Completed ? "active" : ""}>
        <img
          src="/assets/completed-icon.svg"
          alt="completed"
          className="side-nav__img"
        />
        <p
          className="side-nav__type"
          onClick={() => changeOption(Options.Completed)}
        >
          Completed
        </p>
      </div>
    </nav>
  );
}
