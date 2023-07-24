"use client";

import Todos from "./components/Todos";
import TodoContextProvider from "./context/todo.context";

export default function Home() {
  return (
    <TodoContextProvider>
      <Todos />
    </TodoContextProvider>
  );
}
