import { atom, selector } from "recoil";
import { todoListState } from "../atom/todoLIstState";

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
