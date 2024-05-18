import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

import image from "~/assets/images/three-codes.png";

export default function Hero() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, max-content)",
        lg: "repeat(2, max-content)",
      }}
      placeItems="center"
      w="max-content"
      mx="auto"
      gridRowGap="7"
    >
      <GridItem display="flex" flexDir="column" justifyContent="center">
        <Flex flexDir="column" justifyContent="center">
          <Heading
            as="h1"
            fontSize={{ base: "5xl", xl: "6xl" }}
            lineHeight="2"
            color="primary.100"
            bgGradient="linear(145deg, primary.100 0%, primary.400 25%, primary.700 50%, primary.900 75%)"
            bgClip="text"
          >
            Snippet.io
          </Heading>
          <Text
            w={{ base: "sm", sm: "md", md: "xl", lg: "md", xl: "xl" }}
            fontSize={{ base: "sm", xl: "md" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex
            harum a explicabo delectus, nihil optio consequatur, numquam
            nesciunt dignissimos maiores dolorum animi, magni dicta ea. Dolorum
            consequuntur suscipit nulla.
          </Text>
        </Flex>
        <Flex mt="4" columnGap="2.5">
          <Button as={ReactRouterLink} to="/create">
            Create
          </Button>
          <Button variant="ghost" as={ReactRouterLink} to="/about-snippet-io">
            About Snippet.io
          </Button>
        </Flex>
      </GridItem>
      <GridItem>
        <Img
          src={image}
          w={{ base: "100%", md: "100%", lg: "523px", xl: "683px" }}
          h={{ base: "298px", md: "495px", lg: "397px", xl: "519px" }}
          objectFit="cover"
          alt=""
        />
      </GridItem>
    </Grid>
  );
}
