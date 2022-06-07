import React, { useRef } from "react";
import "./styles.css";

// Define inerface for the props.
interface InputFeildProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<InputFeildProps> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          addTodo(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter a Task"
          className="inputBox"
        />
        <button className="inputSubmit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
