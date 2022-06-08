import axios from 'axios';
import React from 'react';
import { selectorFamily, useRecoilValue } from 'recoil';

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const todoQuery = selectorFamily({
  key: 'todo',
  get: (userId: number) => async () => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/todos/${userId}`
    );
    return data;
  },
});

interface IUserTodoProps {
  userId: number;
}

function UserTodo({ userId }: IUserTodoProps) {
  const todo: Todo = useRecoilValue(todoQuery(userId));
  return <div>{todo.title}</div>;
}

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <UserTodo userId={1} />
      <UserTodo userId={2} />
      <UserTodo userId={3} />
    </React.Suspense>
  );
}

export default App;
