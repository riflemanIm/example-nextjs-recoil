import { atom, selector } from "recoil";
import { Filter, Todo } from "../types/Todo";

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<Filter>({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoStats = selector({
  key: "TodoStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completed = todoList.filter((item) => item.isComplete).length;
    const unCompleted = todoList.filter((item) => !item.isComplete).length;
    const percentCompleted = total === 0 ? 0 : completed / total;

    return {
      total,
      completed,
      unCompleted,
      percentCompleted,
    };
  },
});
