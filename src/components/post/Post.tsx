import { useRecoilValue } from 'recoil';

import { postQuery } from '../../store/post/postQuery';

type Props = {
  postId: number;
};

export const Post = (props: Props) => {
  const post = useRecoilValue(postQuery(props.postId));
  return (
    <>
      <p>Post Data(ID: {props.postId})</p>
      {JSON.stringify(post)}
    </>
  );
};
