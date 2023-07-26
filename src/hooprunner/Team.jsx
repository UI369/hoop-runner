import React from "react";
import Player from "./Player"; // make sure the path is correct

function Team({ name, players }) {
  return (
    <>
      <span>{name}</span>
      {players?.map((player) => {
        return (
          <Player key={player.playerName} playerName={player.playerName} />
        );
      })}
    </>
  );
}

export default Team;
