import React from "react";
import { StatsType } from "../types";
import { formatDate } from "../../util/formatting";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
interface Props {
  id?: number;
  stats?: StatsType;
  header?: Boolean;
}

const StatsLine: React.FC<Props> = ({ id, stats, header }) => {
  if (header === true) {
    return (
      <Thead>
        <Tr>
          <Th className="player_name cell" flex="8">
            Player
          </Th>
          <Th className="player_fgm cell" flex="1">
            FGM
          </Th>
          <Th className="player_fga cell" flex="1">
            FGA
          </Th>
          <Th className="player_fg% cell" flex="1">
            FG%
          </Th>
          <Th className="player_3pm cell" flex="1">
            3PM
          </Th>
          <Th className="player_3pa cell" flex="1">
            3PA
          </Th>
          <Th className="player_3p% cell" flex="1">
            3P%
          </Th>
          <Th className="player_ftm cell" flex="1">
            FTM
          </Th>
          <Th className="player_fta cell" flex="1">
            FTA
          </Th>
          <Th className="player_ft% cell" flex="1">
            FT%
          </Th>
          <Th className="player_oreb cell" flex="1">
            OREB
          </Th>
          <Th className="player_dreb cell" flex="1">
            DREB
          </Th>
          <Th className="player_reb cell" flex="1">
            REB
          </Th>
          <Th className="player_ast cell" flex="1">
            AST
          </Th>
          <Th className="player_stl cell" flex="1">
            STL
          </Th>
          <Th className="player_blk cell" flex="1">
            BLK
          </Th>
          <Th className="player_pf cell" flex="1">
            PF
          </Th>
          <Th className="player_pts cell" flex="1">
            PTS
          </Th>
        </Tr>
      </Thead>
    );
  }

  const shotPercentage =
    stats?.twos_attempted && stats?.twos_attempted > 0
      ? +((stats.twos_made / stats.twos_attempted) * 100).toFixed(1)
      : 0;

  const threePercentage =
    stats?.threes_attempted && stats?.threes_attempted > 0
      ? +((stats.threes_made / stats.threes_attempted) * 100).toFixed(1)
      : 0;

  const freethrowPercentage =
    stats?.freethrows_attempted && stats?.freethrows_attempted > 0
      ? +((stats.freethrows_made / stats.freethrows_attempted) * 100).toFixed(1)
      : 0;

  const rebounds =
    stats?.offensive_rebounds &&
    stats.offensive_rebounds + stats.defensive_rebounds;

  const pointsScored =
    stats?.freethrows_made &&
    stats?.freethrows_made + 2 * stats?.twos_made + 3 * stats?.threes_made;

  return (
    <Tr>
      <Td className="player_name cell" flex="8">
        {stats?.playerName}
      </Td>
      <Td className="player_fga cell" flex="1">
        {stats?.twos_attempted}
      </Td>
      <Td className="player_fgm cell" flex="1">
        {stats?.twos_made}
      </Td>
      <Td className="player_fg% cell" flex="1">
        {shotPercentage}
      </Td>
      <Td className="player_3pa cell" flex="1">
        {stats?.threes_attempted}
      </Td>
      <Td className="player_3pm cell" flex="1">
        {stats?.threes_made}
      </Td>
      <Td className="player_3p% cell" flex="1">
        {threePercentage}
      </Td>
      <Td className="player_fta cell" flex="1">
        {stats?.freethrows_attempted}
      </Td>
      <Td className="player_ftm cell" flex="1">
        {stats?.freethrows_made}
      </Td>
      <Td className="player_ft% cell" flex="1">
        {freethrowPercentage}
      </Td>
      <Td className="player_oreb cell" flex="1">
        {stats?.offensive_rebounds}
      </Td>
      <Td className="player_dreb cell" flex="1">
        {stats?.defensive_rebounds}
      </Td>
      <Td className="player_reb cell" flex="1">
        {rebounds}
      </Td>
      <Td className="player_ast cell" flex="1">
        {stats?.assists}
      </Td>
      <Td className="player_stl cell" flex="1">
        {stats?.steals}
      </Td>
      <Td className="player_blk cell" flex="1">
        {stats?.blocks}
      </Td>
      <Td className="player_pf cell" flex="1">
        {stats?.fouls}
      </Td>
      <Td className="player_pts cell" flex="1">
        {pointsScored}
      </Td>
    </Tr>
  );
};

export default StatsLine;
