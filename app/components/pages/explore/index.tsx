import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
} from "@chakra-ui/react";

import { Link as ReactRouterLink, useLocation } from "@remix-run/react";

import { Icon } from "@iconify-icon/react";

import { ReactNode } from "react";

import Head from "~/components/pages/explore/components/head";

export default function ExploreView({ children }: { children: ReactNode }) {
  const pathname = useLocation().pathname;

  const index =
    pathname === "/explore" ? 0 : pathname === "/explore/forked" ? 1 : 2;

  return (
    <Box
      as="main"
      pos="relative"
      top="16"
      w="full"
      maxW="8xl"
      minH="100vh"
      overflow="hidden"
      mx="auto"
    >
      <Box pt="3" mb="4">
        <Box px="4">
          <Head />
          <Tabs colorScheme="teal" defaultIndex={index} isLazy>
            <TabList>
              <Tab
                as={ReactRouterLink}
                to="/explore"
                fontSize="sm"
                _selected={{ color: "primary.400" }}
              >
                <Icon
                  icon="ri:code-box-line"
                  width={20}
                  height={20}
                  style={{ marginRight: "4px" }}
                />
                All
              </Tab>
              <Tab
                as={ReactRouterLink}
                to="/explore/forked"
                fontSize="sm"
                _selected={{ color: "primary.400" }}
              >
                <Icon
                  icon="ri:git-fork-line"
                  width={20}
                  height={20}
                  style={{ marginRight: "4px" }}
                />
                Forked
              </Tab>
              <Tab
                as={ReactRouterLink}
                to="/explore/starred"
                fontSize="sm"
                _selected={{ color: "primary.400" }}
              >
                <Icon
                  icon="ri:star-line"
                  width={20}
                  height={20}
                  style={{ marginRight: "4px" }}
                />
                Starred
              </Tab>
            </TabList>
            <TabIndicator
              mt="-2px"
              height="2px"
              bg="primary.400"
              borderRadius="1px"
            />
            <TabPanels>{children}</TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
