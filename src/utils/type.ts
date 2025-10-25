export interface User {
  username: string;
  password: string;
  email: string;
}

export interface generateTokenType {
  data: object;
  secret: string;
  time: number;
}

export interface SearchParams {
  tournamentName?: string;
  gameName?: string;
  orgName?: string;
  orgId?: string;
  page: number;
  limit: number;
}
