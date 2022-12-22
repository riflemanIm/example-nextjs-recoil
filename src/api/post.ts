import axios from 'axios';

import { Post } from '../types/post';

export const url = process.env.NEXT_PUBLIC_API + 'posts/';

export const getPost = async (id: number) => {
  const result = await axios.get<Post>(url + String(id));
  return result.data;
};
