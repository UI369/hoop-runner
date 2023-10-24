import React from "react";
import SeasonsList from "../hooprunner/views/SeasonsList";
import {
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
          <h1 className="externalLink">
            <ChakraLink as={Link} to={`https://bit.ly/GVDRAFT`}>
              Register for Season 2
            </ChakraLink>
          </h1>
          <SeasonsList></SeasonsList>
        </VStack>
      </Center>
      <Text mt={8} fontSize="sm" textAlign="center">
        Welcome to the premier basketball league in Grass Valley!
      </Text>
    </Box>
  );
};

export default HomePage;
