import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todosAtom } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todosAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, category: name as ITodo["category"] } : todo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          Todo
        </button>
      )}
      {category !== "IN PROGRESS" && (
        <button name="IN PROGRESS" onClick={onClick}>
          In progress
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
