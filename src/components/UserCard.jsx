import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Link,
  Icon,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FiGlobe, FiTwitter, FiUsers } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function UserCard({ user }) {
  const { t } = useTranslation();

  return (
    <Box p={6} borderRadius="lg" borderWidth="1px" bg="white" shadow="sm">
      <VStack spacing={4} align="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={user.avatar_url}
          alt={user.name}
          fallbackSrc="https://placeholder.com"
        />

        <Box textAlign="center">
          <Text fontWeight="bold" fontSize="xl">
            {user.name || user.login}
          </Text>
          <Text color="gray.500">@{user.login}</Text>
        </Box>

        <Text textAlign="center" noOfLines={3}>
          {user.bio || "No bio available."}
        </Text>

        <HStack spacing={4} color="gray.600">
          <HStack>
            <Icon as={FiUsers} />
            <Text fontSize="sm">{user.followers} followers</Text>
          </HStack>
          <HStack>
            <Icon as={FiUsers} />
            <Text fontSize="sm">{user.following} following</Text>
          </HStack>
        </HStack>

        <Divider />

        <VStack w="100%" spacing={3}>
          {user.blog && (
            <Button
              as={Link}
              href={
                user.blog.startsWith("http")
                  ? user.blog
                  : `https://${user.blog}`
              }
              isExternal
              leftIcon={<FiGlobe />}
              colorScheme="blue"
              w="100%"
            >
              {t("visit_site")}
            </Button>
          )}

          {user.twitter_username && (
            <Button
              as="a"
              href={"https://x.com/" + user.twitter_username}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              colorScheme="gray"
              w="100%"
              leftIcon={<span>𝕏</span>}
            >
              {t("twitter")}
            </Button>
          )}
        </VStack>
      </VStack>
    </Box>
  );
}
