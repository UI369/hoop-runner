import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Grass Valley Draft League</h1>
      <ChakraLink as={RouterLink} to="/teams/" variant="internalLink">
        View Teams
      </ChakraLink>
      <ChakraLink as={RouterLink} to="/games/" variant="internalLink">
        View Games
      </ChakraLink>
    </div>
  );
};

export default HomePage;
