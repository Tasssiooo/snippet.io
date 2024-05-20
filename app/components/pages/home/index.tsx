import { Box, SkipNavContent } from "@chakra-ui/react";

import Hero from "./sections/hero";
import Customization from "./sections/customization";
import ChooseYourLanguage from "./sections/choose-your-language";
import GetStarted from "./sections/get-started";

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
    >
      <SkipNavContent id="snippet.io-skip-nav" />
      {/* Sections */}
      <Hero />
      <Customization />
      <ChooseYourLanguage />
      <GetStarted />
    </Box>
  );
}
