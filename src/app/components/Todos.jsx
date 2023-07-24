import { useTodoContext } from "../context/todo.context";
import "../style.scss";
import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const { task, tasks, handleTodoInput, createTask } = useTodoContext();

  return (
    <div className="todo-app">
      <header>
        <form onSubmit={(e) => createTask(e)}>
          <input
            className="todo-input"
            type="text"
            placeholder="Enter a task"
            required
            value={task}
            onChange={(e) => handleTodoInput(e.target.value)}
          />
          <input className="submit-todo" type="submit" value="Add task" />
        </form>
      </header>

      {tasks && (
        <main>
          {tasks.map((task, i) => (
            <Todo key={i} task={task} />
          ))}
        </main>
      )}
    </div>
  );
};

export default Todos;
