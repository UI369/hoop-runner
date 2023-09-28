import React from "react";
import { PlayerType } from "./types";

interface Props {
  id: number; // Add the id property
  player: PlayerType;
  viewMode?: "list" | "detailed";
}

const Player: React.FC<Props> = ({ id, player, viewMode }) => (
  <div className="player">
    {player.first_name} {player.last_name}
    Height: {player.height}
    Weight: {player.weight}
  </div>
);

export default Player;
