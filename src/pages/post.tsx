import { Post } from '../components/post/Post';

const PostPage = () => {
  const id = 1;

  return (
    <>
      <Post postId={id} />
    </>
  );
};

export default PostPage;
