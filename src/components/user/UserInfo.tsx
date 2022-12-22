import { useRecoilValue } from 'recoil';

import { userQuery } from '../../store/user/selector/userQuery';

export const UserInfo = () => {
  const userInfo = useRecoilValue(userQuery);

  return <>{JSON.stringify(userInfo)}</>;
};
