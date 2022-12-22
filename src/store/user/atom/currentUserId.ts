import { atom } from 'recoil';

export const currentUserId = atom<number>({
  key: 'currentUserId',
  default: 1,
});
