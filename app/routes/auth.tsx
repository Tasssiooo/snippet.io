import { Box, Flex, Img } from "@chakra-ui/react";

import { Outlet } from "@remix-run/react";

import background from "~/assets/images/auth-bg.png";
import code from "~/assets/images/auth-code.png";

export default function Auth() {
  return (
    <Flex
      as="main"
      justifyContent="center"
      alignItems="center"
      w="full"
      h="100vh"
      bgImage={`url(${background})`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      overflowX="hidden"
      overflowY="auto"
      py="4"
      columnGap="20"
    >
      <Box color="primary.default" display={{ base: "none", lg: "block" }}>
        <Flex
          flexDir="row"
          alignItems="center"
          columnGap="1"
          title="Snippet.io"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            role="img"
          >
            <path
              fill="currentColor"
              d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3c0 4.736 3.269 5.996 5 6m13-11c-.082 0-2-.034-2-3c0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4c0 1.993.665 3.246 1.502 4c-.837.754-1.502 2.007-1.502 4c0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3z"
            />
          </svg>
          <Box fontWeight="bold" fontSize="4xl" userSelect="none" mb="0.5">
            .io
          </Box>
        </Flex>
        <Img src={code} htmlWidth={687} htmlHeight={189} alt="" />
      </Box>
      <Flex alignItems="center">
        <Outlet />
      </Flex>
    </Flex>
  );
}
