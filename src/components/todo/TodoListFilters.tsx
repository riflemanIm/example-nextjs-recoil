import { FormEvent } from 'react';

import { todoActions, todoState } from '../../store/todo/todoState';
import { Filter } from '../../types/Todo';

export const TodoListFilters = () => {
  const filter = todoState.useTodoFilter();
  const setFilter = todoActions.useSetFilter();
  const handelerFilter = (event: FormEvent<HTMLFormElement>) => {
    setFilter(event.currentTarget.value as Filter);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={handelerFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Done</option>
        <option value="Show Uncompleted">Not Done</option>
      </select>
    </>
  );
};
