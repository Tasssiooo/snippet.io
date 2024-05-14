import { Box, Flex } from "@chakra-ui/react";

import Logo from "./components/logo";
import Nav from "./components/nav";
import Sign from "./components/sign";

export default function Header() {
  return (
    <Box pos="fixed" top="0" left="0" w="full">
      <Flex
        flexDir="row"
        justifyContent="space-between"
        maxW="8xl"
        mx="auto"
        px="6"
        py="4"
      >
        <Logo />
        <Nav />
        <Sign />
      </Flex>
    </Box>
  );
}
