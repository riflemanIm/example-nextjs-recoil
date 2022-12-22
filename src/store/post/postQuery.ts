import { selectorFamily } from 'recoil';

import { getPost } from '../../api/post';

export const postQuery = selectorFamily({
  key: 'PostQuery',
  get: (postId: number) => async () => {
    const result = await getPost(postId);
    return result;
  },
});
