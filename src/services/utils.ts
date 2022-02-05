import { IGetUSer, IUser } from './types';
import { getUserAPI } from './dataAPI';

export const getToken = (): string => {
  const storedToken = localStorage.getItem('userData');
  let token = '';
  if (typeof storedToken === 'string') {
    const userData = JSON.parse(storedToken) as IGetUSer;
    token = userData.token as string;
  }
  return token;
};

export const checkUserAuthorization = async (): Promise<IUser | null> => {
  const storedToken = localStorage.getItem('userData');
  let user;
  if (typeof storedToken === 'string') {
    const userData = JSON.parse(storedToken) as IGetUSer;
    user = await getUserAPI(userData.userId);
  } else {
    user = null;
  }
  return user;
};
