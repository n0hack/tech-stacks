import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todosAtom } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todosAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === id ? { ...todo, category: name as Categories } : todo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories["TODO"] && (
        <button name={Categories["TODO"]} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== Categories["IN PROGRESS"] && (
        <button name={Categories["IN PROGRESS"]} onClick={onClick}>
          In progress
        </button>
      )}
      {category !== Categories["DONE"] && (
        <button name={Categories["DONE"]} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
