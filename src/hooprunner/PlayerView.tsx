import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Player from "./Player";
import { PlayerType } from "./types";

const PlayerView: React.FC = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const [player, setPlayer] = useState<PlayerType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/players/${playerId}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data))
      .catch((error) => console.error("Error fetching player:", error));
  }, []);

  return (
    <div>
      <h1>Players Details</h1>
      {player && (
        <Player
          key={player.id}
          id={player.id}
          playerName={player.playerName}
          viewMode="detailed"
        />
      )}
    </div>
  );
};

export default PlayerView;
