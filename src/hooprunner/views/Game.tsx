import React from "react";
import { GameType, StatsType } from "../types";
import { formatDate } from "../../util/formatting";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import StatsLineComponent from "./StatsLine";
import { formatGameTime } from "../../util/formatting";
import { Link } from "react-router-dom";
import { Link as ChakraLink, Center } from "@chakra-ui/react";

// src/components/Game.js or src/components/Game.tsx

interface Props {
  id: number;
  game: GameType;
  viewMode?: "list" | "detailed";
}

const Game: React.FC<Props> = ({ id, game, viewMode }) => {
  console.log("game:", game);
  if (viewMode === "detailed") {
    return (
      // Game Results
      <div className="game">
        {/* Top Game Block */}
        <div className="game-score">
          <div className="team home-team">
            <img
              src={
                game.home_team ? `/team${game.home_team.id}.png` : "/TBD.png"
              }
              alt={game.home_team ? game.home_team.team_name : "Team TBD"}
              className="team-logo"
            />
            <span className="team-name">
              {game.home_team ? game.home_team.team_name : "TBD"}
            </span>
          </div>
          <span className="team-score home-score">
            {game.home_score ? game.home_score : "--"}
          </span>
          <span className="status">
            <span className={game.home_score ? "finalTime" : "gameTime"}>
              {game.home_score ? "FINAL" : formatGameTime(game.game_time)[0]}
            </span>
            <br />
            <span className="gameDate">
              {formatDate(game.game_time, true)}
              {game.home_score ? "" : "\n" + formatGameTime(game.game_time)[1]}
            </span>
            <br />
            <span className="gameData">{game.location}</span>
            <br />
            Referees: {game.referee1} & {game.referee2}
          </span>
          <span className="team-score away-score">
            {" "}
            {game.away_score ? game.away_score : "--"}
          </span>
          <div className="team away-team">
            <img
              src={
                game.away_team ? `/team${game.away_team.id}.png` : "/TBD.png"
              }
              alt={game.away_team ? game.away_team.team_name : "Team TBD"}
              className="team-logo"
            />
            <span className="team-name">
              {game.away_team ? game.away_team.team_name : "TBD"}
            </span>
          </div>
        </div>
        <div className="team home-team">
          <img
            src={game.home_team ? `/team${game.home_team.id}.png` : "/TBD.png"}
            alt={game.home_team ? game.home_team.team_name : "Team TBD"}
            className="team-logo"
          />
          <span className="team-name">
            {game.home_team ? game.home_team.team_name : "TBD"}
          </span>
        </div>
        {/* End top game block */}

        <Table variant="simple">
          <StatsLineComponent id={0} header={true} />

          <Tbody>
            {game.homeStats
              ?.slice()
              .sort((a: StatsType, b: StatsType) =>
                a.played === b.played ? 0 : a.played ? -1 : 1
              )
              .map((stats_line: StatsType) => (
                <StatsLineComponent
                  key={stats_line.id}
                  id={stats_line.id}
                  stats={stats_line}
                  header={false}
                />
              ))}
          </Tbody>
        </Table>
        <div className="team away-team">
          <img
            src={game.away_team ? `/team${game.away_team.id}.png` : "/TBD.png"}
            alt={game.away_team ? game.away_team.team_name : "Team TBD"}
            className="team-logo"
          />
          <span className="team-name">
            {game.away_team ? game.away_team.team_name : "TBD"}
          </span>
        </div>
        <Table variant="simple">
          <StatsLineComponent id={0} header={true} />

          <Tbody>
            {game.awayStats
              ?.slice()
              .sort((a: StatsType, b: StatsType) =>
                a.played === b.played ? 0 : a.played ? -1 : 1
              )
              .map((stats_line: StatsType) => (
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
          <Link to={`/seasons/${game.season_id}`}>Back to Season</Link>
        </div>
      </div>
    );
  }

  return (
    <ChakraLink as={Link} to={`/games/${game.id}`}>
      <div className="game-score">
        <div className="team home-team">
          <img
            src={game.home_team ? `/team${game.home_team.id}.png` : "/TBD.png"}
            alt={game.home_team ? game.home_team.team_name : "Team TBD"}
            className="team-logo"
          />
          {/* <span className="team-name">
            {game.home_team ? game.home_team.team_name : "TBD"}
          </span> */}
        </div>
        <span className="team-score home-score">
          {game.home_score ? game.home_score : "--"}
        </span>
        <span className="status">
          <span className={game.home_score ? "finalTime" : "gameTime"}>
            {game.home_score ? "FINAL" : formatGameTime(game.game_time)[0]}
          </span>
          <br />
          <span className="gameDate">
            {game.home_score ? "" : "\n" + formatGameTime(game.game_time)[1]}
          </span>
        </span>
        <span className="team-score away-score">
          {" "}
          {game.away_score ? game.away_score : "--"}
        </span>
        <div className="team away-team">
          <img
            src={game.away_team ? `/team${game.away_team.id}.png` : "/TBD.png"}
            alt={game.away_team ? game.away_team.team_name : "Team TBD"}
            className="team-logo"
          />
          {/* <span className="team-name">
            {game.away_team ? game.away_team.team_name : "TBD"}
          </span> */}
        </div>
      </div>
    </ChakraLink>
  );
};

export default Game;
