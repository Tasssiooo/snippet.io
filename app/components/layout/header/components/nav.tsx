import {
  Box,
  Button,
  Flex,
  Link,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { Link as ReactRouterLink } from "@remix-run/react";

import { Icon } from "@iconify-icon/react";

export default function Nav() {
  return (
    <Flex as="nav" flexDir="row" columnGap="2">
      <Flex
        as="ul"
        flexDir="row"
        alignItems="center"
        listStyleType="none"
        columnGap="2"
      >
        <li>
          <Button as={ReactRouterLink} variant="ghost" size="sm" to="/explore">
            Explore
          </Button>
        </li>
        <li>
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              variant="ghost"
              rightIcon={
                <Icon icon="ri:arrow-down-s-line" width={20} height={20} />
              }
            >
              About
            </MenuButton>
            <MenuList px="2" fontSize="sm">
              <MenuItem
                rounded="md"
                fontWeight="600"
                icon={
                  <Icon icon="ri:information-2-line" width={24} height={24} />
                }
                iconSpacing="2"
              >
                About Snippet.io
              </MenuItem>
              <MenuItem
                as={Link}
                href="https://gist.github.com/discover"
                icon={<Icon icon="ri:github-fill" width={24} height={24} />}
                isExternal
                rounded="md"
                fontWeight="600"
                iconSpacing="2"
              >
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  Source
                  <Icon icon="ri:external-link-line" width={16} height={16} />
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </Flex>
    </Flex>
  );
}
