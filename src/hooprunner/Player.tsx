import React from "react";
import { PlayerType } from "./types";
import { formatDate, inchesToFeet, birthdateToAge } from "../util/formatting";

interface Props {
  id: number;
  player: PlayerType;
  viewMode?: "list" | "detailed";
}

const Player: React.FC<Props> = ({ id, player, viewMode }) => {
  if (viewMode === "detailed") {
    return (
      <div className="player">
        {player.first_name} {player.last_name}
        <div className="player-details">
          <p>Height: {inchesToFeet(player.height) || "N/A"}</p>
          <p>Weight: {player.weight || "N/A"} lbs</p>
          <p>Age: {birthdateToAge(player.birthdate)}</p>
          <p>Comment: {player.comment || "N/A"}</p>
          <p>Position: {player.position.join(", ")}</p>
          <p>Shirt Size: {player.shirt_size || "N/A"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="player">
      {player.first_name} {player.last_name}
      <p>Height: {player.height || "N/A"}</p>
      <p>Weight: {player.weight || "N/A"}</p>
    </div>
  );
};

export default Player;
