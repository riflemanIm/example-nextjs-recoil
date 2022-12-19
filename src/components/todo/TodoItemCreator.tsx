import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "../../store/todo/atom/todoLIstState";

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
    </>
  );
};

let id = 0;

function getId() {
  return id++;
}
