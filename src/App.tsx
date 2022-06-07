import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { TodoModel } from "./model/model";
import TodoList from "./components/TodoList";

// App is arrow function of type React Functional component which returns JSX element.
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[] | []>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if any task is entered and set a task with Date as id and isCompleted as false. Add newly added task to array of tasks.
    // Clear the input box and set todo to empty string.
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} addTodo={addTodo}></InputFeild>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
