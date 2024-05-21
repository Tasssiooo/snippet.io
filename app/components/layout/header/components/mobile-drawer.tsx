import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VisuallyHidden,
  Box,
  Flex,
  Link,
  Text,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

import { Icon } from "@iconify-icon/react";

import { Link as ReactRouterLink, useLocation } from "@remix-run/react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const pathname = useLocation().pathname;

  const isExplore = pathname === "/explore";
  const isAbout = pathname === "/about-snippet.io";

  return (
    <>
      <Button onClick={onOpen} display={{ lg: "none" }} p="2">
        <Icon icon="ri:menu-line" width={24} height={24} aria-hidden="true" />
        <VisuallyHidden>Open header drawer</VisuallyHidden>
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent h="calc(100vh - 72px)">
          <DrawerCloseButton />
          <DrawerBody w="full" maxW="sm" mx="auto">
            <Flex as="nav" my="4">
              <Flex
                as="ul"
                flexDir="column"
                listStyleType="none"
                fontWeight="600"
                w="full"
              >
                <li>
                  <Link
                    as={ReactRouterLink}
                    to="/explore"
                    borderBottom="1px"
                    borderColor="blackAlpha.400"
                    px="1"
                    color={isExplore ? "" : "muted.foreground"}
                    _dark={{
                      borderColor: "whiteAlpha.700",
                    }}
                    variant="navlink"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    as={ReactRouterLink}
                    to="/about-snippet-io"
                    borderBottom="1px"
                    borderColor="blackAlpha.400"
                    px="1"
                    color={isAbout ? "" : "muted.foreground"}
                    _dark={{
                      borderColor: "whiteAlpha.700",
                    }}
                    variant="navlink"
                  >
                    About Snippet.io
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://gist.github.com/discover"
                    isExternal
                    borderBottom="1px"
                    borderColor="blackAlpha.400"
                    _dark={{ borderColor: "whiteAlpha.700" }}
                    justifyContent="space-between"
                    px="1"
                    variant="navlink"
                  >
                    <Flex flexDir="row" alignItems="center" columnGap="2">
                      <Icon icon="ri:github-fill" width={24} height={24} />
                      Source
                    </Flex>
                    <Icon
                      icon="ri:external-link-line"
                      width={16}
                      height={16}
                      aria-hidden
                    />
                  </Link>
                </li>
              </Flex>
            </Flex>
            <Flex flexDir="column" my="2">
              <Menu matchWidth>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={
                    <Icon
                      icon="ri:arrow-down-s-line"
                      width="1.2em"
                      height="1.2em"
                      aria-hidden
                    />
                  }
                  px="2"
                  mt="2"
                  mb="3"
                >
                  <Box
                    display="inline-flex"
                    flexDir="row"
                    justifyContent="start"
                    alignItems="center"
                    w="full"
                    columnGap="2"
                  >
                    <Icon
                      icon="ri:translate"
                      width={24}
                      height={24}
                      aria-hidden
                    />
                    <div>English</div>
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem>English</MenuItem>
                  <MenuItem>Español</MenuItem>
                  <MenuItem>Português</MenuItem>
                </MenuList>
              </Menu>
              <Flex
                flexDir="row"
                rounded="md"
                columnGap="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="sm"
                bgColor="muted.default"
                fontWeight="600"
                p="4"
              >
                <span>Appearance</span>
                <Switch
                  onChange={toggleColorMode}
                  defaultChecked={colorMode === "dark" ? true : false}
                  variant="theme"
                />
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter mx="auto" mb="2">
            <Text fontSize="xs" fontStyle="italic" color="muted.foreground">
              Made with ❤️ by Tasssiooo
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
