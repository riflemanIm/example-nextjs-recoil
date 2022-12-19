import { useRecoilValue } from "recoil";
import { todoStats } from "../../store/todo/selector/todoStats";

export const TodoStats = () => {
  const { total, completed, unCompleted, percentCompleted } =
    useRecoilValue(todoStats);
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
