import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/todoList';
import TodoFilters from './TodoFilters';
import TodoInsert from './TodoInsert';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';

type Props = {};

const TodoList = (props: Props) => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoStats />
      <TodoFilters />
      <TodoInsert />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
