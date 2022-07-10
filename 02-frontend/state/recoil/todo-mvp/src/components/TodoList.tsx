import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState from '../recoil/todoList';
import TodoInsert from './TodoInsert';
import TodoItem from './TodoItem';

type Props = {};

const TodoList = (props: Props) => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoInsert />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
