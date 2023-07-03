import { Options } from "../utils/constants";

export default function SideNav({ changeOption, option, showNav, width }) {
  return (
    <nav
      className="side-nav"
      style={{
        transform: `${showNav ? "scaleY(1)" : "scaleY(0)"}`,
        backgroundColor: `${width > 901 ? "#000000b4" : "#000000d8"}`,
        opacity: `${showNav && "1"}`,
      }}
    >
      <div
        className={option === Options.All ? "active" : ""}
        onClick={() => changeOption(Options.All)}
      >
        <img
          src="/assets/all-task-icon.svg"
          alt="all-task"
          className="side-nav__img"
        />
        <p className="side-nav__type">All tasks</p>
      </div>
      <div
        className={option === Options.High ? "active" : ""}
        onClick={() => changeOption(Options.High)}
      >
        <img
          src="/assets/high-priority-icon.svg"
          alt="high priority"
          className="side-nav__img"
        />
        <p className="side-nav__type">High Priority</p>
      </div>
      <div
        className={option === Options.Medium ? "active" : ""}
        onClick={() => changeOption(Options.Medium)}
      >
        <img
          src="/assets/medium-priority-icon.svg"
          alt="medium priority"
          className="side-nav__img"
        />
        <p className="side-nav__type">Medium Priority</p>
      </div>
      <div
        className={option === Options.Low ? "active" : ""}
        onClick={() => changeOption(Options.Low)}
      >
        <div>
          <img
            src="/assets/low-priority-icon.svg"
            alt="low priority"
            className="side-nav__img"
          />
        </div>
        <p className="side-nav__type">Low Priority</p>
      </div>
      <div
        className={option === Options.No ? "active" : ""}
        onClick={() => changeOption(Options.No)}
      >
        <div>
          <img
            src="/assets/no-priority-icon.svg"
            alt="no priority"
            className="side-nav__img"
          />
        </div>
        <p className="side-nav__type">No Priority</p>
      </div>
      <div
        className={option === Options.Completed ? "active" : ""}
        onClick={() => changeOption(Options.Completed)}
      >
        <img
          src="/assets/completed-icon.svg"
          alt="completed"
          className="side-nav__img"
        />
        <p className="side-nav__type">Completed</p>
      </div>
    </nav>
  );
}
