export interface PlayerType {
  id: number;
  playerName: string;
}

export interface TeamType {
  id: number;
  teamName: string;
  players: PlayerType[];
}
