import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Team from "./Team";
import { TeamType } from "../types";

const TeamView: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const [team, setTeam] = useState<TeamType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/teams/${teamId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((team) => {
        console.log("TeamView team:", team);
        setTeam(team);
      })
      .catch((error) => console.error("Error fetching team:", error));
  }, []);

  return (
    <div>
      {team ? (
        <>
          <Team id={team.id} team={team} viewMode="detailed" />
        </>
      ) : null}
    </div>
  );
};

export default TeamView;
