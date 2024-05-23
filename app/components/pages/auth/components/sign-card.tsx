import { Card, CardProps } from "@chakra-ui/react";

export default function SignCard(props: CardProps) {
  return (
    <Card
      bgColor="white"
      w={{ base: "96", sm: "558px" }}
      px="4"
      py="8"
      rounded="xl"
      shadow="lg"
      {...props}
    />
  );
}
