import { ISignUpUser, ILoginUser, IGetUSer, IUser, IWord } from './types';
import { getToken } from './utils';

const BASE_URL = 'https://react-rslang-project.herokuapp.com/';

export const getWordsAPI = async (group: number = 1, page: number = 1): Promise<Array<IWord>> => {
  const response = await fetch(`${BASE_URL}words?group=${group}&page=${page}`);

  return response.json();
};

export const userSignUpAPI = async (user: ISignUpUser): Promise<boolean> => {
  const res = await fetch(`${BASE_URL}users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.status === 200;
};

export const userLoginAPI = async (user: ILoginUser): Promise<IGetUSer | boolean> => {
  const res = await fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.status === 200 ? res.json() : false;
};

export const getUserAPI = async (userId: string): Promise<IUser | null> => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  return res.status === 200 ? res.json() : null;
};
