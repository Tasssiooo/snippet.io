import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  variants: {
    solid: {
      bgColor: "primary.default",
      color: "primary.foreground",
      _hover: {
        bgColor: "primary.800",
      },
    },
  },
});

export default Button;
