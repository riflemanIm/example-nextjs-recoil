import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil';

import { getUser } from '../../api/user';
import { User } from '../../types/user';
import { RecoilKeys, RecoilSelector } from '../recoilKeys';

const user = atom({
  key: RecoilKeys.SELECTED_USER_STATE,
  default: 1,
});

const userQuery = selector({
  key: RecoilSelector.USER_SELECTED_USER,
  get: async ({ get }) => {
    const result = await getUser(get(user));
    return result;
  },
});

// Action
type UserActions = {
  useSetUserId: () => (id: number) => void;
};

export const userActions: UserActions = {
  useSetUserId: () =>
    useRecoilCallback(
      ({ set }) =>
        (id: number) => {
          set(user, id);
        },
      [user]
    ),
};

// Selector
type UserSelectors = {
  useUserQuery: () => User;
};

export const userSelectors: UserSelectors = {
  useUserQuery: () => useRecoilValue(userQuery),
};
