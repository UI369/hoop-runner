import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import PlayerComponent from "./Player";

interface Props {
  id: number; // Add the id property
  name: string;
  players?: { id: number; playerName: string }[];
  viewMode?: "list" | "detailed";
}

const Team: React.FC<Props> = ({ id, name, players, viewMode }) => {
  if (viewMode === "list") {
    return (
      <div style={{ border: "1px solid black" }}>
        <Link to={`/teams/${id}`}>{name}</Link>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <span>{name}</span>
      {players?.map((player) => (
        <PlayerComponent
          key={player.id}
          id={player.id}
          playerName={player.playerName}
        />
      ))}
    </div>
  );
};

export default Team;
