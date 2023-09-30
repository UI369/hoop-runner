import React from "react";
import { GameType } from "./types";
import { formatDate, inchesToFeet, birthdateToAge } from "../util/formatting";

interface Props {
  id: number;
  game: GameType;
  viewMode?: "list" | "detailed";
}

const Game: React.FC<Props> = ({ id, game, viewMode }) => {
  if (viewMode === "detailed") {
    return (
      <div className="game">
        {formatDate(game.game_time, true)}
        <div className="game-details">
          <p>Home Score: {game.home_score}</p>
          <p>Away Score: {game.away_score}</p>
          <p>Location: {game.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      {formatDate(game.game_time, true)}
      <div className="game-details">
        <span>Home Score: {game.home_score}</span>
        <span>Away Score: {game.away_score}</span>
        <span>Location: {game.location}</span>
      </div>
    </div>
  );
};

export default Game;
