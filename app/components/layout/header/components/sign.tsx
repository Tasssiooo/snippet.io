import { Button, Flex, VisuallyHidden, useColorMode } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

import { Icon } from "@iconify-icon/react";

export default function Sign() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="ul"
      flexDir="row"
      alignItems="center"
      listStyleType="none"
      columnGap="2"
      display={{ base: "none", lg: "flex" }}
    >
      <li>
        <Button
          onClick={toggleColorMode}
          variant="ghost"
          leftIcon={
            <Icon
              icon={colorMode === "light" ? "ri:sun-line" : "ri:moon-line"}
              width={20}
              height={20}
            />
          }
          iconSpacing={0}
          p="2"
        >
          <VisuallyHidden>
            {colorMode === "light"
              ? "Change to dark theme"
              : "Change to light theme"}
          </VisuallyHidden>
        </Button>
      </li>
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
  );
}
