import React, { useState, useEffect } from "react";
import Game from "./Game";
import { GameType } from "./types";

const GamesList: React.FC = () => {
  const [games, setGames] = useState<GameType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <div>
      <h1>Games</h1>
      {games.map((game) => (
        <Game key={game.id} id={game.id} game={game} viewMode="list" />
      ))}
    </div>
  );
};

export default GamesList;
