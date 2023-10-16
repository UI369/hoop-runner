import React from "react";
import {
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import pageLogo from "../assets/page_logo.png";

const HomePage: React.FC = () => {
  return (
    <Box
      bg="primary.500"
      color="#dd752b"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Center>
        <VStack spacing={4} textAlign="center">
          <img src={pageLogo} alt="Page Logo" className="logoImage" />
          <Heading as="h1" size="2xl" mb={4}>
            Grass Valley Draft League
          </Heading>
          <ChakraLink
            as={RouterLink}
            to="/seasons/"
            variant="internalLink"
            fontSize="xl"
          >
            View Seasons
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/teams/"
            variant="internalLink"
            fontSize="xl"
          >
            View Teams
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/games/"
            variant="internalLink"
            fontSize="xl"
          >
            View Games
          </ChakraLink>
        </VStack>
      </Center>
      <Text mt={8} fontSize="sm" textAlign="center">
        Welcome to the premier basketball league in Grass Valley!
      </Text>
    </Box>
  );
};

export default HomePage;
