import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(menuAnatomy.keys);

const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    list: {
      bgColor: "popover.default",
      fontSize: "sm",
      px: "2",
    },
    item: {
      fontWeight: "medium",
      fontSize: "md",
      bgColor: "transparent",
      color: "popover.foreground",
      rounded: "md",

      _hover: {
        bgColor: "accent.default",
        color: "accent.foreground",
      },
    },
  },
});

export default Menu;
