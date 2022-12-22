import { selector } from 'recoil';

import { getUser } from '../../../api/user';
import { User } from '../../../types/user';
import { currentUserId } from '../atom/currentUserId';

export const selectedUser = selector<User>({
  key: 'selectedUser',
  get: async ({ get }) => {
    const result = await getUser(get(currentUserId));
    return result;
  },
});
