import { CardHeader, CardHeaderProps, Heading, Text } from "@chakra-ui/react";

interface Props extends CardHeaderProps {
  heading: string;
  body: string;
}

export default function SignCardHeader({ heading, body, ...props }: Props) {
  return (
    <CardHeader textAlign="center" color="blackAlpha.900" {...props}>
      <Heading as="h2" size="lg">
        {heading}
      </Heading>
      <Text mt="1 !important" color="blackAlpha.700" fontWeight="600">
        {body}
      </Text>
    </CardHeader>
  );
}
