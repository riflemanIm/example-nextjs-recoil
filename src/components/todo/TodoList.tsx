import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../../store/todo/selector/filteredTodoListState';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};
