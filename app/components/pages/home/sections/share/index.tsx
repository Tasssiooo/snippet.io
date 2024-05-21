import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Icon } from "@iconify-icon/react";

import post from "~/assets/images/share-post.png";

export default function Share() {
  return (
    <Flex flexDir="column" py="14">
      <Box
        textAlign="center"
        mx={{ md: "auto" }}
        mb={{ base: "8", md: "12" }}
        maxW="3xl"
        px="4"
      >
        <Heading as="h2">Share</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
          consequuntur atque perspiciatis quaerat harum illum dicta voluptas
          nesciunt!
        </Text>
      </Box>
      <Box mx="auto" maxW="7xl" p="4" px={{ md: "8" }}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          flexBasis={{ md: "1/2" }}
          placeSelf="center"
          placeItems="center"
        >
          <GridItem>
            <Img
              src={post}
              htmlWidth={459}
              htmlHeight={408}
              alt='A social media post that shows a stylish snippet written in JavaScript and says "JavaScript with style hehe"'
            />
          </GridItem>
          <GridItem>
            <Stack direction="column" spacing="12" mx="auto">
              <Flex flexDir="row" maxW="none">
                <Flex
                  justifyContent="center"
                  bgColor="primary.default"
                  p="1"
                  h="max-content"
                  rounded="md"
                  color="whitesmoke"
                >
                  <Icon
                    icon="ri:export-fill"
                    width={32}
                    height={32}
                    aria-hidden
                  />
                </Flex>
                <Box mt="0.5">
                  <Heading as="h3" lineHeight="6" ml="4" fontSize="xl">
                    Export as an image
                  </Heading>
                  <Text ml="4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem fugiat accusamus eaque nemo, consequatur modi ea
                    voluptates numquam facere reiciendis nobis labore laudantium
                    non, quis eius doloribus, dolore illum velit.
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Flex
                  justifyContent="center"
                  bgColor="primary.default"
                  p="1"
                  h="max-content"
                  rounded="md"
                  color="whitesmoke"
                >
                  <Icon
                    icon="ri:code-box-line"
                    width={32}
                    height={32}
                    aria-hidden
                  />
                </Flex>
                <Box mt="0.5">
                  <Heading as="h3" lineHeight="6" ml="4" fontSize="xl">
                    Gist-like
                  </Heading>
                  <Text ml="4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem fugiat accusamus eaque nemo, consequatur modi ea
                    voluptates numquam facere reiciendis nobis labore laudantium
                    non, quis eius doloribus, dolore illum velit.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
