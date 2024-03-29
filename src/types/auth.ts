export interface LoginResponse {
  token: string;
  refreshToken: string;
  infoUser: InfoUser;
}

export interface InfoUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: null;
  isVerifyEmail: boolean;
  phone: string;
  emailVerifyCode: null;
  createdAt: Date;
  roles: Role[];
}

export interface Role {
  id: number;
  roleName: string;
}

export type LoginField = {
  email: string;
  password: string;
};

export interface IRegister {
  email: string,
  code: number;
  password: string;
  password2: string;
}
