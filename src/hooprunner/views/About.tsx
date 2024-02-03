import {
  Box,
  Heading,
  Text,
  Container,
  Center,
  VStack,
  Divider,
  Link,
} from "@chakra-ui/react";
import pageLogo from "../../assets/page_logo.png";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} textAlign="center">
        <Link href="/" style={{ display: "inline-block" }}>
          <Center>
            <img src={pageLogo} alt="Page Logo" className="logoImage" />
          </Center>{" "}
        </Link>
        <Center>
          <Heading as="h1" size="2xl" mb={4}>
            What's the Grass Valley Draft League?
          </Heading>
        </Center>
        <Box bg="white" boxShadow="sm" p={6} rounded="md">
          <Heading as="h2" size="xl" mb={3}>
            How it Started
          </Heading>
          <Text fontSize="lg">
            The Grass Valley Draft League was formed in Fall 2023 through a
            fiscal sponsorship and volunteer hours from Boys to Men Norcal. The
            aim is to provide local basketball players ages 15+ with a way to
            join an officiated basketball league as an individual without the
            need to first draft or join a full squad of players.
          </Text>
        </Box>

        <Divider />

        <Box p={6} rounded="md">
          <Heading as="h2" size="xl" mb={3}>
            Joining the League
          </Heading>
          <Text fontSize="lg">
            Registrations open twice a year in Spring and Fall. The only
            requirement to join is that you're age 15 or above. <br />
            <br />
            Visit{" "}
            <Link href="https://www.hooprunner.com" isExternal color="blue.500">
              www.hooprunner.com
            </Link>{" "}
            to find the current registration link with dates and prices.
          </Text>
        </Box>

        <Divider />

        <Box p={6} rounded="md">
          <Heading as="h2" size="xl" mb={3}>
            How does the draft work?
          </Heading>
          <Text fontSize="lg">
            The registration form includes an option to bid on a captain's
            position. A captain's bid is at least $20 but can be any amount. The
            top 4 bidders are named captains and they draft their team at the
            Draft Night event.
          </Text>
        </Box>

        <Divider />

        <Box p={6} rounded="md">
          <Heading as="h2" size="xl" mb={3}>
            How does Draft Night work?
          </Heading>
          <Text fontSize="lg">
            For the players, you just show up and play some pickup ball. We run
            games to 10 minutes or 15 points. During this time, the captains are
            doing a "snake style" draft to select their teams. Players will know
            which team they're on by the end of the night.
          </Text>
        </Box>

        <Box p={6} rounded="md">
          <Heading as="h2" size="xl" mb={3}>
            What are the rules?
          </Heading>
          <Text fontSize="lg">
            We use High School rules and 20 minute halves, running clock.
            <br />
            <br />
            See
            <Link
              href="https://docs.google.com/document/d/1AL1B7aHq4ss9R2IMLSyLaJWwcaa9LiwnTaCAvUJP2XE/edit"
              isExternal
              color="blue.500"
            >
              Grass Valley Draft League Rules & Regulations
            </Link>{" "}
            for more information.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
