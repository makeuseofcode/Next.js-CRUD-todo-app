import React, { useState } from "react";
import { useTodoContext } from "../context/todo.context";

const Todo = ({ task }) => {
  const { updateTask, deleteTask } = useTodoContext();
  // isEdit state is used to track when a task is in edit mode
  const [isEdit, setIsEdit] = useState(false);

  return (
    <article className="todo-wrapper">
      {isEdit ? (
        <input
          type="text"
          value={task.task}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      ) : (
        <h4 className="task">{task.task}</h4>
      )}

      <div className="actions">
        <button className="edit" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Del</button>
      </div>
    </article>
  );
};

export default Todo;
