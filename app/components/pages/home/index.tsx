import { Box, SkipNavContent } from "@chakra-ui/react";

import Presentation from "./sections/presentation";

export default function HomeView() {
  return (
    <Box
      as="main"
      pos="relative"
      top="16"
      w="full"
      maxW="8xl"
      minH="100vh"
      mx="auto"
      px="8"
    >
      <SkipNavContent id="snippet.io-skip-nav" />
      {/* Sections */}
      <Presentation />
    </Box>
  );
}
