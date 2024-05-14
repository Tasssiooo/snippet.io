import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import Button from "./components/button";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    primary: {
      default: "#008170",
      100: "#5BFFE9",
      200: "#40FFE6",
      300: "#24FFE2",
      400: "#09FFDE",
      500: "#00EDCD",
      600: "#00D1B6",
      700: "#00B69E",
      800: "#009B86",
      900: "#008170",
    },
    secondary: {
      default: "#005B41",
      100: "#4CFFCC",
      200: "#2EFFC4",
      300: "#10FFBB",
      400: "#00F1AD",
      500: "#00D397",
      600: "#00B582",
      700: "#00986D",
      800: "#007A57",
      900: "#005B41",
    },
  },
  config,
});

export default theme;
