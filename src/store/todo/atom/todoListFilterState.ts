import { atom } from 'recoil';

import { Filter } from '../../../types/todo';

export const todoListFilterState = atom<Filter>({
  key: 'TodoListFilter',
  default: 'Show All',
});
