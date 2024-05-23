import {
  Flex,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
} from "@chakra-ui/react";

import { Icon } from "@iconify-icon/react";

export default function Head() {
  return (
    <Flex mb="3" alignItems="center" minH="12">
      <Icon icon="ri:code-box-line" width={32} height={32} />
      <Heading as="h1" size="md" ml="1" w="100%" flex="auto" float="none">
        Explore snippets
      </Heading>
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          minW="max-content"
          rightIcon={
            <Icon
              icon="ri:arrow-down-s-line"
              width={20}
              height={20}
              aria-hidden
            />
          }
        >
          Sort: Recently created
        </MenuButton>
        <MenuList>
          <MenuItemOption fontSize="sm" fontWeight="600" isChecked>
            Recently created
          </MenuItemOption>
          <MenuItemOption fontSize="sm" fontWeight="600">
            Least recently created
          </MenuItemOption>
          <MenuItemOption fontSize="sm" fontWeight="600">
            Recently updated
          </MenuItemOption>
          <MenuItemOption fontSize="sm" fontWeight="600">
            Least recently updated
          </MenuItemOption>
        </MenuList>
      </Menu>
    </Flex>
  );
}
