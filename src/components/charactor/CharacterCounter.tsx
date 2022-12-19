import { useRecoilState } from "recoil";
import { textState } from "../../store/atoms/textState";
import { CharacterCount } from "./CharacterCount";

export const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <input value={text} onChange={onChange} />
      <br />
      Echo; {text}
    </>
  );
};
