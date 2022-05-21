import { useRecoilValue } from 'recoil';
import { todosAtom } from '../atoms';
import Todo from './Todo';
import TodoInput from './TodoInput';

const TodoList = () => {
  const todos = useRecoilValue(todosAtom);

  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <TodoInput />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
