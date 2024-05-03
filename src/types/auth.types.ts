export type UserType = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
};

export type AuthStateType = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  login: (user: UserType) => void;
};
