import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Team from "./Team";
import { TeamType } from "./types";

const TeamView: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const [team, setTeam] = useState<TeamType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/teams/${teamId}`)
      .then((response) => response.json())
      .then((data) => setTeam(data))
      .catch((error) => console.error("Error fetching team:", error));
  }, []);

  return (
    <div>
      <h1>Teams Details</h1>
      {team && (
        <Team
          key={team.id}
          id={team.id}
          name={team.teamName}
          players={team.players}
          viewMode="detailed"
        />
      )}
    </div>
  );
};

export default TeamView;
