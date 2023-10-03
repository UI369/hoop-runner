import React from "react";
import { StatsType } from "./types";
import { formatDate } from "../util/formatting";
import { Link } from "react-router-dom";
interface Props {
  id?: number;
  stats?: StatsType;
  header?: Boolean;
}

const StatsLine: React.FC<Props> = ({ id, stats, header }) => {
  if (header === true) {
    return (
      <div className="row">
        <span className="player_fgm cell">FGM</span>
        <span className="player_fga cell">FGA</span>
        <span className="player_fg% cell">FG%</span>
        <span className="player_3pm cell">3PM</span>
        <span className="player_3pa cell">3PA</span>
        <span className="player_3p% cell">3P%</span>
        <span className="player_ftm cell">FTM</span>
        <span className="player_fta cell">FTA</span>
        <span className="player_ft% cell">FT%</span>
        <span className="player_oreb cell">OREB</span>
        <span className="player_dreb cell">DREB</span>
        <span className="player_reb cell">REB</span>
        <span className="player_ast cell">AST</span>
        <span className="player_stl cell">STL</span>
        <span className="player_blk cell">BLK</span>
        <span className="player_pf cell">PF</span>
        <span className="player_pts cell">PTS</span>
      </div>
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
    <div className="stats">
      <div className="row">
        <span className="player_fga cell">{stats?.twos_attempted}</span>
        <span className="player_fgm cell">{stats?.twos_made}</span>
        <span className="player_fg% cell">{shotPercentage}</span>
        <span className="player_3pa cell">{stats?.threes_attempted}</span>
        <span className="player_3pm cell">{stats?.threes_made}</span>
        <span className="player_3p% cell">{threePercentage}</span>
        <span className="player_fta cell">{stats?.freethrows_attempted}</span>
        <span className="player_ftm cell">{stats?.freethrows_made}</span>
        <span className="player_ft% cell">{freethrowPercentage}</span>
        <span className="player_oreb cell">{stats?.offensive_rebounds}</span>
        <span className="player_dreb cell">{stats?.defensive_rebounds}</span>
        <span className="player_reb cell">{rebounds}</span>
        <span className="player_ast cell">{stats?.assists}</span>
        <span className="player_stl cell">{stats?.steals}</span>
        <span className="player_blk cell">{stats?.blocks}</span>
        <span className="player_pf cell">{stats?.fouls}</span>
        <span className="player_pts cell">{pointsScored}</span>
      </div>
    </div>
  );
};

export default StatsLine;
