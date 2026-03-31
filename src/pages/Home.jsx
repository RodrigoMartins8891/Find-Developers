import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Input, Button, FormControl } from "@chakra-ui/react";
import { api } from "../services/api";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e?.preventDefault();

    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await api.get(`/users/${username}`);
      navigate(`/profile/${username}`);
    } catch (err) {
      setError("User not found");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSearch}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg="gray.50"
      px={4}
    >
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        mb={8}
        letterSpacing="tight"
        color="gray.800"
      >
        {t("search_title")}
      </Text>

      <Box
        display="flex"
        w="100%"
        maxW="500px"
        gap={2}
        flexDirection={{ base: "column", md: "row" }}
      >
        <FormControl isInvalid={!!error}>
          <Input
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error) setError("");
            }}
            bg="white"
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
          w={{ base: "100%", md: "auto" }}
        >
          Search
        </Button>
      </Box>

      {error && (
        <Text color="red.500" mt={3} textAlign="center" fontWeight="medium">
          {error}
        </Text>
      )}
    </Box>
  );
}
