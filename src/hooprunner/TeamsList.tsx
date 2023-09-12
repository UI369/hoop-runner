import React, { useState, useEffect } from "react";
import Team from "./Team";
import { TeamType } from "./types";

const TeamsList: React.FC = () => {
  const [teams, setTeams] = useState<TeamType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching teams:", error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <Team key={team.id} id={team.id} name={team.teamName} viewMode="list" />
      ))}
    </div>
  );
};

export default TeamsList;
