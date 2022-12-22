import { atom, selector } from 'recoil';

import { getUser } from '../../../api/user';

export const userIdState = atom({
  key: 'userIdState',
  default: 1,
});

export const userQuery = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    const result = await getUser(get(userIdState));
    return result;
  },
});
