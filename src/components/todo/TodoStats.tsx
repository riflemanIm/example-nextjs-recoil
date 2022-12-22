import { todoState } from '../../store/todo/todoState';

export const TodoStats = () => {
  const { total, completed, unCompleted, percentCompleted } =
    todoState.useTodoStats();

  return (
    <>
      <ul>
        <li>total: {total}</li>
        <li>completed: {completed}</li>
        <li>un completed: {unCompleted}</li>
        <li>Percent Completed: {percentCompleted}</li>
      </ul>
    </>
  );
};
