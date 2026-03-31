import { useState } from "react";
import { Box, Input, Button, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState("");
  const { t } = useTranslation();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(username);
    }
  };

  return (
    <Flex 
      gap={2} 
      flexDirection={{ base: "column", md: "row" }} 
      w="100%"
    >
      <Input
        placeholder={t("search_placeholder")} 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
        bg="white"
      />
      <Button 
        onClick={() => onSearch(username)}
        isLoading={isLoading} 
        colorScheme="blue"
        px={8}
      >
        {t("search_btn")}
      </Button>
    </Flex>
  );
}
