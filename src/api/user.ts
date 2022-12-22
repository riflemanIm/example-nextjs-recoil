import axios from 'axios';

import { User } from '../types/user';
export const url = process.env.NEXT_PUBLIC_API + 'users/';

export const getUser = async (id: number) => {
  const result = await axios.get<User>(url + String(id));
  return result.data;
};
