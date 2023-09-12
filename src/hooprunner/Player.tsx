import React from "react";

interface Props {
  id: number; // Add the id property
  playerName: string;
  players?: { playerName: string }[];
  viewMode?: "list" | "detailed";
}

const Player: React.FC<Props> = ({ playerName }) => (
  <div className="player">Player: {playerName}</div>
);

export default Player;
