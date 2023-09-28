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
      .then((player) => {
        console.log("player:", player);
        setPlayer(player);
      })
      .catch((error) => console.error("Error fetching player:", error));
  }, []);

  return (
    <div>
      <h1>Players Details</h1>
      {player ? (
        <Player id={player.id} player={player} viewMode="detailed" />
      ) : null}
    </div>
  );
};

export default PlayerView;
