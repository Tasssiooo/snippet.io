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
      "100": "#e4fffb",
      "150": "#b8fff6",
      "200": "#8bfff0",
      "250": "#5fffea",
      "300": "#32ffe4",
      "350": "#06ffde",
      "400": "#00d8bc",
      "450": "#00ac95",
      "500": "#008170",
      "550": "#007364",
      "600": "#006759",
      "650": "#005b4f",
      "700": "#004f44",
      "750": "#00423a",
      "800": "#00362f",
      "850": "#002a24",
      "900": "#001e1a",
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
