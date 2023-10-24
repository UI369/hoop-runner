import React, { useState, useEffect } from "react";
import TeamComponent from "./Team";
import { TeamType } from "../types";
import { Link } from "react-router-dom";

const TeamsList: React.FC = () => {
  console.log("TeamsList component rendered");
  const [teams, setTeams] = useState<TeamType[]>([]);

  const handleFetch = () => {
    fetch(`${import.meta.env.VITE_API_URL}/teams`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setTeams(data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  };

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      console.log("Running in development mode");
    }

    fetch(`${import.meta.env.VITE_API_URL}/teams`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setTeams(data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <>
          <TeamComponent
            key={team.id}
            id={team.id}
            team={team}
            viewMode="list"
          />
        </>
      ))}
      <div className="internalLink">
        <Link to={`/`}>Return Home</Link>
      </div>
    </div>
  );
};

export default TeamsList;
