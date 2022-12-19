import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../store/todo/atom/todoListFilterState";
import { Filter } from "../../types/Todo";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  return (
    <>
      Filter:
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Done</option>
        <option value="Show Uncompleted">Not Done</option>
      </select>
    </>
  );
};
