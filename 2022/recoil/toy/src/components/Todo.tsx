import React from 'react';
import { ITodo } from '../atoms';

const Todo = ({ text }: ITodo) => {
  return <li>{text}</li>;
};

export default Todo;
