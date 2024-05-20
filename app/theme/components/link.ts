import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {
    textDecoration: "unset !important",
  },
  variants: {
    navlink: {
      display: "inline-flex",
      alignItems: "center",
      py: "3",
      w: "full",
      color: "muted.foreground",

      _hover: {
        color: "primary.700 !important",
      },
    },
  },
});

export default Link;
