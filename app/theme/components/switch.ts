import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(switchAnatomy.keys);

import moon from "~/assets/icons/ri--moon-line.svg";
import sun from "~/assets/icons/ri--sun-line.svg";

const Switch = helpers.defineMultiStyleConfig({
  variants: {
    theme: {
      thumb: {
        bgImage: `url(${sun})`,
        bgSize: "12px",
        bgRepeat: "no-repeat",
        bgPos: "center",
        _checked: {
          bgImage: `url(${moon})`,
          bgColor: "background",
        },
      },
      track: {
        _checked: {
          bgColor: "primary.700",
        },
      },
    },
  },
});

export default Switch;
