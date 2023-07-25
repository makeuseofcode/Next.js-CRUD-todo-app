// "use client";

import { createContext, useContext, useState } from "react";

// create context
const TodoContext = createContext();

// export context
export const useTodoContext = () => useContext(TodoContext);

// create provider and manage states
const TodoContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTodoInput = (input) => setTask(input);

  const createTask = (e) => {
    e.preventDefault();
    setTasks([
      {
        id: Math.trunc(Math.random() * 1000 + 1),
        task,
      },
      ...tasks,
    ]);
    setTask("");
  };

  const updateTask = (id, updateText) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, task: updateText } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  console.log(tasks);
  return (
    <TodoContext.Provider
      value={{
        task,
        tasks,
        handleTodoInput,
        createTask,
        updateTask,
        deleteTask,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
