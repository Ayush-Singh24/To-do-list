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
            setInputValue(changeEvent.target.value);
          }}
        />
        <button type="submit" className="add-task__button">
          Add
        </button>
      </form>
    </header>
  );
}
