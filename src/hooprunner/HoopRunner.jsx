import React from "react";
import Team from "./Team"; // make sure the path is correct
import teams from "./teams"; // import the teams data

export default function HoopRunner() {
  return (
    <div className="hoopRunner">
      {teams?.map((team) => {
        return (
          <div key={team.teamName} className="team">
            <Team name={team.teamName} players={team.roster} />
          </div>
        );
      })}
    </div>
  );
}
