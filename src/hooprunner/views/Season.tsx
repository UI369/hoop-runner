import React from "react";

import PlayerComponent from "./Player";
import TeamComponent from "./Team";
import GameComponent from "./Game";
import { SeasonType } from "../types";
import { Link as RouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";

interface Props {
  id: number; // Add the id property
  season: SeasonType;
  viewMode?: "list" | "detailed";
}

const readableDate = (isoString: string): string => {
  const date = new Date(isoString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const Season: React.FC<Props> = ({ id, season, viewMode }) => {
  if (viewMode === "detailed") {
    return (
      <div style={{ border: "1px solid black" }}>
        <Center>
          <VStack spacing={2} textAlign="center">
            <div>Season Start: {readableDate(season.start_date)}</div>
            <hr></hr>
            <h2>
              <strong>Teams</strong>
            </h2>

            <div className="game-score-container">
              {season.teams.map((team) => (
                <>
                  <TeamComponent
                    key={team.id}
                    id={team.id}
                    team={team}
                    viewMode="list"
                  />
                </>
              ))}
            </div>
            <h2>
              <strong>Games</strong>
            </h2>
            <div className="game-score-container">
              {season.games.map((game) => (
                <>
                  <GameComponent
                    key={game.id}
                    id={game.id}
                    game={game}
                    viewMode="list"
                  />
                </>
              ))}
            </div>
            <ChakraLink
              as={RouterLink}
              to="/"
              variant="internalLink"
              fontSize="xl"
            >
              Return Home
            </ChakraLink>
          </VStack>
        </Center>
      </div>
    );
  }

  return (
    <ChakraLink
      as={RouterLink}
      to={`/seasons/${season.id}`}
      variant="internalLink"
      fontSize="xl"
    >
      Season {season.id}
    </ChakraLink>
  );
};

export default Season;
