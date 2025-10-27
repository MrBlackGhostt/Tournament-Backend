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

export interface TournamentInterface {
  id: string;
  tournamentName?: string;
  noOfTeam?: number;
  noOfPlayerInTeam?: number;
  gameName?: string;
  // orgName?: string;
  // orgId?: string;
  // teams?: Team[];
}

export interface Team {
  id: string;
  user: Profile[];
}

export interface Profile {
  id: string;
  userId: string;
}
