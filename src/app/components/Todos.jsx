import "../style.scss";
import React from "react";

const Todos = () => {
  return (
    <div className="todo-app">
      <header>
        <form>
          <input
            className="todo-input"
            type="text"
            placeholder="Enter a task"
            required
          />
          <input className="submit-todo" type="submit" value="Add task" />
        </form>
      </header>
    </div>
  );
};

export default Todos;
