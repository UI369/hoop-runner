import React from "react";
import { PlayerType, StatsType } from "../types";
import {
  formatDate,
  inchesToFeet,
  birthdateToAge,
} from "../../util/formatting";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import StatsLineComponent from "./StatsLine";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  player: PlayerType;
  captain: Boolean;
  viewMode?: "list" | "detailed";
}

const Player: React.FC<Props> = ({ id, player, captain, viewMode }) => {
  const aggregateStats = (statsArray: StatsType[]): StatsType => {
    return statsArray.reduce(
      (acc, stat) => {
        if (!stat.played) {
          return acc; // Skip this stat and continue with the next
        }

        return {
          ...acc,
          game_id: 0,
          twos_made: acc.twos_made + (stat.twos_made || 0),
          twos_attempted: acc.twos_attempted + (stat.twos_attempted || 0),
          threes_made: acc.threes_made + (stat.threes_made || 0),
          threes_attempted: acc.threes_attempted + (stat.threes_attempted || 0),
          freethrows_made: acc.freethrows_made + (stat.freethrows_made || 0),
          freethrows_attempted:
            acc.freethrows_attempted + (stat.freethrows_attempted || 0),
          offensive_rebounds:
            acc.offensive_rebounds + (stat.offensive_rebounds || 0),
          defensive_rebounds:
            acc.defensive_rebounds + (stat.defensive_rebounds || 0),
          assists: acc.assists + (stat.assists || 0),
          steals: acc.steals + (stat.steals || 0),
          blocks: acc.blocks + (stat.blocks || 0),
          fouls: acc.fouls + (stat.fouls || 0),
          minutes_played: acc.minutes_played + (stat.minutes_played || 0),
          played: true,
        };
      },
      {
        id: 0,
        game_id: 0,
        player_id: 0,
        playerName: "",
        twos_made: 0,
        twos_attempted: 0,
        threes_made: 0,
        threes_attempted: 0,
        freethrows_made: 0,
        freethrows_attempted: 0,
        offensive_rebounds: 0,
        defensive_rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        fouls: 0,
        minutes_played: 0,
        home: true,
        played: true,
      }
    );
  };

  const aggregated = aggregateStats(player.playerstats);
  console.log("aggregated", aggregated);

  const twoPointPercentage = aggregated.twos_attempted
    ? ((aggregated.twos_made / aggregated.twos_attempted) * 100).toFixed(2)
    : "N/A";
  const threePointPercentage = aggregated.threes_attempted
    ? ((aggregated.threes_made / aggregated.threes_attempted) * 100).toFixed(2)
    : "N/A";
  const freeThrowPercentage = aggregated.freethrows_attempted
    ? (
        (aggregated.freethrows_made / aggregated.freethrows_attempted) *
        100
      ).toFixed(2)
    : "N/A";
  if (viewMode === "detailed") {
    const totalPoints =
      aggregated.twos_made * 2 +
      aggregated.threes_made * 3 +
      aggregated.freethrows_made;

    return (
      <div className="player">
        {player.first_name} {player.last_name} {captain ? " (captain)" : ""}
        <div className="player-details">
          <p>Height: {inchesToFeet(player.height) || "N/A"}</p>
          <p>Weight: {player.weight || "N/A"} lbs</p>
          <p>Age: {birthdateToAge(player.birthdate)}</p>
          <p>Position: {player.position.join(", ")}</p>
          <p>Shirt Size: {player.shirt_size || "N/A"}</p>
        </div>
        <Table variant="simple">
          <StatsLineComponent id={0} header={true} />
          <Tbody>
            <StatsLineComponent
              key={aggregated.id}
              id={aggregated.id}
              stats={aggregated}
              header={false}
            />
          </Tbody>
        </Table>
        <div className="internalLink">
          <Link to={`/`}>Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <span className="cell">
        <Link to={`/players/${player.id}`}>
          {player.first_name} {player.last_name} {captain ? "(*)" : ""}
        </Link>
      </span>
      <Table variant="simple">
        <StatsLineComponent id={0} header={true} />
        <Tbody>
          <StatsLineComponent
            key={aggregated.id}
            id={aggregated.id}
            stats={aggregated}
            header={false}
          />
        </Tbody>
      </Table>
    </div>
  );
};

export default Player;
