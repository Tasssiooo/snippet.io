import { Box, Button, CardFooter, Flex, Link, Stack } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

import { Icon } from "@iconify-icon/react";

interface Props {
  type: "signup" | "signin";
}

export default function SignCardFooter({ type }: Props) {
  return (
    <CardFooter>
      <Flex flexDir="column" alignItems="center" w="full" rowGap="4">
        <Stack direction="row" justifyContent="space-between">
          <Button
            leftIcon={<Icon icon="bi:google" width={16} height={16} />}
            size={{ base: "sm", md: "md" }}
            color="red.500"
            bgColor="red.100"
            _hover={{ bgColor: "red.200" }}
            variant="solid"
          >
            Google
          </Button>
          <Button
            leftIcon={<Icon icon="bi:facebook" width={16} height={16} />}
            size={{ base: "sm", md: "md" }}
            color="blue.500"
            bgColor="blue.100"
            _hover={{ bgColor: "blue.200" }}
            variant="solid"
          >
            Facebook
          </Button>
          <Button
            leftIcon={<Icon icon="bi:github" width={16} height={16} />}
            size={{ base: "sm", md: "md" }}
            color="gray.500"
            bgColor="gray.100"
            _hover={{ bgColor: "gray.200" }}
            variant="solid"
          >
            Github
          </Button>
        </Stack>
        <Box as="span" color="blackAlpha.800" fontSize="sm">
          {type === "signin"
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            as={ReactRouterLink}
            to={type === "signin" ? "/auth/signup" : "/auth/signin"}
            color="primary.default"
            textDecoration="underline"
          >
            {type === "signin" ? "Sign up!" : "Sign in!"}
          </Link>
        </Box>
      </Flex>
    </CardFooter>
  );
}
