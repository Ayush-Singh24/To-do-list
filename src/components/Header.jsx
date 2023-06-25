import { useEffect, useState } from "react";

export default function Header({ addTask, inputValue, setInputValue }) {
  return (
    <header className="header">
      <form className="add-task" onSubmit={addTask}>
        <input
          type="text"
          required
          className="add-task__input"
          placeholder="Add new task"
          value={inputValue}
          onChange={(changeEvent) => {
            setInputValue(changeEvent.target.value.trimStart());
          }}
        />
        <button type="submit" className="add-task__button">
          <img
            src="/assets/add-icon.svg"
            alt="add-icon"
            className="add-task__img"
          />
        </button>
      </form>
    </header>
  );
}
