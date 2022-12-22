import { useState } from 'react';

import { todoActions } from '../../store/todo/todoState';

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const addTodoList = todoActions.useAddTodoList();

  const addItem = () => {
    addTodoList(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
    </>
  );
};
