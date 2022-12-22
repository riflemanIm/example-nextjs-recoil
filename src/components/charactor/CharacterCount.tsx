import { useRecoilValue } from 'recoil';

import { charCountState } from '../../store/charCounter/selector/charCountState';

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <div>Character Count: {count}</div>;
};
