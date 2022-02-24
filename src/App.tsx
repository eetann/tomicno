import {
  extendTheme,
  ChakraProvider,
  Box,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Pomodoro } from "./pomodoro/main";
import React from "react";
import { Task } from "./task/main";

const theme = extendTheme({
  colors: {
    cyberpunk: {
      1: "#FF2A6D",
      2: "#D1F7FF",
      3: "#05D9E8",
      4: "#005678",
      5: "#01012B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "cyberpunk.5",
        color: "cyberpunk.3",
      },
      ".drop-shadow": { filter: "drop-shadow(0 0 5px #D1F7FF)" },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HStack
        as="header"
        pos="fixed"
        top="0"
        left="0"
        w="full"
        h="12"
        bgColor="cyberpunk.4"
        zIndex="999"
        mb="4"
        spacing="4"
        px="4"
      >
        <Text fontSize="md">2022/02/24 13:11</Text>
        <Text fontSize="2xl">残り5時間39分</Text>
      </HStack>
      <Flex mt="16" pos="relative" flexWrap="wrap">
        <Box
          pos="sticky"
          top="16"
          pl="16"
          pr="8"
          w={{ base: "full", md: "30%" }}
          h="min-content"
        >
          <Pomodoro />
        </Box>
        <Box top="16" pl="8" pr="16" w={{ base: "full", md: "70%" }}>
          <Task />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
