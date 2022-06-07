import React from 'react';
import './styles.css';
import {TodoModel} from '../model/model'
import SingleTodo from './SingleTodo';

interface TodoListdProps {
    todos: TodoModel[] | [];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[] | []>>;
}

const TodoList: React.FC<TodoListdProps> = ({todos, setTodos}) =>  {
  return (
    <div className="todos">
      {todos.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
      ))}
    </div>
  )
}

export default TodoList
