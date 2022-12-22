import { Suspense } from 'react';

import { Post } from '../components/post/Post';

const PostPage = () => {
  const id = 1;

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Post postId={id} />
      </Suspense>
    </>
  );
};

export default PostPage;
