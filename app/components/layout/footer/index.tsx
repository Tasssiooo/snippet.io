import { Box, Link, Stack, Flex } from "@chakra-ui/react";

import { Icon } from "@iconify-icon/react";

import { Link as ReactRouterLink } from "@remix-run/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="full"
      maxW="8xl"
      h="32"
      mx="auto"
      mt="16"
      bgColor="primary.default"
    >
      <Stack
        direction="column"
        spacing="12px"
        maxW="xl"
        mx="auto"
        alignItems="center"
      >
        <Flex
          flexDir="row"
          alignItems="center"
          columnGap="1"
          title="Snippet.io"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
          >
            <path
              fill="currentColor"
              d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3c0 4.736 3.269 5.996 5 6m13-11c-.082 0-2-.034-2-3c0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4c0 1.993.665 3.246 1.502 4c-.837.754-1.502 2.007-1.502 4c0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3z"
            />
          </svg>
          <Box fontWeight="bold" fontSize="xl" userSelect="none" mb="0.5">
            .io
          </Box>
        </Flex>
        <Stack
          as="ul"
          direction="row"
          listStyleType="none"
          spacing="24px"
          fontSize="sm"
        >
          <li>
            <Link
              as={ReactRouterLink}
              to="/explore"
              textDecoration="underline"
              textUnderlineOffset="0.2rem"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              as={ReactRouterLink}
              to="/about-snippet-io"
              textDecoration="underline"
              textUnderlineOffset="0.2rem"
            >
              About Snippet.io
            </Link>
          </li>
          <li>
            <Link
              isExternal
              href="https://gist.github.com/discover"
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              columnGap="0.5"
              textDecoration="underline"
              textUnderlineOffset="0.2rem"
            >
              Source
              <Icon icon="ri:external-link-line" width={16} height={16} aria-hidden />
            </Link>
          </li>
        </Stack>
        <Box fontSize="xs" fontStyle="italic">
          Made by{" "}
          <Link
            isExternal
            href="https://github.com/Tasssiooo"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            columnGap="0.5"
            textDecoration="underline"
            textUnderlineOffset="0.2rem"
            color="yellow.300"
          >
            Tasssiooo
            <Icon icon="ri:external-link-line" width={16} height={16} aria-hidden />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
