import { Box, Button, Flex } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

export default function Sign() {
  return (
    <Box as="nav">
      <Flex as="ul" flexDir="row" listStyleType="none" columnGap="2">
        <li>
          <Button
            variant="ghost"
            size="sm"
            as={ReactRouterLink}
            to="/auth/signin"
          >
            Sign in
          </Button>
        </li>
        <li>
          <Button size="sm" as={ReactRouterLink} to="/auth/signup">
            Sign up
          </Button>
        </li>
      </Flex>
    </Box>
  );
}
