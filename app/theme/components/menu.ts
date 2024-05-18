import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(menuAnatomy.keys);

const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    list: {
      bgColor: "popover.default.light",
      fontSize: "sm",
      px: "2",

      _dark: {
        bgColor: "popover.default.dark",
      },
    },
    item: {
      fontWeight: "medium",
      fontSize: "md",
      bgColor: "transparent",
      color: "popover.foreground.light",
      rounded: "md",

      _hover: {
        bgColor: "accent.default.light",
        color: "accent.foreground.light",
      },

      _dark: {
        color: "popover.foreground.dark",

        _hover: {
          bgColor: "accent.default.dark",
          color: "accent.foreground.dark",
        },
      },
    },
  },
});

export default Menu;
