import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todosAtom, todosSelector } from "../atoms";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const todos = useRecoilValue(todosSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // Todo: as any 수정
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories["TODO"]}>TODO</option>
        <option value={Categories["IN PROGRESS"]}>IN PROGRESS</option>
        <option value={Categories["DONE"]}>DONE</option>
      </select>
      <TodoInput />
      <h2>{category}</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
