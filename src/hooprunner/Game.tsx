import React from "react";
import { GameType, StatsType } from "./types";
import { formatDate } from "../util/formatting";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import StatsLineComponent from "./StatsLine";

// src/components/Game.js or src/components/Game.tsx

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
          <p>
            <strong>{game.home_team.team_name} (Home):</strong>{" "}
            {game.home_score}
          </p>
          <p>
            <strong>{game.away_team.team_name} (Away): </strong>{" "}
            {game.away_score}
          </p>
          <p>
            <strong>Location:</strong> {game.location}
          </p>
        </div>

        <Table variant="simple">
          <StatsLineComponent id={0} header={true} />

          <Tbody>
            {game.homeStats?.map((stats_line) => (
              <StatsLineComponent
                key={stats_line.id}
                id={stats_line.id}
                stats={stats_line}
                header={false}
              />
            ))}
          </Tbody>
        </Table>

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
