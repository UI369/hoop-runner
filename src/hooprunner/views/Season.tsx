import React from "react";
import { Link } from "react-router-dom";
import PlayerComponent from "./Player";
import TeamComponent from "./Team";
import { SeasonType } from "../types";
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
          <VStack spacing={4} textAlign="center">
            <div>Start Date: {readableDate(season.start_date)}</div>
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
            <div className="internalLink">
              <Link to={`/`}>Back to Home</Link>
            </div>
          </VStack>
        </Center>
      </div>
    );
  }

  return (
    <div>
      <div className="internalLink">
        <Link to={`/seasons/${season.id}`}>Season {season.id}</Link>
      </div>
    </div>
  );
};

export default Season;
