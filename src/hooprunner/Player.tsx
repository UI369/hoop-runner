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
    <div className="row">
      {player.first_name} {player.last_name}
      <span className="player_fgm cell">{player.height || "N/A"}</span>
      <span className="player_fga cell">{player.weight || "N/A"}</span>
      <span className="player_fg% cell">{player.weight || "N/A"}</span>
      <span className="player_3pm cell">{player.weight || "N/A"}</span>
      <span className="player_3pa cell">{player.weight || "N/A"}</span>
      <span className="player_3p% cell">{player.weight || "N/A"}</span>
      <span className="player_ftm cell">{player.weight || "N/A"}</span>
      <span className="player_fta cell">{player.weight || "N/A"}</span>
      <span className="player_ft% cell">{player.weight || "N/A"}</span>
      <span className="player_oreb cell">{player.weight || "N/A"}</span>
      <span className="player_dreb cell">{player.weight || "N/A"}</span>
      <span className="player_reb cell">{player.weight || "N/A"}</span>
      <span className="player_ast cell">{player.weight || "N/A"}</span>
      <span className="player_stl cell">{player.weight || "N/A"}</span>
      <span className="player_blk cell">{player.weight || "N/A"}</span>
      <span className="player_pf cell">{player.weight || "N/A"}</span>
      <span className="player_pts cell">{player.weight || "N/A"}</span>
    </div>
  );
};

export default Player;
