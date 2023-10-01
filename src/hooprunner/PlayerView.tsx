import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Player from "./Player";
import { PlayerType } from "./types";

const PlayerView: React.FC = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const [player, setPlayer] = useState<PlayerType | null>(null);
  const [isCaptain, setIsCaptain] = useState<boolean>(false);

  useEffect(() => {
    fetch(`http://localhost:3000/players/${playerId}`)
      .then((response) => response.json())
      .then((player) => {
        setPlayer(player);
        // Fetch teams to check captain status
        return fetch(`http://localhost:3000/teams`)
          .then((response) => response.json())
          .then((teams) => {
            const captainTeam = teams.find(
              (team: any) => team.captain_id === player?.id
            );
            setIsCaptain(!!captainTeam);
          });
      })
      .catch((error) => console.error("Error fetching player:", error));
  }, []);

  return (
    <div>
      <h1>Players Details</h1>
      {player ? (
        <Player
          id={player.id}
          player={player}
          captain={isCaptain}
          viewMode="detailed"
        />
      ) : null}
    </div>
  );
};

export default PlayerView;
