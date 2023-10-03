import React from "react";
import { GameType, StatsType } from "./types";
import { formatDate } from "../util/formatting";
import { Link } from "react-router-dom";
import StatsLineComponent from "./StatsLine";
interface Props {
  id: number;
  game: GameType;
  viewMode?: "list" | "detailed";
}

const Game: React.FC<Props> = ({ id, game, viewMode }) => {
  if (viewMode === "detailed") {
    return (
      <div className="game">
        <div>{formatDate(game.game_time, true)}</div>
        <div className="game-details">
          <p>Home Score: {game.home_score}</p>
          <p>Away Score: {game.away_score}</p>
          <p>Location: {game.location}</p>
        </div>
        <StatsLineComponent id={0} header={true} />
        {game.homeStats?.map((stats_line) => {
          return (
            <StatsLineComponent
              key={stats_line.id}
              id={stats_line.id}
              stats={stats_line}
            />
          );
        })}

        <div className="internalLink">
          <Link to={`/games/`}>Back to Games</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      <Link to={`/games/${game.id}`}> {formatDate(game.game_time, true)}</Link>
      <div className="game-details">
        <span>Home Score: {game.home_score}</span>
        <span>Away Score: {game.away_score}</span>
        <span>Location: {game.location}</span>
      </div>
    </div>
  );
};

export default Game;
