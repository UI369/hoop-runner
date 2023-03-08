import { useState } from "react";
import { useEffect } from "react";

const teams = [
  {
    teamName: "Team 1",
    roster: [
      { playerName: "Reginald" },
      { playerName: "Bob" },
      { playerName: "Mike S." },
    ],
  },
  {
    teamName: "Team 2",
    roster: [
      { playerName: "Archibald" },
      { playerName: "Stan" },
      { playerName: "Mike A." },
    ],
  },
  {
    teamName: "Team 3",
    roster: [
      { playerName: "Archibaldo" },
      { playerName: "Stank" },
      { playerName: "Mikey A." },
    ],
  },
];

export default function HoopRunner() {
  return (
    <>
      {teams?.map((team) => {
        return (
          <div key={team.teamName}>
            <Team name={team.teamName} players={team.roster} />
          </div>
        );
      })}
      ,
      {/* <div>
        <Team players={teams[0]} />
      </div>
      <div>
        <Team players={["Archibald", "Stan", "Mike A."]} />
      </div> */}
    </>
  );
}

function Team({ players }) {
  return (
    <>
      {players?.map((player) => {
        return (
          <Player key={player.playerName} playerName={player.playerName} />
        );
      })}
    </>
  );
}

function Player({ playerName }) {
  return <div className="player">Player: {playerName}</div>;
}
