import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { todoListState } from '../../store/todo/atom/todoLIstState';
import { Todo } from '../../types/todo';

type Props = {
  item: Todo;
};

export const TodoItem = (props: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newItem = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: e.target.value,
    });
    setTodoList(newItem);
  };

  const toggleItemCompleted = () => {
    const newItem = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });
    setTodoList(newItem);
  };

  const deleteItem = () => {
    const newItem = deleteItemAtIndex(todoList, index);
    setTodoList(newItem);
  };

  return (
    <>
      <div>
        <input value={props.item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={props.item.isComplete}
          onChange={toggleItemCompleted}
        />
        <button onClick={deleteItem}>delete item</button>
      </div>
    </>
  );
};

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function deleteItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
