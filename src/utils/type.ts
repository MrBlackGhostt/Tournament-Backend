export type User = {
  username: string;
  password: string;
  email: string;
};

export type generateTokenType = {
  data: object;
  secret: string;
  time: number;
};
