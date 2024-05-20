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
      as="section"
      templateColumns={{
        base: "repeat(1, max-content)",
        lg: "repeat(2, max-content)",
      }}
      placeItems="center"
      py="8"
      w="max-content"
      mx="auto"
      px={{ base: "2", xl: "5" }}
      gridRowGap="7"
    >
      <GridItem display="flex" flexDir="column" justifyContent="center">
        <Flex
          flexDir="column"
          justifyContent="center"
          mx={{ md: "auto" }}
          mb={{ base: "8", md: "12" }}
          px="4"
          maxW={{ base: "md", md: "2xl", lg: "md", xl: "xl" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "5xl", xl: "6xl" }}
            color="primary.100"
            bgGradient="linear(145deg, primary.100 0%, primary.400 25%, primary.700 50%, primary.900 75%)"
            bgClip="text"
          >
            Snippet.io
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex
            harum a explicabo delectus, nihil optio consequatur, numquam
            nesciunt dignissimos maiores dolorum animi, magni dicta ea. Dolorum
            consequuntur suscipit nulla.
          </Text>
          <Flex mt="4" columnGap="2.5">
            <Button as={ReactRouterLink} to="/create">
              Create
            </Button>
            <Button variant="ghost" as={ReactRouterLink} to="/about-snippet-io">
              About Snippet.io
            </Button>
          </Flex>
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
