import { useRecoilValue } from "recoil";
import {
  filteredTodoListState,
  todoListFilterState,
  todoListState,
} from "../../atoms/todoListState";
import { TodoItem } from "./TodoItem";

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
