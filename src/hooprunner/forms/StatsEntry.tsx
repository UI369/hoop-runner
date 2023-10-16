import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";

interface PlayerStatsInput {
  playerName: string;
  twos_attempted: number;
  twos_made: number;
  threes_attempted: number;
  threes_made: number;
  freethrows_attempted: number;
  freethrows_made: number;
  offensive_rebounds: number;
  defensive_rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  fouls: number;
}

const PlayerStatsForm: React.FC = () => {
  const [formData, setFormData] = useState<PlayerStatsInput>({
    playerName: "",
    twos_attempted: 0,
    twos_made: 0,
    threes_attempted: 0,
    threes_made: 0,
    freethrows_attempted: 0,
    freethrows_made: 0,
    offensive_rebounds: 0,
    defensive_rebounds: 0,
    assists: 0,
    steals: 0,
    blocks: 0,
    fouls: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "playerName" ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here, you can handle the form submission, e.g., make an API call.
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Add Player Stats</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Player Name</FormLabel>
            <Input
              type="text"
              name="playerName"
              value={formData.playerName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Twos Attempted</FormLabel>
            <Input
              type="number"
              name="twos_attempted"
              value={formData.twos_attempted}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Twos Made</FormLabel>
            <Input
              type="number"
              name="twos_made"
              value={formData.twos_made}
              onChange={handleInputChange}
            />
          </FormControl>
          {/* ... Repeat similar pattern for other fields ... */}
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default PlayerStatsForm;
