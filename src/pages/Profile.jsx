import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Skeleton,
  Stack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { api } from "../services/api";
import RepoList from "../components/RepoList";
import UserCard from "../components/UserCard";
import { userSchema } from "../schemas/userSchema";

export default function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/users/${username}`);
        const parsed = userSchema.parse(res.data);
        setUser(parsed);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (error) {
    return (
      <Box maxW="1000px" mx="auto" p={8}>
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          Something went wrong while loading the profile. Please try again
          later.
        </Alert>
        <Button mt={4} onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box maxW="1000px" mx="auto" p={4}>
      <Button size="sm" mb={4} variant="ghost" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={6}>
        <Box w={{ base: "100%", md: "30%" }}>
          {loading ? (
            <Stack>
              <Skeleton height="250px" borderRadius="lg" />
              <Skeleton height="20px" />
              <Skeleton height="20px" width="60%" />
            </Stack>
          ) : (
            <UserCard user={user} />
          )}
        </Box>

        <Box w={{ base: "100%", md: "70%" }}>
          {loading ? (
            <Stack spacing={4}>
              <Skeleton height="120px" />
              <Skeleton height="120px" />
              <Skeleton height="120px" />
            </Stack>
          ) : (
            <RepoList username={username} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
