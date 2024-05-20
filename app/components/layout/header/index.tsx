import { Box, Flex } from "@chakra-ui/react";

import Logo from "./components/logo";
import Nav from "./components/nav";
import Sign from "./components/sign";
import MobileDrawer from "./components/mobile-drawer";

import { useScroll } from "framer-motion";

import { useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  const { scrollYProgress } = useScroll();

  scrollYProgress.onChange((n) => setScroll(n));

  return (
    <Box pos="fixed" top="0" left="0" w="full" zIndex="50">
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        maxW="8xl"
        mx="auto"
        px="6"
        py="4"
        shadow={scroll > 0 ? "lg" : ""}
        bgColor="background"
        transition="box-shadow 150ms ease-in-out"
      >
        <Logo />
        <Nav />
        <Sign />
        <MobileDrawer />
      </Flex>
    </Box>
  );
}
