import React, { useState, useEffect } from "react";
import Season from "./Season";
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

const SeasonsList: React.FC = () => {
  console.log("SeasonsList component rendered");
  const [seasons, setSeasons] = useState<SeasonType[]>([]);

  const handleFetch = () => {
    fetch(`${import.meta.env.VITE_API_URL}/seasons`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setSeasons(data);
      })
      .catch((error) => {
        console.error("Error fetching seasons:", error);
      });
  };

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      console.log("Running in development mode");
    }

    fetch(`${import.meta.env.VITE_API_URL}/seasons`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setSeasons(data);
      })
      .catch((error) => {
        console.error("Error fetching seasons:", error);
      });
  }, []);

  return (
    <div>
      <Center>
        <VStack spacing={4} textAlign="center">
          <h1>Seasons</h1>
          {seasons.map((season) => (
            <>
              <Season
                key={season.id}
                id={season.id}
                season={season}
                viewMode="list"
              />
            </>
          ))}
        </VStack>
      </Center>
    </div>
  );
};

export default SeasonsList;
