import { atom, selector } from "recoil";
import { Todo } from "../../../types/Todo";

export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [],
});
