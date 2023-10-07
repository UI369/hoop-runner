import React, { useState, useEffect } from "react";
import Player from "./Player";
import { PlayerType } from "./types";

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<PlayerType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/players`)
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  return (
    <div>
      <h1>Players</h1>
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          captain={false}
          player={player}
        />
      ))}
    </div>
  );
};

export default PlayersList;
