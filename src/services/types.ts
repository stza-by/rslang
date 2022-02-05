export interface ILoginUser {
  email: string;
  password: string;
}

export interface ISignUpUser extends ILoginUser {
  name: string;
}

export interface IGetUSer {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
