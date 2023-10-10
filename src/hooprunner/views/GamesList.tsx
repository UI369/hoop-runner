import React, { useState, useEffect } from "react";
import Game from "./Game";
import { GameType } from "../types";
import { Link } from "react-router-dom";

const GamesList: React.FC = () => {
  const [games, setGames] = useState<GameType[]>([]);
  console.log("url", import.meta.env);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`)
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
      <div className="internalLink">
        {" "}
        <Link to={`/`}>Return Home</Link>
      </div>
    </div>
  );
};

export default GamesList;
