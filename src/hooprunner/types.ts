enum ShirtSize {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
  XXXXL = "XXXXL",
}

export interface PlayerType {
  id: number;
  first_name: string;
  last_name: string;
  height: number | null; // made optional with the `?` in Prisma
  weight: number | null; // made optional with the `?` in Prisma
  birthdate: string; // Date represented as a string for simplicity
  comment: string | null; // made optional with the `?` in Prisma
  pic: Uint8Array | null; // using Uint8Array for bytes, assuming it'll be a byte array.
  hidden: boolean | null; // made optional with the `?` in Prisma
  position: string[];
  shirt_size: ShirtSize | null; // made optional with the `?` in Prisma
}

export interface TeamType {
  id: number;
  team_name: string;
  short_name: string;
  captain_id: number;
  season_id: number;
  players: PlayerType[];
}

export interface StatsType {
  id: number;
  player_id: number;
  played: boolean;
  playerName: string;
  game_id: number;
  home: Boolean;
  twos_attempted: number;
  twos_made: number;
  minutes_played: number;
  threes_attempted: number;
  threes_made: number;
  fouls: number;
  assists: number;
  blocks: number;
  steals: number;
  freethrows_attempted: number;
  freethrows_made: number;
  offensive_rebounds: number;
  defensive_rebounds: number;
}

export interface GameType {
  id: number;
  game_time: string;
  team_home_id: number;
  team_away_id: number;
  season_id: number;
  home_score: number;
  away_score: number;
  location: string;
  home_team: TeamType;
  away_team: TeamType;
  homeStats: StatsType[];
  awayStats: StatsType[];
}

export interface SeasonType {
  id: number;
  start_date: string;
  games: GameType[];
  teams: TeamType[];
}
