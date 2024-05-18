import {
  extendTheme,
  textDecoration,
  type ThemeConfig,
} from "@chakra-ui/react";

import Button from "./components/button";
import Menu from "./components/menu";
import Drawer from "./components/drawer";
import Link from "./components/link";
import Switch from "./components/switch";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "hsl(0 0% 100%)" : "hsl(0 0% 3.9%)",
        color: props.colorMode === "light" ? "hsl(0 0% 3.9%)" : "hsl(0 0% 98%)",
      },
    }),
  },
  components: {
    Button,
    Menu,
    Drawer,
    Link,
    Switch,
  },
  colors: {
    background: {
      light: "hsl(0 0% 100%)",
      dark: "hsl(0 0% 3.9%)",
    },
    primary: {
      default: "#008170",
      foreground: "#FAFAFA",
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
    card: {
      default: {
        light: "hsl(0 0% 100%)",
        dark: "hsl(0 0% 3.9%)",
      },
      foreground: {
        light: "hsl(0 0% 3.9%)",
        dark: "hsl(0 0% 98%)",
      },
    },
    popover: {
      default: {
        light: "hsl(0 0% 100%)",
        dark: "hsl(0 0% 3.9%)",
      },
      foreground: {
        light: "hsl(0 0% 3.9%)",
        dark: "hsl(0 0% 98%)",
      },
    },
    muted: {
      default: {
        light: "hsl(0 0% 96.1%)",
        dark: "hsl(0 0% 14.9%)",
      },
      foreground: {
        light: "hsl(0 0% 45.1%)",
        dark: "hsl(0 0% 63.9%)",
      },
    },
    accent: {
      default: {
        light: "hsl(0 0% 96.1%)",
        dark: "hsl(0 0% 14.9%)",
      },
      foreground: {
        light: "hsl(0 0% 9%)",
        dark: "hsl(0 0% 98%)",
      },
    },
    destructive: {
      default: {
        light: "hsl(0 84.2% 60.2%)",
        dark: "hsl(0 62.8% 30.6%)",
      },
      foreground: {
        light: "hsl(0 0% 98%)",
        dark: "hsl(0 0% 98%)",
      },
    },
  },
  config,
});

export default theme;
