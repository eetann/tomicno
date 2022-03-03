import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import { Pomodoro } from "./pomodoro/main";
import { Task } from "./task/main";
import { Timeline } from "./timeline/main";

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
      <Flex pos="relative" flexWrap="wrap" mt="4">
        <Box
          pos="sticky"
          top="0"
          pl="8"
          pr="4"
          w={{ base: "full", md: "40%" }}
          h="min-content"
        >
          <Pomodoro />
          <Task />
        </Box>
        <Box top="0" pl="4" pr="8" w={{ base: "full", md: "60%" }}>
          <Timeline />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
