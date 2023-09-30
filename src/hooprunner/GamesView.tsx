import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Game from "./Game";
import { GameType } from "./types";
import { formatDate } from "../util/formatting";

const GameView: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<GameType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/games/${gameId}`)
      .then((response) => response.json())
      .then((game) => {
        console.log("game:", game);
        setGame(game);
      })
      .catch((error) => console.error("Error fetching game:", error));
  }, []);
  return game ? <Game id={game.id} game={game} viewMode="detailed" /> : null;
};

export default GameView;
