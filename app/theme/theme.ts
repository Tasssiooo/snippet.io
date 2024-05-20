import "./theme.css";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

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
    global: {
      body: {
        bg: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      },
      p: {
        lineHeight: "1.75",
        "&:not(:first-child)": {
          mt: "6",
        },
        fontSize: { base: "sm", xl: "md" },
      },
    },
  },
  components: {
    Button,
    Menu,
    Drawer,
    Link,
    Switch,
  },
  colors: {
    background: "hsl(var(--background))",
    primary: {
      default: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
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
      default: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))",
    },
    popover: {
      default: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))",
    },
    muted: {
      default: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))",
    },
    accent: {
      default: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    },
    destructive: {
      default: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
  },
  config,
});

export default theme;
