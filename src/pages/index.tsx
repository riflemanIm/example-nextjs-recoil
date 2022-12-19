import { TodoItemCreator } from "../components/todo/TodoItemCreator";
import { TodoList } from "../components/todo/TodoList";
import { TodoListFilters } from "../components/todo/TodoListFilters";
import { TodoStats } from "../components/todo/TodoStats";

export default function Home() {
  return (
    <>
      <TodoListFilters />
      <div>
        <TodoItemCreator />
        <TodoList />
      </div>

      <div>
        <TodoStats />
      </div>
    </>
  );
}
