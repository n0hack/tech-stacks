import { useRecoilValue } from "recoil";
import { todosAtom, todosSelector } from "../atoms";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const todos = useRecoilValue(todosAtom);
  const [todo, doing, done] = useRecoilValue(todosSelector);

  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <TodoInput />
      <hr />
      <h2>Todo</h2>
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default TodoList;
