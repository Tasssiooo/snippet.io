import { Box, SkipNavContent } from "@chakra-ui/react";

import Hero from "./sections/hero";
import Customization from "./sections/customization";

export default function HomeView() {
  return (
    <Box
      as="main"
      pos="relative"
      top="16"
      w="full"
      maxW="8xl"
      minH="100vh"
      overflow="hidden"
      mx="auto"
      px={{ base: "2", xl: "5" }}
    >
      <SkipNavContent id="snippet.io-skip-nav" />
      {/* Sections */}
      <Hero />
      <Customization />
    </Box>
  );
}
