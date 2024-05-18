import { drawerAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(drawerAnatomy.keys);

const Drawer = helpers.defineMultiStyleConfig({
  baseStyle: {
    dialog: {
      bgColor: "background.light !important",

      _dark: {
        bgColor: "background.dark !important",
      },
    },
  },
});

export default Drawer;
