import { atom } from "recoil";
import { Filter } from "../../../types/Todo";

export const todoListFilterState = atom<Filter>({
  key: "TodoListFilter",
  default: "Show All",
});
