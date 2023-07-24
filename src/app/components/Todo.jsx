import React, { useState } from "react";
import { useTodoContext } from "../context/todo.context";

const Todo = ({ task }) => {
  const { updateTask, deleteTask } = useTodoContext();
  // isEdit state is used to track when a task is in edit mode
  const [isEdit, setIsEdit] = useState(false);

  return (
    <table className="todo-wrapper">
      <tbody>
        <tr>
          {isEdit ? (
            <input
              type="text"
              value={task.task}
              onChange={(e) => updateTask(task.id, e.target.value)}
            />
          ) : (
            <th className="task">{task.task}</th>
          )}

          <td className="actions">
            <button className="edit" onClick={() => setIsEdit(!isEdit)}>
              {isEdit ? "Save" : "Edit"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Del</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Todo;
