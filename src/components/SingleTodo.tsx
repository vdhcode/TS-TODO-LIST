import React, { useEffect, useRef, useState } from "react";
import { TodoModel } from "../model/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface SingleTodoProps {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<[] | TodoModel[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
  // Two useState hooks for editing.
  // 1. to check if the editing option is enabled
  // 2. to store value of edited todo
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
      inputRef.current?.focus();
  }, [edit]);

  const handleEditTask = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map(
        (todo) => (
            todo.id === id ? {...todo, todo: editTask} : todo
        )
    ));
    setEdit(false);
  }

  // Using filter option return only those elents of array whose id is not matching.
  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Using id of the task, update the isCompleted property of task to true or false.
  const handleCompletTask = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <form className="todosSingle" onSubmit={(e) => {handleEditTask(e, todo.id)}}>
      {edit ? (
        <input ref={inputRef} value={editTask} onChange={(e) =>setEditTask(e.target.value)}/>
      ) : // Before rendering check for completed task and strike out tasks.
      todo.isCompleted ? (
        // use stike tag to show completed tasks
        <s className="todosSingleCard">{todo.todo}</s>
      ) : (
        <span className="todosSingleCard">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            //   allow to edit only if edit mode is disabled and task is not completed
            if (!edit && !todo.isCompleted) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDeleteTask(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleCompletTask(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
