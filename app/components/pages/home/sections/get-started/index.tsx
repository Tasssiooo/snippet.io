import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

import background from "~/assets/images/get started bg.png";

export default function GetStarted() {
  return (
    <Flex
      as="section"
      bgColor="primary.500"
      bgImage={`url(${background})`}
      bgSize="cover"
      h="384px"
      px={{ base: "2", xl: "5" }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        textAlign="center"
        mx={{ md: "auto" }}
        mb={{ base: "8", md: "12" }}
        maxW="3xl"
        px="4"
      >
        <Heading as="h2">Get started!</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
          consequuntur atque perspiciatis quaerat harum illum dicta voluptas
          nesciunt!
        </Text>
        <Button
          as={ReactRouterLink}
          to="/auth/sign-up"
          bgColor="primary.700"
          mt="7"
        >
          Make my snippet
        </Button>
      </Box>
    </Flex>
  );
}
