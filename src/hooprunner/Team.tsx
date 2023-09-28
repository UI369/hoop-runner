import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import PlayerComponent from "./Player";
import { TeamType } from "./types";

interface Props {
  id: number; // Add the id property
  team: TeamType;
  viewMode?: "list" | "detailed";
}

const Team: React.FC<Props> = ({ id, team, viewMode }) => {
  console.log("Team team:", team);
  if (viewMode === "list") {
    return (
      <div style={{ border: "1px solid black" }}>
        <span>{team.team_name}</span>
        <Link to={`/teams/${id}`}>{team.team_name}</Link>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <span>{team.team_name}</span>
      {team.players?.map((player) => (
        <PlayerComponent
          key={player.id}
          id={player.id}
          player={player}
          viewMode="detailed"
        />
      ))}
    </div>
  );
};

export default Team;
