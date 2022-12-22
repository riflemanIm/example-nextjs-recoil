import { userSelectors } from '../../store/user/userState';

export const UserInfo = () => {
  const userInfo = userSelectors.useUserQuery();

  return <>{JSON.stringify(userInfo)}</>;
};
