import { drawerAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(drawerAnatomy.keys);

const Drawer = helpers.defineMultiStyleConfig({
  baseStyle: {
    dialog: {
      bgColor: "background",
    },
  },
});

export default Drawer;
