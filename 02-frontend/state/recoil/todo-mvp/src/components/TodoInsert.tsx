import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../recoil/todoList';

function TodoInsert() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prevTodoList) => [...prevTodoList, { id: getId(), text: inputValue, isComplete: false }]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoInsert;
