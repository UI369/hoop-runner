import React from "react";
import { Link } from "react-router-dom";
import PlayerComponent from "./Player";
import { TeamType } from "./types";

interface Props {
  id: number; // Add the id property
  team: TeamType;
  viewMode?: "list" | "detailed";
}

const Team: React.FC<Props> = ({ id, team, viewMode }) => {
  if (viewMode === "list") {
    return (
      <div style={{ border: "1px solid black" }}>
        <Link to={`/teams/${id}`}>{team.team_name}</Link>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{team.team_name}</h1>
      <div className="row">
        <span className="cell">Player</span>
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

      {team.players?.map((player) => (
        <PlayerComponent
          key={player.id}
          id={player.id}
          player={player}
          viewMode="list"
        />
      ))}
      <span>
        Back to <Link to={`/teams/`}>Teams</Link>
      </span>
    </div>
  );
};

export default Team;
